const CEK_LOCAL_THEME = localStorage.getItem('dark-mode') || 'system-theme'

document.getElementById(CEK_LOCAL_THEME).checked = true // checked btn by localStorage

const CEK_SYSTEM_THEME = window.matchMedia("(prefers-color-scheme: dark)").matches ? 'dark-theme' : 'light-theme'
if (CEK_LOCAL_THEME === 'system-theme') {
  document.childNodes[1].setAttribute('data-theme', CEK_SYSTEM_THEME)
}

// check is change theme
const DARK_BTN = document.getElementById('theme-mode')
DARK_BTN.onchange = function(e) {
  const RESULT_CHANGE = e.target.id
  localStorage.setItem('dark-mode', RESULT_CHANGE)
  document.childNodes[1].setAttribute('data-theme', RESULT_CHANGE)
}
