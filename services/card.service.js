import * as CardModel from "../models/card.model.js";

// Get all cards with pagination
export const getCards = (page = 1, limit = 10) => {
    const allCards = CardModel.getAllCards();

    const start = (page - 1) * limit;
    const end = start + limit;

    const paginatedCards = allCards.slice(start, end);

    return {
        totalCards: allCards.length,
        totalPages: Math.ceil(allCards.length / limit),
        currentPage: page,
        limit,
        cards: paginatedCards,
        next: {
            page: page + 1,
            limit
        },
        previous: {
            page: page > 1 ? page - 1 : null,
            limit
        }
    };
};

// Get one card
export const getCard = (id) => {
    return CardModel.getCardById(id);
};

// Create card
export const createCard = (data) => {
    const newCard = {
        id: Date.now(),
        ...data
    };

    return CardModel.addCard(newCard);
};

// Update card
export const updateCard = (id, data) => {
    return CardModel.updateCard(id, data);
};

// Delete card
export const deleteCard = (id) => {
    return CardModel.deleteCard(id);
};