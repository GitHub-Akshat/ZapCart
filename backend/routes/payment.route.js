import express from "express";

import { ProtectedRoute } from "../middleware/auth.middleware.js";
import { CheckoutSuccess, CreateCheckoutSession } from "../controllers/payment.controller.js";

const router = express.Router();

router.post("/create-checkout-session", ProtectedRoute, CreateCheckoutSession);
router.post("/checkout-success", ProtectedRoute, CheckoutSuccess);

export default router;