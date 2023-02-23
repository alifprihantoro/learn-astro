// import Home from '@layouts/home'
// import BlogArticle from '@layouts/blog'

let CURRENT_PATH = ''
const GET_PATH = window.location.href.split('/')[3]
if (GET_PATH.match(/^#/i) || GET_PATH.length === 0) {
  CURRENT_PATH = 'home'
} else {
  CURRENT_PATH = GET_PATH
}
export default async function routersPage({ LINK }: { LINK: string[] }) {
  const PATH = LINK[3]
  // const SUB_PATH = LINK[4]
  const ROOT_EL = document.getElementById('root')
  if (PATH.match(/^#/i) || PATH.length === 0) {
    if (CURRENT_PATH==='home') {
      return
    }
    return
    // return ROOT_EL.innerHTML = Home()
  }
  if (PATH === 'blog') {
    const BlogArticle = await import('@layouts/blog') as (PAGE_DATA:any)=>string
    CURRENT_PATH = 'blog'
    const PAGE_DATA = await fetch('/blog/1.json')
      .then(res => res.json())
      .then(({ page }) => page)
    // console.log(PAGE_DATA)
    return ROOT_EL.innerHTML = BlogArticle.default(PAGE_DATA)
  }
  if (PATH === 'note') {
    return console.log('note')
  }
  if (PATH === 'notes') {
    return console.log('notes')
  }
  if (PATH === 'pages') {
    return console.log('pages')
  }
  console.log('not found')
}
