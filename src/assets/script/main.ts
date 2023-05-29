import './themeBtn'
import './cookiesBtn'
import './utils/getLink'
// accessibility
const nav = document.getElementsByTagName('label')
for (let i = 0; i < nav.length; i++) {
  nav[i].onkeydown = ({ code, target }) => {
    if (code == 'Enter') {
      const getTargetName = target.getAttribute('for')
      if (getTargetName === null) {
        target.getElementsByTagName('input')[0].click()
      } else {
        document.getElementById(getTargetName).click()
      }
    }
  }
}
