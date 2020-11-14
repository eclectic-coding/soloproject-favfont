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

export const resetCardGrid = (fontCards) => {
  // Reset font name search grid
  document.getElementById('font-search').value = '';
  for (let i = 0; i < fontCards.length; i++) {
    fontCards[i].style.display = '';
  }

};

