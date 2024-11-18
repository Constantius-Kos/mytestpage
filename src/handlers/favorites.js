import { quoteFavoriteBtn, removeFavoriteQuote } from '../../index.js';

function toggleFavoriteCard(quote, container) {
  quote.isFavorite
    ? showFavoriteCard(quote, container)
    : removeFavoriteCard(quote.id);
}

function showFavoriteBtn(isFavorite) {
  if (quoteFavoriteBtn.style.display === 'none')
    quoteFavoriteBtn.style.display = 'inline-block';

  quoteFavoriteBtn.classList.toggle('fa', isFavorite);
  quoteFavoriteBtn.classList.toggle('far', !isFavorite);
}

function hideFavoriteBtn() {
  quoteFavoriteBtn.style.display = 'none';
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
  removeButton.addEventListener('click', () => removeFavoriteQuote(id));
}

function removeFavoriteCard(id) {
  const card = document.querySelector(
    `.favorite-card[data-favorite-quote-id="${id}"]`
  );
  if (card) {
    card.remove();
  }
}

export {
  toggleFavoriteCard,
  hideFavoriteBtn,
  showFavoriteCard,
  showFavoriteBtn,
  removeFavoriteCard,
};
