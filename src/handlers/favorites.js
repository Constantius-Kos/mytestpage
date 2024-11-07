import { currentQuote } from '../../index.js';

const favoritesContainer = document.getElementById('favorites-container');
const toggleBtn = document.getElementById('favorite-btn');
toggleBtn.addEventListener('click', toggleFavorite);

hideBtn(toggleBtn);

function toggleFavorite() {
  currentQuote.isFavorite = !currentQuote.isFavorite;
  toggleFavoriteIcon(currentQuote.isFavorite, toggleBtn);

  if (currentQuote.isFavorite) {
    showFavoriteCard(currentQuote, favoritesContainer);
  } else {
    hideFavoriteCard(currentQuote);
  }
}

function handleFavorite(isFavorite) {
  showBtn(toggleBtn);
  toggleFavoriteIcon(isFavorite, toggleBtn);
}

const toggleFavoriteIcon = (isFavorite, el) => {
  el.classList.toggle('fa', isFavorite);
  el.classList.toggle('far', !isFavorite);
};

function showBtn(btn) {
  btn.style.display = 'inline-block';
}

function hideBtn(btn) {
  btn.style.display = 'none';
}

function showFavoriteCard(currentQuote, container) {
  const favoriteCard = document.createElement('div');
  favoriteCard.classList.add('favorite-card');
  favoriteCard.innerHTML = `<p>${currentQuote.text}</p>
<p class="author"> ${currentQuote.author}</p>
<button class="remove-star">&#9733;</button>`;

  container.appendChild(favoriteCard);
}

function hideFavoriteCard(quote) {
  const favoriteCard = document.querySelectorAll('.favorite-card');
  const processFavoriteCard = (card) => {
    if (card.textContent.includes(quote.text)) {
      card.remove();
    }
  };
  favoriteCard.forEach(processFavoriteCard);
}
export { handleFavorite };
