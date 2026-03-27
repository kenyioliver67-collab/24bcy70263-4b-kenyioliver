import express from "express";
import * as CardController from "../controllers/card.controller.js";

const router = express.Router();

// Routes
router.get("/", CardController.getCards);
router.get("/:id", CardController.getCard);
router.post("/", CardController.createCard);
router.put("/:id", CardController.updateCard);
router.delete("/:id", CardController.deleteCard);

export default router;