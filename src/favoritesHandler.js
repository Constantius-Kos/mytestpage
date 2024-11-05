const toggleFavoriteIcon = (isFavorite, el) => {
  el.classList.toggle('fa', isFavorite);
  el.classList.toggle('far', !isFavorite);
};

function showFavoriteCard(currentQuote, container) {
  const favoriteCard = document.createElement('div');
  favoriteCard.classList.add('favorite-card');
  favoriteCard.innerHTML = `<p>${currentQuote.quote}</p>
<p class="author"> ${currentQuote.author}</p>
<button class="remove-star">&#9733;</button>`;

  container.appendChild(favoriteCard);
}

function hideFavoriteCard(quote) {
  const favoriteCard = document.querySelectorAll('.favorite-card');
  const processFavoriteCard = (card) => {
    if (card.textContent.includes(quote.quote)) {
      card.remove();
    }
  };
  favoriteCard.forEach(processFavoriteCard);
}
export { toggleFavoriteIcon, showFavoriteCard, hideFavoriteCard };
