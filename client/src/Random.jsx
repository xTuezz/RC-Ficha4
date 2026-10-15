function pickRandom(cards) {
    if (cards.length === 0) return null;

    const randomIndex = Math.floor(Math.random() * cards.length);
    return cards[randomIndex];
}

export default pickRandom;