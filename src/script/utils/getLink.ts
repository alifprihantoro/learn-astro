import routersPage from '@script/routers'

export default async function getLink() {
  const GET_LIST_TAG_A = document.getElementsByTagName('a')
  for (let i = 0; i < GET_LIST_TAG_A.length; i++) {
    const GET_TAG_A = GET_LIST_TAG_A[i]
    const LINK = GET_TAG_A.getAttribute('href') || ''
    const isLinkChangeUi = !LINK.match(/(^http(s|):\/\/|^mail:|^#)/i)
    if (isLinkChangeUi) {
      GET_TAG_A.onclick = async (e) => {
        e.preventDefault()
        const CURRENT_LINK = window.location.href.split('/').slice(3).join('/')
        const TARGET_LINK = GET_TAG_A.href.split('/').slice(3).join('/')
        const CONTENT_HTML = await routersPage({ TARGET_LINK, CURRENT_LINK })
        const ROOT_EL = document.getElementById('root')
        if (CONTENT_HTML !== undefined) {
          ROOT_EL.innerHTML = CONTENT_HTML
          await getLink()
        }
      }
    }
  }
}
