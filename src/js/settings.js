export const colorSettings = (setColor) => {
  if (setColor === 'white') {
    document.documentElement.style.setProperty('--mode-color-background', 'black')
    document.documentElement.style.setProperty('--mode-color-foreground', 'white')
    document.getElementById('dark-mode-toggle').classList.remove('fa-fa-adjust')
  } else {
    document.documentElement.style.setProperty('--mode-color-background', 'white')
    document.documentElement.style.setProperty('--mode-color-foreground', '')
  }
}
