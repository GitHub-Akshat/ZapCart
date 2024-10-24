import express from "express";

import { ProtectedRoute } from "../middleware/auth.middleware.js";
import { AddToCart, GetCartProducts, RemoveAllFromCart, UpdateQuantity } from "../controllers/cart.controller.js";

const router = express.Router();

router.get("/", ProtectedRoute, GetCartProducts);
router.post("/", ProtectedRoute, AddToCart);
router.delete("/", ProtectedRoute, RemoveAllFromCart);
router.put("/:id", ProtectedRoute, UpdateQuantity);

export default router;