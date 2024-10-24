import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
dotenv.config();

import authRoutes from "./routes/auth.route.js";
import productRoutes from "./routes/product.route.js";
import cartRoutes from "./routes/cart.route.js";
import couponsRoutes from "./routes/coupons.route.js";
import paymentRoutes from "./routes/payment.route.js";
import analyticsRoutes from "./routes/analytics.route.js";

import { connectDB } from "./lib/db.js";

const app = express();

app.use(express.json({limit:"5mb"}));
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/coupons", couponsRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/analytics", analyticsRoutes);

connectDB();

const port = process.env.PORT || 4000;

app.listen(port, ()=>{
    console.log(`Server Started at Port ${port}`);
});