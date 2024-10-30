import quotes from './quotes.js';
const quoteAuthorElement = document.getElementById('author');
const quoteElement = document.getElementById('quote');
const generateBtn = document.getElementById('generate-btn');
const favoriteBtn = document.getElementById('favorite-btn');
const favoritesContainer = document.getElementById('favorites-container');

let currentQuoteIndex;

function generateRandomQuote() {
  currentQuoteIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[currentQuoteIndex];
  // const quote = randomQuote.quote;
  // const quoteAuthor = randomQuote.author;
  // const { quote, author} = randomQuote;
  quoteElement.textContent = randomQuote.quote;
  quoteAuthorElement.textContent = randomQuote.author;
  favoriteBtn.innerHTML = randomQuote.isFavorite ? '&#9733;' : '&#9734;';
  favoriteBtn.style.display = 'inline-block';
}

function toggleFavorite() {
  const currentQuote = quotes[currentQuoteIndex];
  currentQuote.isFavorite = !currentQuote.isFavorite;
  favoriteBtn.innerHTML = currentQuote.isFavorite ? '&#9733;' : '&#9734;';

  if (currentQuote.isFavorite) {
    const favoriteCard = document.createElement('div');
    favoriteCard.classList.add('favorite-card');
    favoriteCard.innerHTML = `<p>${currentQuote.quote}<p>
  <p class="author"> ${currentQuote.author}</p>
  <button class="remove-star">&#9733;</button>`;

    favoriteCard.querySelector('.remove-star').addEventListener('click', () => {
      currentQuote.isFavorite = false;
      favoriteBtn.innerHTML = '&#9734;'; // Возвращаем кнопку в состояние "не избранное"
      favoriteCard.remove(); // Удаляем карточку из избранного
    });

    favoritesContainer.appendChild(favoriteCard);
  } else {
    const favoriteCard = document.querySelectorAll('.favorite-card');
    favoriteCard.forEach((card) => {
      if (card.textContent.includes(currentQuote.quote)) {
        card.remove();
      }
    });

    console.log(quotes);
  }
}

generateBtn.addEventListener('click', generateRandomQuote);
favoriteBtn.addEventListener('click', toggleFavorite);
// generateRandomQuote();
