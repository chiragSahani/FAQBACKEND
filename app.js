import "dotenv/config";
import express from "express";
import cors from "cors";
import winston from "winston";

import { APIResponse } from "./utils/apiRes.js";
import { APIError } from "./utils/apiER.js";

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT || "*",
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// route imports
import healthcheckRouter from "./routes/healthcheck.routes.js";
import FAQRouter from "./routes/faq.routes.js";

// route declaration
app.use("/api/v1/healthcheck", healthcheckRouter);
app.use("/api/v1/faqs", FAQRouter);

// catch-all route
app.use((req, res, next) => {
  const error = new APIError(404, "The requested route does not exist.");
  next(error);
});

// error middleware
app.use((err, req, res, next) => {
  if (err instanceof APIError) {
    const response = new APIResponse(err.statusCode, null, err.message);
    return res.status(err.statusCode).json(response);
  }
  console.error("Unexpected Error:", err); // Log the error for debugging
  winston.error("Unexpected Error:", err); // Log the error for debugging
  const response = new APIResponse(500, null, "Internal Server Error");
  return res.status(500).json(response);
});

export { app };
