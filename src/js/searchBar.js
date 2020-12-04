export const fontCardSearch = (fontSearch, fontCards) => {

  let filter = fontSearch.value.trim().toLowerCase();
  const textTitle = Array.prototype.slice.call(document.querySelectorAll('h2'));

  for (let i = 0; i < fontCards.length; i++) {
    let txtValue = textTitle[i].textContent || textTitle[i].innerText;
    if (txtValue.toLowerCase().indexOf(filter) > -1) {
      fontCards[i].style.display = '';
    } else {
      fontCards[i].style.display = 'none';
    }
  }
};

export const changeSampleText = (event, {originalSampleText}) => {

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
};
