import { APIError } from "../utils/apiError.js";
import { APIResponse } from "../utils/apiRes.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const healthcheck = asyncHandler((req, res) => {
  try {
    res.status(200).json(new APIResponse(200, undefined, "Healthcheck passed"));
  } catch (error) {
    throw new APIError(500, "Healthcheck failed", error);
  }
});

export { healthcheck };