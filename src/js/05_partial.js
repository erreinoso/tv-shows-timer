/* eslint-disable strict */

// Listener functions
// Searched elements' listeners
function addListeners() {
  let liElem = document.querySelectorAll('.js-serieCard');
  for (const li of liElem) {
    li.addEventListener('click', favouritesHandler);
  }
}

//Search button's listener
btn.addEventListener('click', getSeriesId);

//Reset all button's listener
btnReset.addEventListener('click', resetAll);

//Reset one button's listener
const listenResetBtn = () => {
  const resetButtons = document.querySelectorAll('.js-delete');
  for (let resetButton of resetButtons) {
    resetButton.addEventListener('click', resetOneFav);
  }
};

// Start app
getSeriesId();
getFromLocalStorage();
renderFavouriteTime();
