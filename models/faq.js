import mongoose from "mongoose";
import translate from "google-translate-api-x";

import { languages } from "../utils/language.js ";
import { ParseDOM } from "../utils/parseDom.js";

const faqSchema = new mongoose.Schema(
  {
    question: {
      type: String,
      required: true,
      trim: true,
    },
    answer: {
      type: String,
      required: true,
    },
    translations: {
      hi: { question: String, answer: String }, // Hindi
      gu: { question: String, answer: String }, // Gujarati
      mr: { question: String, answer: String }, // Marathi
      bn: { question: String, answer: String }, // Bengali
    },
  },
  { timestamps: true }
);

faqSchema.pre("save", async function (next) {
  if (this.isModified("question")) {
    const translationPromises = languages.map(async (lang) => {
      const response = await translate(this.question, { to: lang });
      return { lang, text: response.text };
    });
    const translations = await Promise.all(translationPromises);
    translations.forEach(({ lang, text }) => {
      this.translations[lang].question = text;
    });
  }

  if (this.isModified("answer")) {
    await ParseDOM(this);
  }

  next();
});

faqSchema.pre("findOneAndUpdate", async function (next) {
  const update = this.getUpdate();

  if (update.question) {
    const translationPromises = languages.map(async (lang) => {
      const response = await translate(update.question, { to: lang });
      return { lang, text: response.text };
    });
    const translations = await Promise.all(translationPromises);
    translations.forEach(({ lang, text }) => {
      update[`translations.${lang}.question`] = text;
    });
  }

  if (update.answer) {
   await ParseDOM(update);
  }

  this.setUpdate(update);
  next();
});

faqSchema.methods.getTranslation = function (lang) {
  return (
    this.translations[lang] || { question: this.question, answer: this.answer }
  );
};

export const FAQ = mongoose.model("faq", faqSchema);
