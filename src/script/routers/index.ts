import LoadingHtml from '@components/Loading'
import regexRulesRoutes from './regex'
import { handlerListBlog, handlerListNote, handlerSingleBlog, handlerSingleNote } from '@script/handler/blog'
export default async function routersPage({ CURRENT_LINK, TARGET_LINK }: { CURRENT_LINK: string, TARGET_LINK: string }) {
  const goToTargetLink = () => {
    window.history.replaceState({}, 'muryp', `/${TARGET_LINK}`)
  }
  const { isHomeLink, isGoHome, isGoBlogList, isGoBlogArticle, isNotChangeLink, isGoNotesSingle, isGoNotesList, isGoNoteSingle, isGoNoteList, isGotoPage } = regexRulesRoutes({ CURRENT_LINK, TARGET_LINK })
  const ROOT_EL = document.getElementById('root')
  if (isHomeLink) {
    window.open(TARGET_LINK, '_self')
    return
  }
  if (isNotChangeLink) {
    return
  }
  ROOT_EL.innerHTML = LoadingHtml()
  if (isGoHome) {
    goToTargetLink()
    const HomePage = await import('@layouts/home')
    return HomePage.default()
  }
  window.open('#', '_self')
  goToTargetLink()
  if (isGoBlogList) {
    return await handlerListBlog(TARGET_LINK)
  }
  if (isGoBlogArticle) {
    return await handlerSingleBlog(TARGET_LINK)
  }
  if (isGoNoteList) {
    return handlerListNote({ TARGET_LINK, PATH: 'note' })
  }
  if (isGoNoteSingle) {
    return handlerSingleNote({ TARGET_LINK, PATH: 'note' })
  }
  if (isGoNotesList) {
    return handlerListNote({ TARGET_LINK, PATH: 'notes' })
  }
  if (isGoNotesSingle) {
    return handlerSingleNote({ TARGET_LINK, PATH: 'notes' })
  }
  if (isGotoPage) {
    return handlerSingleNote({ TARGET_LINK, PATH: 'pages' })
  }
  return '404 notfound'
}
