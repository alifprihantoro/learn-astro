import './themeBtn'
import './cookiesBtn'
import getLink from './utils/getLink'
import routersPage from './routers'
import regexRulesRoutes from './routers/regex'
// const GET_FIRST_LINK = window.location.href.split('/').slice(3).join('/')
// console.log(GET_FIRST_LINK)
// window.history.replaceState({}, 'muryp', `/${GET_FIRST_LINK}`)
await getLink('all')
// document.addEventListener('DOMContentLoaded', () => {
//   console.log('loaded')
//   getLink({ TAG_NAME: '#root a' })
// })
//
export const MAIN = {
  PREV_LINK_GLOBAL: '',
  isUndo: false,
}
window.addEventListener('popstate', async function() {
  const CURRENT_LINK = window.location.href.split('/').slice(3).join('/')
  const { isGoHome } = regexRulesRoutes({ NEXT_LINK: CURRENT_LINK, PREV_LINK: MAIN.PREV_LINK_GLOBAL })
  if (MAIN.isUndo && isGoHome && CURRENT_LINK.split('#').length !== 2 || CURRENT_LINK.match(/^\/#/i) || CURRENT_LINK.length !== 0) {
    console.log('undo must true')
    console.log(MAIN)
    MAIN.isUndo = false
    console.log('undo must false')
    console.log(MAIN)
    const PREV_LINK = MAIN.PREV_LINK_GLOBAL
    const NEXT_LINK = CURRENT_LINK
    const CONTENT_HTML = await routersPage({ NEXT_LINK, PREV_LINK, isUndo: true })
    const ROOT_EL = document.getElementById('root')
    MAIN.PREV_LINK_GLOBAL = NEXT_LINK
    if (CONTENT_HTML !== undefined) {
      ROOT_EL.innerHTML = CONTENT_HTML
      await getLink('root')
    }
    MAIN.isUndo = true
  }
})
