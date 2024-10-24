import express from "express";

import { ProtectedRoute } from "../middleware/auth.middleware.js";
import { GetCoupon, ValidateCoupon } from "../controllers/coupons.controller.js";

const router = express.Router();

router.get("/", ProtectedRoute, GetCoupon);
router.post("/validate", ProtectedRoute, ValidateCoupon);

export default router;