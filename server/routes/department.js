import express from "express";
import authMiddleware from "../middleware/auth.js";

const router = express.router();

router.post("/add", authMiddleware);
