import './themeBtn'
import './cookiesBtn'
import commentToggle from './comment'
import getLink from './utils/getLink'
commentToggle()
// const GET_FIRST_LINK = window.location.href.split('/').slice(3).join('/')
// console.log(GET_FIRST_LINK)
// window.history.replaceState({}, 'muryp', `/${GET_FIRST_LINK}`)
await getLink()
// document.addEventListener('DOMContentLoaded', () => {
//   console.log('loaded')
//   getLink({ TAG_NAME: '#root a' })
// })
