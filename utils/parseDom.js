import { JSDOM } from "jsdom";
import translate from "@vitalets/google-translate-api";
import { languages } from "./languages.js";

/**
 * Recursively collects all text nodes from a given DOM node.
 * @param {Node} node - The DOM node to collect text nodes from.
 * @returns {Node[]} - An array of text nodes.
 */
const getTextNodes = (node) => {
  const textNodes = [];
  if (node.nodeType === 3) {
    textNodes.push(node);
  }
  if (node.hasChildNodes()) {
    node.childNodes.forEach((childNode) => {
      textNodes.push(...getTextNodes(childNode));
    });
  }
  return textNodes;
};

/**
 * Translates the text content of an HTML string to a specified language.
 * 
 * @param {string} htmlContent - The HTML content to translate.
 * @param {string} targetLang - The target language code for translation.
 * @returns {Promise<string>} - A promise that resolves to the translated HTML content.
 */
const translateHTML = async (htmlContent, targetLang) => {
  const dom = new JSDOM(htmlContent);
  const document = dom.window.document;
  const textNodes = getTextNodes(document.body);
  for (const node of textNodes) {
    const originalText = node.textContent.trim();
    if (originalText) {
      try {
        const translatedText = await translate(originalText, { to: targetLang });
        node.textContent = translatedText.text;
      } catch (error) {
        console.error(`Error translating text: ${originalText}`, error);
        node.textContent = originalText; // Fallback to original text in case of error
      }
    }
  }
  return document.body.innerHTML;
};

/**
 * Parses the DOM and translates the content to multiple languages.
 * @param {Object} obj - The object containing the content to be translated.
 * @param {string} obj.answer - The HTML content to be translated.
    if (obj.translations[lang]) {
      obj.translations[lang].answer = await translateHTML(obj.answer, lang);
    } else {
      console.warn(`Translation object for language ${lang} does not exist.`);
    }
 * @returns {Promise<void>} - A promise that resolves when the translations are complete.
 */
async function ParseDOM(obj) {
  const translationPromises = languages.map(async (lang) => {
    obj.translations[lang].answer = await translateHTML(obj.answer, lang);
  });
  await Promise.all(translationPromises);
}

export { ParseDOM };
