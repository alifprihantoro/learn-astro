import routersPage from '@script/routers'
import regexRulesRoutes from '@script/routers/regex'
import { has } from 'markdown-it/lib/common/utils'
let PREV_LINK_GLOBAL = ''
let isUndo = false

const changeEl = async ({ NEXT_LINK, PREV_LINK, UNDO }: { NEXT_LINK: string, PREV_LINK: string, UNDO: boolean }) => {
  const CONTENT_HTML = await routersPage({ NEXT_LINK, PREV_LINK, isUndo: UNDO })
  const ROOT_EL = document.getElementById('root')
  if (CONTENT_HTML !== undefined) {
    ROOT_EL.innerHTML = CONTENT_HTML
    const { isGoHome } = regexRulesRoutes({ PREV_LINK, NEXT_LINK })
    if (isGoHome) {
      !UNDO && window.history.replaceState({}, 'muryp', `/${NEXT_LINK}`)
      !UNDO && window.open(NEXT_LINK, '_self')
    }
    await getLink('root')
  }
  PREV_LINK_GLOBAL = NEXT_LINK
  isUndo = true
}
async function getLink(TAG: string) {
  const CEK_TAG = TAG === 'all' ? document : document.getElementById('root')
  const GET_LIST_TAG_A = CEK_TAG.getElementsByTagName('a')
  for (let i = 0; i < GET_LIST_TAG_A.length; i++) {
    const GET_TAG_A = GET_LIST_TAG_A[i]
    const LINK = GET_TAG_A.getAttribute('href') || ''
    const isLinkChangeUi = !LINK.match(/(^http(s|):\/\/|^mail:|^#)/i)
    if (isLinkChangeUi) {
      GET_TAG_A.onclick = async (e) => {
        e.preventDefault()
        // close menu if link click
        document.getElementsByClassName('nav-slide')[0]
          .getElementsByTagName('input')[0].checked = false
        isUndo = false
        const PREV_LINK = window.location.href.split('/').slice(3).join('/')
        const NEXT_LINK = GET_TAG_A.href.split('/').slice(3).join('/')
        changeEl({ PREV_LINK, NEXT_LINK, UNDO: false })
      }
    }
  }
}
await getLink('all')
window.addEventListener('popstate', async function() {
  const CURRENT_LINK = window.location.href.split('/').slice(3).join('/')
  if (isUndo) {
    isUndo = false
    const PREV_LINK = PREV_LINK_GLOBAL
    const NEXT_LINK = CURRENT_LINK
    changeEl({ PREV_LINK, NEXT_LINK, UNDO: true })
  }
})
