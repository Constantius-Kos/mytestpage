import { handleQuote } from './src/handlers/quote.js';

const generateBtn = document.getElementById('generate-btn');
generateBtn.addEventListener('click', handleQuote);

// const toggleFavoriteIcon = (isFavorite) => {                           //Экспортированные функции
//   toggleBtn.classList.toggle('fa', isFavorite);
//   toggleBtn.classList.toggle('far', !isFavorite);
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
