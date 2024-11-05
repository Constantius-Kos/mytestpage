favoriteCard.querySelector('.remove-star').addEventListener('click', () => {
  currentQuote.isFavorite = false;
  if (quotes[currentQuoteIndex] === currentQuote) {
    favoriteBtn.classList.toggle('far');
  }

  favoriteCard.remove();
  console.log(quotes); // Удаляем карточку из избранного
});
