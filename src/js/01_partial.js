// Paint what user has searched
function renderSearch() {
  let seriesCard;
  resultsWrapper.innerHTML = '';
  let i;
  let imageCard;
  const liResult = resultsWrapper.querySelectorAll('li');
  let episodes = seriesResult.episodes.length;
  if (seriesResult.id === 1934) {
    //es la id que viene por defecto
    resultSectionP.classList.remove('hidden');
  } else {
    resultSectionP.classList.add('hidden');
  }

  if (seriesResult.image_path === undefined) {
    imageCard = imgTemporary;
  } else {
    imageCard = seriesResult.image_path;
  }

  if (seriesResult.id !== 1934 && seriesResult.id !== undefined) {
    //es la id que viene por defecto
    seriesCard = `<li class="js-serieCard serieCard" id="${seriesResult.id}">`;
    seriesCard += `<div class="serieCard_img"><img src="${imageCard}" alt="Foto de ${seriesResult.image_path}"></div>`;
    seriesCard += `<div class="serieCard_data "><h3>${seriesResult.name}</h3>`;
    seriesCard += `<h4>Episodes: ${episodes}</h4></div>`;
    seriesCard += `</li>`;
    resultsWrapper.innerHTML += seriesCard;
  }
}
