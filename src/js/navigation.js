const close = document.getElementById('close')
const navBox = document.querySelector('.navigation__container')

export const openNav = () => {
  console.log('Open Nav Bar');
  navBox.classList.toggle('nav-active')
  close.style.display = 'block'
}

export const closeNav = () => {
  console.log('Close Nav Bar');
  navBox.classList.toggle('nav-active')
  close.style.display = 'none'
}
