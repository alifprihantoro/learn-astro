import './themeBtn'
import './cookiesBtn'
import routersPage from './routers'
const getLink = document.getElementsByTagName('a') as unknown as HTMLAnchorElement[]
for (let i = 0; i < getLink.length; i++) {
  getLink[i].onclick = (e) => {
    e.preventDefault()
    const LINK = getLink[i].href
    if (LINK.match(/(muryp\.my\.id|localhost)/i)) {
      routersPage({ LINK: LINK.split('/') })

    }
  }
}
