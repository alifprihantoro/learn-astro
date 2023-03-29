let isLight = () => localStorage.getItem('dark-mode') === 'light'

const DARK_BTN = document.getElementById('dark-btn')
if (isLight()) {
  document.childNodes[1].setAttribute('data-theme', 'light')
  DARK_BTN.checked = false
}
DARK_BTN.onchange = function() {
  if (isLight()) {
    localStorage.setItem('dark-mode', 'dark')
    document.childNodes[1].setAttribute('data-theme', 'dark')
    return
  }
  localStorage.setItem('dark-mode', 'light')
  document.childNodes[1].setAttribute('data-theme', 'light')
}
