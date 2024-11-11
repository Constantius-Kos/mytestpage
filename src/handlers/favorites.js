import { quoteFavoriteBtn } from '../../index.js';

function toggleFavorite(quote, btn, container) {
  quote.isFavorite = !quote.isFavorite;

  toggleFavoriteBtnIcon(quote.isFavorite, btn);

  if (quote.isFavorite) {
    showFavoriteCard(quote, container);
  } else {
    removeFavoriteCard(quote.id);
  }
}

function handleFavorite(isFavorite) {
  showFavoriteBtn();
  toggleFavoriteBtnIcon(isFavorite);
}

const toggleFavoriteBtnIcon = (isFavorite) => {
  quoteFavoriteBtn.classList.toggle('fa', isFavorite);
  quoteFavoriteBtn.classList.toggle('far', !isFavorite);
};

function showFavoriteBtn() {
  quoteFavoriteBtn.style.display = 'inline-block';
}

function hideFavoriteBtn() {
  quoteFavoriteBtn.style.display = 'none';
}

function removeFavoriteQuote(quote) {
  quote.isFavorite = false;
  removeFavoriteCard(quote.id);

  const currentQuote = document.querySelector('[data-current-quote-id]');
  const currentQuoteId = currentQuote.dataset.currentQuoteId;

  if (quote.id === currentQuoteId) {
    toggleFavoriteBtnIcon(quote.isFavorite);
  }
}

function showFavoriteCard(quote, container) {
  const { id, text, author } = quote;
  const favoriteCard = document.createElement('div');
  favoriteCard.classList.add('favorite-card');
  favoriteCard.dataset.favoriteQuoteId = id;
  favoriteCard.innerHTML = `<p class="favorite-card-text">${text}</p>
<p class="favorite-card-author"> ${author}</p>
<button class="remove-star">&#9733</button>`;
  container.appendChild(favoriteCard);

  const removeButton = favoriteCard.querySelector('.remove-star');
  removeButton.addEventListener('click', () => removeFavoriteQuote(quote));
}

function removeFavoriteCard(id) {
  const card = document.querySelector(
    `.favorite-card[data-favorite-quote-id="${id}"]`
  );
  if (card) {
    card.remove();
  }
}

export { handleFavorite, toggleFavorite, hideFavoriteBtn };
