import FONTDATA from '../data/fontData';

const originalSampleText = 'Almost before we knew it, we had left the ground.';
const fontSearch = document.getElementById('font-search');
const changeText = document.getElementById('input-text');
const fontSize = document.getElementById('font-size');
const resetIcon = document.getElementById('reset-ui');

// Variables
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

// Font search filter
fontSearch.addEventListener('input', () => {
  let filter = fontSearch.value.trim().toLowerCase()
  const fontCards = Array.prototype.slice.call(document.querySelectorAll('.card'));
  const textTitle = Array.prototype.slice.call(document.querySelectorAll('h2'));

  for (let i = 0; i < fontCards.length; i++) {
    let a = textTitle[i]
    let txtValue = a.textContent || a.innerText
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

// Reset UI
resetIcon.addEventListener('click', () => {
  // Reset font size
  const textField = Array.prototype.slice.call(document.querySelectorAll('#body-text'));

  textField.forEach(text => {
    text.style.fontSize = '20px';
  });

  // Reset custom text
  textField.forEach(text => {
    text.textContent = originalSampleText;
  });

});


