import express from "express";
import { getFavorites, createFavorites } from "../controllers/favorites.js";

const router = express.Router();

router.get("/", getFavorites);
router.get("/", createFavorites);

export default router;
