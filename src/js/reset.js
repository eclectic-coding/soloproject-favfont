/*
 * Reset function to reset UI to default state
 *
 * resetFontSize - set font card grid to default 20px font size
 * resetCustomText - reset sample text to default
 * resetCardGrid - reset to font search and card grid to default
 */
export const resetFontSize = (field) => {
  // Reset font size
  field.forEach(text => {
    text.style.fontSize = '20px';
  });
};

export const resetCustomText = (field, sample, change) => {
  // Reset custom text
  field.forEach(text => {
    text.textContent = sample;
  });
  change.value = '';
};

export const resetCardGrid = () => {
  // Reset card default text
  document.getElementById('font-search').value = '';

  // Reset cards to from list to grid
  document.getElementById('card-array').classList.remove('card__list');

};

export const resetColorMode = () => {
  const darkClass = document.querySelector('html').classList.contains('dark-mode')
  if (darkClass) {
    document.querySelector('html').classList.remove('dark-mode')
  }

}

