'use strict';

const input = document.querySelector('.js-input');
const btn = document.querySelector('.js-button');
const resultSectionP = document.querySelector('.js-resultSection-p');
const favSectionDays = document.querySelector('.js-favSection-p .days');
const favSectionHours = document.querySelector('.js-favSection-p .ours');
const favSection = document.querySelector('.js-ul-fav');
const btnReset = document.querySelector('.js-reset-all');
const favouriteSection = document.querySelector('.js-favouriteSection');
const resetElem = document.querySelectorAll('.js-delete');
const imgTemporary = 'https://via.placeholder.com/210x295/ffffff/666666/';
const resultsWrapper = document.querySelector('.js-ul-result');

let seriesResult = [];
let favouriteSeries = [];
let searchinput;

//Bring data from API
function getSeriesId() {
  searchinput = input.value.replaceAll(' ', '-');
  fetch(`http://www.episodate.com/api/show-details?q=${searchinput}`)
    .then((response) => response.json())
    .then((data) => {
      seriesResult = data.tvShow;
      renderSearch();
      addListeners();
      // addListenersGenre();
      // console.log('seriesResult en fetch', seriesResult); //Este funciona
    });
}
