import quotes from './quotes.js';
const quoteAuthorElement = document.getElementById('author');
const quoteElement = document.getElementById('quote');
const generateBtn = document.getElementById('generate-btn');
const favoriteBtn = document.getElementById('favorite-btn');
const favoritesContainer = document.getElementById('favorites-container');
let favoriteCard;
let currentQuoteIndex;

const toggleFavoriteIcon = (isFavorite) => {
  favoriteBtn.classList.toggle('fa', isFavorite);
  favoriteBtn.classList.toggle('far', !isFavorite);
};

function generateRandomQuote() {
  currentQuoteIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[currentQuoteIndex];
  // const quote = randomQuote.quote;
  // const quoteAuthor = randomQuote.author;
  // const { quote, author} = randomQuote;
  quoteElement.textContent = randomQuote.quote;
  quoteAuthorElement.textContent = randomQuote.author;
  toggleFavoriteIcon(randomQuote.isFavorite);
  // favoriteBtn.innerHTML = randomQuote.isFavorite ? '&#9733;' : '&#9734;';
  favoriteBtn.style.display = 'inline-block';
}

function showFavoriteCard(currentQuote) {
  const favoriteCard = document.createElement('div');
  favoriteCard.classList.add('favorite-card');
  favoriteCard.innerHTML = `<p>${currentQuote.quote}</p>
<p class="author"> ${currentQuote.author}</p>
<button class="remove-star">&#9733;</button>`;

  favoriteCard.querySelector('.remove-star').addEventListener('click', () => {
    currentQuote.isFavorite = false;
    if (quotes[currentQuoteIndex] === currentQuote) {
      favoriteBtn.classList.toggle('far');
    }

    favoriteCard.remove();
    console.log(quotes); // Удаляем карточку из избранного
  });

  favoritesContainer.appendChild(favoriteCard);
}

function hideFavoriteCard(quote) {
  const favoriteCard = document.querySelectorAll('.favorite-card');
  favoriteCard.forEach((card) => {
    if (card.textContent.includes(quote.quote)) {
      card.remove();
    }
  });
}

function toggleFavorite() {
  const currentQuote = quotes[currentQuoteIndex];
  currentQuote.isFavorite = !currentQuote.isFavorite;
  toggleFavoriteIcon(currentQuote.isFavorite);

  if (currentQuote.isFavorite) {
    showFavoriteCard(currentQuote);
  } else {
    hideFavoriteCard(currentQuote);
  }
}

generateBtn.addEventListener('click', generateRandomQuote);
favoriteBtn.addEventListener('click', toggleFavorite);
generateRandomQuote();
