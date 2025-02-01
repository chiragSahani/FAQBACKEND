import { Router } from "express";
import {
  getFAQs,
  getOneFAQ,
  createFAQ,
  updateFAQ,
  deleteFAQ,
} from "../controllers/faq.controller.js";

const router = Router();

router.get("/", getFAQs);
router.get("/:id", getOneFAQ);
router.post("/", createFAQ);
router.put("/:id", updateFAQ);
router.delete("/:id", deleteFAQ);

export default router;