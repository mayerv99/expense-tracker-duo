import express from "express";
import { validateToken } from "../Middleware/jwt";
import {
  checkIfCategoryExists,
  createNewCategory,
  getUsersCategories,
} from "../Controllers/categoriesController";

const router = express.Router();

router.get("/", validateToken, async (req, res) => {
  // Get all categories from the user
  const { userId } = req.body;
  const categories = await getUsersCategories(userId);

  if (!categories) {
    return res.status(404).json({ message: "Categories not found" });
  }

  res.status(200).json(categories);
});

router.post("/", validateToken, async (req, res) => {
  const { userId, name } = req.body;

  const categoryExists = await checkIfCategoryExists(userId, name);

  if (categoryExists) {
    return res.status(409).json({ message: "Category already exists" });
  }
  try {
    const newCategory = await createNewCategory(userId, name);
    res.status(201).json(newCategory);
  } catch (err) {
    res.status(500).json({ message: "Error" });
  }
});
