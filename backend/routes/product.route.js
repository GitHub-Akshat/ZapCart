import express from "express";

import { CreateProduct, DeleteProduct, GetAllProducts, GetFeaturedProducts, GetProductsByCategory, GetRecommendedProducts, ToggleFeaturedProduct } from "../controllers/product.controller.js";
import { AdminRoute, ProtectedRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/", ProtectedRoute, AdminRoute, GetAllProducts);
router.get("/featured", GetFeaturedProducts);
router.get("/category/:category", GetProductsByCategory);
router.get("/recommendations", GetRecommendedProducts);
router.post("/", ProtectedRoute, AdminRoute, CreateProduct);
router.patch("/:id", ProtectedRoute, AdminRoute, ToggleFeaturedProduct);
router.delete("/:id", ProtectedRoute, AdminRoute, DeleteProduct);

export default router;