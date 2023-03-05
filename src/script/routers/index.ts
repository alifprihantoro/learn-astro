import LoadingHtml from '@components/Loading'
import regexRulesRoutes from './regex'
import { handlerListBlog, handlerListNote, handlerSingleBlog, handlerSingleNote } from '@script/handler/blog'
import NotFoundPage from '@layouts/404'

export default async function routersPage({ NEXT_LINK, PREV_LINK, isUndo }: { NEXT_LINK: string, PREV_LINK: string, isUndo: boolean }) {
  const { isHomeLink, isGoHome, isGoBlogList, isGoBlogArticle, isNotChangeLink, isGoNotesSingle, isGoNotesList, isGoNoteSingle, isGoNoteList, isGotoPage } = regexRulesRoutes({ PREV_LINK, NEXT_LINK })
  const ROOT_EL = document.getElementById('root')
  if (isHomeLink) {
    !isUndo && window.open(NEXT_LINK, '_self')
    return
  }
  if (isNotChangeLink) {
    return
  }
  if (NEXT_LINK === '' && PREV_LINK.match(/^(#)/i)) {
    window.open('#', '_self')
    !isUndo && window.history.replaceState({}, 'muryp', '/')
    return
  }
  ROOT_EL.innerHTML = LoadingHtml()
  !isUndo && window.open('#', '_self')
  if (isGoHome) {
    const HomePage = await import('@layouts/home')
    return HomePage.default()
  }
  !isUndo && window.history.replaceState({}, 'muryp', `/${NEXT_LINK}`)
  if (isGoBlogList) {
    return await handlerListBlog(NEXT_LINK)
  }
  if (isGoBlogArticle) {
    return await handlerSingleBlog(NEXT_LINK)
  }
  if (isGoNoteList) {
    return await handlerListNote({ NEXT_LINK, PATH: 'note' })
  }
  if (isGoNoteSingle) {
    return await handlerSingleNote({ NEXT_LINK, PATH: 'note' })
  }
  if (isGoNotesList) {
    return await handlerListNote({ NEXT_LINK, PATH: 'notes' })
  }
  if (isGoNotesSingle) {
    return await handlerSingleNote({ NEXT_LINK, PATH: 'notes' })
  }
  if (isGotoPage) {
    return await handlerSingleNote({ NEXT_LINK, PATH: 'pages' })
  }
  return NotFoundPage()
}
