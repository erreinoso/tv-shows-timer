// Reset functions

// Reset all watched elements
const resetAll = () => {
  localStorage.removeItem('watchedSeries');
  favouriteSeries = [];
  updateLocalStorage();
  renderFavouriteSection(ev);
  const searchedElem = document.querySelectorAll('.js-serieCard');
  for (const shearched of searchedElem) {
    shearched.classList.remove('favelement');
  }
};

// Reset one watched elements
const resetOneFav = (ev) => {
  const buttonClickedId = parseInt(
    ev.currentTarget.parentElement.parentElement.id
  );
  const seriefavIndex = favouriteSeries.findIndex(
    (fav) => fav.id === buttonClickedId
  );
  const parentOfSelectedId = ev.currentTarget.parentNode.parentNode.id;
  favouriteSeries.splice(seriefavIndex, 1);
  updateLocalStorage();
  renderFavouriteSection(ev);
  const resultList = resultsWrapper.querySelectorAll('li');

  for (const li of resultList) {
    if (li.id === parentOfSelectedId) {
      li.classList.remove('favelement');
    }
  }
  renderFavouriteSection(ev);
  renderFavouriteTime(ev);
};
