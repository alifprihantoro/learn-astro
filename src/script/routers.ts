import get from './utils/fetch'

export default async function routersPage({ CURRENT_LINK, TARGET_LINK }: { CURRENT_LINK: string, TARGET_LINK: string }) {
  const ROOT_EL = document.getElementById('root')
  const isOnHome = CURRENT_LINK.match(/^#/i) || CURRENT_LINK.length < 0
  const isHomeLink = isOnHome && TARGET_LINK.match(/^#/i)
  if (isHomeLink) {
    return window.open(TARGET_LINK, '_self')
  }
  const isGoHome = !isOnHome && TARGET_LINK.match(/^#/i)
  if (isGoHome) {
    const HomePage = await import('@layouts/home')
    ROOT_EL.innerHTML = HomePage.default()
    return window.open(TARGET_LINK, '_self')
  }
  window.history.replaceState({}, 'muryp', `/${TARGET_LINK}`)
  window.open('#', '_self')
  const isGoBlogList = TARGET_LINK.match(/^blog(\/|)(\d+|)$/i)
  if (isGoBlogList) {
    const ListBlogArticle = await import('@layouts/blog')
    const URL = TARGET_LINK.match(/^blog(\/|)$/i) ? '/blog/1.json' : `/${TARGET_LINK}.json`
    const PAGE_DATA = await get({ URL })
      .then(({ page }) => page)
    return ROOT_EL.innerHTML = ListBlogArticle.default(PAGE_DATA)
  }
  const isGoBlogArticle = TARGET_LINK.match(/^blog\/.*/i)
  if (isGoBlogArticle) {
    const PageArticle = await import('@components/content')
    const PAGE_DATA = await get({ URL: `/${TARGET_LINK}.json` })
    return ROOT_EL.innerHTML = PageArticle.default(PAGE_DATA)
  }
  // if (PATH === 'note') {
  //   return console.log('note')
  // }
  // if (PATH === 'notes') {
  //   return console.log('notes')
  // }
  // if (PATH === 'pages') {
  //   return console.log('pages')
  // }
  // console.log('not found')
}
