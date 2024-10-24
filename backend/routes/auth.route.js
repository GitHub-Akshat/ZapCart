import express from "express";

import { GetProfile, RefreshToken, Signin, Signout, Signup } from "../controllers/auth.controller.js";
import { ProtectedRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/signup", Signup);
router.post("/signin", Signin);
router.post("/signout", Signout);
router.post("/refresh-token", RefreshToken);
router.get("/profile", ProtectedRoute, GetProfile);

export default router;