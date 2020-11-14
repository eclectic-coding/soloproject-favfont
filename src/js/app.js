import FONTDATA from '../data/fontData';
import { resetFontSize, resetCustomText, resetCardGrid } from './reset';

const changeText = document.getElementById('input-text');
const originalSampleText = 'Almost before we knew it, we had left the ground.';
const fontSearch = document.getElementById('font-search');
const fontSize = document.getElementById('font-size');
const resetIcon = document.getElementById('reset-ui');
const gridList = document.getElementById('grid-list');

let fontCard = document.getElementById('card-array');

// Load fonts
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

// Font search filter
fontSearch.addEventListener('input', () => {
  let filter = fontSearch.value.trim().toLowerCase()
  const textTitle = Array.prototype.slice.call(document.querySelectorAll('h2'));

  for (let i = 0; i < fontCards.length; i++) {
    let txtValue = textTitle[i].textContent || textTitle[i].innerText
    if (txtValue.toLowerCase().indexOf(filter) > -1) {
      fontCards[i].style.display = '';
    } else {
      fontCards[i].style.display = 'none'
    }
  }
})


// Change sample text
changeText.addEventListener('input', (event) => {
  let formValue = event.target.value.trim();
  const textField = Array.prototype.slice.call(document.querySelectorAll('#body-text'));

  event.preventDefault();

  if (formValue !== '') {
    textField.forEach((text) => {
      text.textContent = formValue;
    });
  } else {
    textField.forEach((text) => {
      text.textContent = originalSampleText;
    });
  }

});

// Change font size -- defaults to 20px
fontSize.addEventListener('input', (event) => {
  const textField = Array.prototype.slice.call(document.querySelectorAll('#body-text'));
  let currentFontSize = event.target.value;

  textField.forEach(text => {
    text.style.fontSize = currentFontSize;
  });
});

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


