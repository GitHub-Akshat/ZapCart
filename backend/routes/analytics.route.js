import express from "express";

import { AdminRoute, ProtectedRoute } from "../middleware/auth.middleware.js";
import { Analytics } from "../controllers/analytics.controller.js";

const router = express.Router();

router.get("/", ProtectedRoute, AdminRoute, Analytics);

export default router;