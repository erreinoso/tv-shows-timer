//Local Storage
// Save in Local Storage
function updateLocalStorage() {
  localStorage.setItem('favouriteSeries', JSON.stringify(favouriteSeries));
}

// Bring data from Local Storage
const getFromLocalStorage = () => {
  const data = JSON.parse(localStorage.getItem('favouriteSeries'));
  if (data !== null) {
    favouriteSeries = data;
  }
  renderFavouriteSection();
};
