import routersPage from '@script/routers'
import { MAIN } from '../main'

export default async function getLink(TAG: string) {
  const CEK_TAG = TAG === 'all' ? document : document.getElementById('root')
  const GET_LIST_TAG_A = CEK_TAG.getElementsByTagName('a')
  for (let i = 0; i < GET_LIST_TAG_A.length; i++) {
    const GET_TAG_A = GET_LIST_TAG_A[i]
    const LINK = GET_TAG_A.getAttribute('href') || ''
    const isLinkChangeUi = !LINK.match(/(^http(s|):\/\/|^mail:|^#)/i)
    if (isLinkChangeUi) {
      GET_TAG_A.onclick = async (e) => {
        e.preventDefault()
        MAIN.isUndo = false
        const PREV_LINK = window.location.href.split('/').slice(3).join('/')
        const NEXT_LINK = GET_TAG_A.href.split('/').slice(3).join('/')
        const CONTENT_HTML = await routersPage({ NEXT_LINK, PREV_LINK })
        const ROOT_EL = document.getElementById('root')
        if (CONTENT_HTML !== undefined) {
          ROOT_EL.innerHTML = CONTENT_HTML
          await getLink('root')
        }
        MAIN.PREV_LINK_GLOBAL = NEXT_LINK
        MAIN.isUndo = true
      }
    }
  }
}
