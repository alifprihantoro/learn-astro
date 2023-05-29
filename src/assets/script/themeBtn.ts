const CEK_LOCAL_THEME = localStorage.getItem('theme-mode') || 'system-theme'

document.getElementById(CEK_LOCAL_THEME).checked = true // checked btn by localStorage
const systemActive = (RESULT_CHANGE: string) => {
  const CEK_SYSTEM_THEME = window.matchMedia('(prefers-color-scheme: dark)')
    .matches
    ? 'dark-theme'
    : 'light-theme'
  localStorage.setItem('theme-mode', RESULT_CHANGE)
  // if user select system option
  if (RESULT_CHANGE === 'system-theme') {
    return document.childNodes[1].setAttribute('data-theme', CEK_SYSTEM_THEME)
  }
  document.childNodes[1].setAttribute('data-theme', RESULT_CHANGE)
}
systemActive(CEK_LOCAL_THEME)

// check is change theme
const DARK_BTN = document.getElementById('theme-mode')
DARK_BTN.onchange = function (e) {
  const RESULT_CHANGE = e.target.id
  systemActive(RESULT_CHANGE)
}
