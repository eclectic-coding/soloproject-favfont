export const resetFontSize = (field) => {
  // Reset font size
  field.forEach(text => {
    text.style.fontSize = '20px';
  });
}

export const resetCustomText = (field, sample, change) => {
  // Reset custom text
  // const textField = Array.prototype.slice.call(document.querySelectorAll('#body-text'));
  // console.log(textField);

  field.forEach(text => {
    text.textContent = sample;
  });
  change.value = ''
}



