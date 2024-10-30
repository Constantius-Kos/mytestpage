import quotes from './quotes.js';
const quoteAuthorElement = document.getElementById('author');
const quoteElement = document.getElementById('quote');
const generateBtn = document.getElementById('generate-btn');

function generateRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  // const quote = randomQuote.quote;
  // const quoteAuthor = randomQuote.author;
  // const { quote, author} = randomQuote;
  quoteElement.textContent = randomQuote.quote;
  quoteAuthorElement.textContent = randomQuote.author;
}

generateBtn.addEventListener('click', generateRandomQuote);
