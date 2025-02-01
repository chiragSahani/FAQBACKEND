import { Router } from "express";
import { healthcheck } from "../controller/healthController.js";
// const router = Router();
const router = Router();
router.get("/", healthcheck);

export default router;
