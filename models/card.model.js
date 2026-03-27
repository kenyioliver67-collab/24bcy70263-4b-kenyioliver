let cards = [];

// Get all cards
export const getAllCards = () => cards;

// Get one card
export const getCardById = (id) => {
    return cards.find((card) => card.id == id);
};

// Add card
export const addCard = (card) => {
    cards.push(card);
    return card;
};

// Update card
export const updateCard = (id, updatedData) => {
    const index = cards.findIndex((c) => c.id == id);

    if (index === -1) return null;

    cards[index] = {...cards[index], ...updatedData };
    return cards[index];
};

// Delete card
export const deleteCard = (id) => {
    const index = cards.findIndex((c) => c.id == id);

    if (index === -1) return false;

    cards.splice(index, 1);
    return true;
};