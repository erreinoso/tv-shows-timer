'use strict';
//Function handle with all different utilities

function favouritesHandler(ev) {
  const clickedCard = ev.currentTarget;
  addToFavouritesArray(ev);
  renderFavouriteSection(ev);
  renderFavouriteTime(ev);
}

//Add elements to favourite array
function addToFavouritesArray(ev) {
  const clickedCard = ev.currentTarget;
  const clickedCardName = clickedCard.querySelector('h3').innerHTML;
  console.log('clickedCardName', clickedCardName);
  console.log('seriesResult', seriesResult);
  console.log('favouriteSeries', favouriteSeries);
  const favElemIndex = favouriteSeries.findIndex(
    (elem) => elem.name === clickedCardName
  );

  if (favElemIndex === -1) {
    const favElemnt = seriesResult;
    clickedCard.classList.add('favelement');

    favouriteSeries.push(favElemnt);
  } else {
    clickedCard.classList.remove('favelement');
    favouriteSeries.splice(favElemIndex, 1);
  }
  updateLocalStorage();
}

// //console name
// function consoleName(ev) {
//   const clickedCard = ev.currentTarget;
//   const clickedCardName = clickedCard.querySelector('h3').innerHTML;
// }

//Paint user's favourite
function renderFavouriteSection() {
  let seriesFav = '';
  favSection.innerHTML = '';
  let i;
  let favCard;

  if (favouriteSeries.length === 0) {
    btnReset.classList.add('hidden');
    favouriteSection.classList.add('hidden');
  } else {
    btnReset.classList.remove('hidden');
    favouriteSection.classList.remove('hidden');
    for (i = 0; i < favouriteSeries.length; i++) {
      let hoursSpent =
        (favouriteSeries[i].runtime * favouriteSeries[i].episodes.length) / 60;
      let daysSpent = Math.ceil(hoursSpent / 24);
      if (favouriteSeries[i].image_path === null) {
        favCard = imgTemporary;
      } else {
        favCard = favouriteSeries[i].image_path;
      }
      seriesFav += `<li class="js-serieFavCard serieFavCard" id="${favouriteSeries[i].id}">`;
      seriesFav += `<div class="serieFavCard_img"><img src="${favCard}" alt="Foto de ${favouriteSeries[i].name}"></div>`;
      seriesFav += `<div class="serieFavCard_data"><h3 >${favouriteSeries[i].name}</h3>`;
      seriesFav += `<h4 class="hidden"> Duración del episodio: ${favouriteSeries[i].runtime} minutos</h4>`;
      seriesFav += `<h4 class="hidden" > Número de episodios: ${favouriteSeries[i].episodes.length}</h4>`;
      seriesFav += `<h4> Spent time: ${hoursSpent} hours or almost ${daysSpent} days  </h4>`;
      // seriesFav += `<button type="button" class="js-delete resetButton"> ❌ </button></div></li>`;
      seriesFav += `<i  class=" icon icon-trash far fa-trash-alt js-delete resetButton" ></i><div>`;
      favSection.innerHTML = seriesFav;
    }
    listenResetBtn();
  }
}

function renderFavouriteTime() {
  const favSectionDays = document.querySelector('.js-favSection-p .days');
  const favSectionHours = document.querySelector('.js-favSection-p .hours');
  const favSectionDaysNote = document.querySelector(
    '.js-favSection-notes .days-text'
  );

  favSectionDays.innerHTML = '00';
  favSectionHours.innerHTML = '00';

  let hoursToShow;
  let hoursSpent;
  let hoursCalculate = 0;
  let daysCalculate = 0;
  let daysSpent;

  let daysToShow;
  let day;

  if (favouriteSeries.length !== 0) {
    for (let i = 0; i < favouriteSeries.length; i++) {
      hoursSpent =
        (favouriteSeries[i].runtime * favouriteSeries[i].episodes.length) / 60;

      daysSpent =
        (favouriteSeries[i].runtime * favouriteSeries[i].episodes.length) /
        1440;

      hoursCalculate += hoursSpent;
      daysCalculate += daysSpent;

      daysToShow = parseInt(daysCalculate);
      hoursToShow = parseInt(hoursCalculate - 24 * daysToShow);

      if (daysToShow <= 1) {
        day = 'day';
      } else {
        day = 'days';
      }

      favSectionDays.innerHTML = daysToShow;
      favSectionHours.innerHTML = hoursToShow;
      favSectionDaysNote.innerHTML = day;
    }
  }
}
