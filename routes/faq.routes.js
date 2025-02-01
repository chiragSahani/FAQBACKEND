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
router.post("/create", createFAQ);
router.put("/update", updateFAQ);
router.delete("/delete", deleteFAQ);

export default router;
