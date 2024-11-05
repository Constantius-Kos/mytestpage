import quotes from './src/quotes.js';
import {
  toggleFavoriteIcon,
  showFavoriteCard,
  hideFavoriteCard,
} from './src/favoritesHandler.js';
const quoteAuthorElement = document.getElementById('author');
const quoteElement = document.getElementById('quote');
const generateBtn = document.getElementById('generate-btn');
const favoriteBtn = document.getElementById('favorite-btn');
const favoritesContainer = document.getElementById('favorites-container');

let currentQuoteIndex;

function generateRandomQuote() {
  currentQuoteIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[currentQuoteIndex];

  quoteElement.textContent = randomQuote.quote;
  quoteAuthorElement.textContent = randomQuote.author;
  toggleFavoriteIcon(randomQuote.isFavorite, favoriteBtn);

  favoriteBtn.style.display = 'inline-block';
}

function toggleFavorite() {
  const currentQuote = quotes[currentQuoteIndex];
  currentQuote.isFavorite = !currentQuote.isFavorite;
  toggleFavoriteIcon(currentQuote.isFavorite, favoriteBtn);

  if (currentQuote.isFavorite) {
    showFavoriteCard(currentQuote, favoritesContainer);
  } else {
    hideFavoriteCard(currentQuote);
  }
}

generateBtn.addEventListener('click', generateRandomQuote);
favoriteBtn.addEventListener('click', toggleFavorite);
generateRandomQuote();

// const toggleFavoriteIcon = (isFavorite) => {                           //Экспортированные функции
//   favoriteBtn.classList.toggle('fa', isFavorite);
//   favoriteBtn.classList.toggle('far', !isFavorite);
// };

// function showFavoriteCard(currentQuote) {                              //экспортированные функции
//   const favoriteCard = document.createElement('div');
//   favoriteCard.classList.add('favorite-card');
//   favoriteCard.innerHTML = `<p>${currentQuote.quote}</p>
// <p class="author"> ${currentQuote.author}</p>
// <button class="remove-star">&#9733;</button>`;

//   favoritesContainer.appendChild(favoriteCard);
// }

// function hideFavoriteCard(quote) {                                    //экспортированные функции
//   const favoriteCard = document.querySelectorAll('.favorite-card');
//   const processFavoriteCard = (card) => {
//     if (card.textContent.includes(quote.quote)) {
//       card.remove();
//     }
//   };
//   favoriteCard.forEach(processFavoriteCard);
// }
