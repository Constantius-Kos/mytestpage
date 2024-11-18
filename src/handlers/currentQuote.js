function displayCurrentQuote(quote) {
  const { id, text, author, isFavorite } = quote;
  const quoteAuthorElement = document.getElementById('author');
  const quoteElement = document.getElementById('quote');
  const quoteTextElement = document.getElementById('quote-text');
  quoteElement.dataset.currentQuoteId = id;
  quoteTextElement.textContent = `"${text}"`;
  quoteAuthorElement.textContent = author;
}

export { displayCurrentQuote };
