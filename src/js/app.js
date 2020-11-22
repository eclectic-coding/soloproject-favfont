import FONTDATA from '../data/fontData';
import { resetFontSize, resetCustomText, resetCardGrid } from './reset';
import { changeSampleText, fontCardSearch } from './searchBar';
import { colorSettings } from './settings';


const changeText = document.getElementById('input-text');
const changeColor = document.getElementById('dark-mode-toggle');
const fontSearch = document.getElementById('font-search');
const fontSize = document.getElementById('font-size');
const gridList = document.getElementById('grid-list');
const originalSampleText = 'Almost before we knew it, we had left the ground.';
const resetIcon = document.getElementById('reset-ui');

let fontCard = document.getElementById('card-array');

// Load font card - UI
const getFont = () => {
  FONTDATA.map(font => (
    fontCard.innerHTML += `
        <div class="card">
          <div class="card__title">
            <h2>${font.name}</h2>
            <span><i class="far fa-plus-square card__icon"></i></span>
          </div>
          <p class="card__subtitle">${font.designer}</p>
          <p id="body-text"
            class="card__bodytext" 
            style="font-family: '${font.name}', ${font.fallback}"
            >
            ${originalSampleText}
          </p>
        </div>
      `
  ));
};
getFont();

/* Event listeners --------------- */
const textField = Array.prototype.slice.call(document.querySelectorAll('#body-text'));
const fontCards = Array.prototype.slice.call(document.querySelectorAll('.card'));

// Search for and filter font cards
fontSearch.addEventListener('input', () => fontCardSearch(fontSearch, fontCards))

// Change font card sample text
changeText.addEventListener('input', (event) => changeSampleText(event))

// Change font size -- defaults to 20px
fontSize.addEventListener('input', (event) => {
  const textField = Array.prototype.slice.call(document.querySelectorAll('#body-text'));
  let currentFontSize = event.target.value;

  textField.forEach(text => {
    text.style.fontSize = currentFontSize;
  });
});

// Change color
changeColor.addEventListener('click', () => {
    colorSettings("white")
})

// Change grid to list display
gridList.addEventListener('click', (event) => {
  fontCard.classList.toggle('card__list')
})

// Reset UI
resetIcon.addEventListener('click', () => {

  resetFontSize(textField)
  resetCustomText(textField, originalSampleText, changeText)
  resetCardGrid(fontCards)
});
