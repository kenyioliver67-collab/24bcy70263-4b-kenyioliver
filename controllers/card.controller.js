import * as CardService from "../services/card.service.js";

// GET /cards
export const getCards = (req, res) => {
    const { page = 1, limit = 10 } = req.query;

    const result = CardService.getCards(
        parseInt(page),
        parseInt(limit)
    );

    res.json(result);
};

// GET /cards/:id
export const getCard = (req, res) => {
    const card = CardService.getCard(req.params.id);

    if (!card) {
        return res.status(404).json({ message: "Card not found" });
    }

    res.json(card);
};

// POST /cards
export const createCard = (req, res) => {
    const { suit, value, collection } = req.body;

    if (!suit || !value || !collection) {
        return res.status(400).json({
            message: "suit, value, and collection are required"
        });
    }

    const newCard = CardService.createCard(req.body);

    res.status(201).json(newCard);
};

// PUT /cards/:id
export const updateCard = (req, res) => {
    const updatedCard = CardService.updateCard(
        req.params.id,
        req.body
    );

    if (!updatedCard) {
        return res.status(404).json({ message: "Card not found" });
    }

    res.json(updatedCard);
};

// DELETE /cards/:id
export const deleteCard = (req, res) => {
    const deleted = CardService.deleteCard(req.params.id);

    if (!deleted) {
        return res.status(404).json({ message: "Card not found" });
    }

    res.json({ message: "Card deleted successfully" });
};