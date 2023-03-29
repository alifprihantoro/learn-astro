export default function regexRulesRoutes({ NEXT_LINK, PREV_LINK }: { NEXT_LINK: string, PREV_LINK: string }) {
  const isOnHome = PREV_LINK.match(/^#/i) || PREV_LINK === ''
  const isHomeLink = isOnHome && NEXT_LINK.match(/^#/i)
  const isGoHome = !isOnHome && NEXT_LINK.match(/^(#.*|)$/i)
  const isNotChangeLink = NEXT_LINK.match(new RegExp(`^${PREV_LINK}$`, 'i'))
  const isListoSingle = (target: string) => {
    const regex = new RegExp(`^${target}(\\/|)(\\d+|)$`, 'i')
    return NEXT_LINK.match(regex)
  }
  const isArticle = (target: string) => {
    const regex = new RegExp(`^${target}\\/.*`, 'i')
    return NEXT_LINK.match(regex)
  }
  const isGoBlogList = isListoSingle('blog')
  const isGoBlogArticle = isArticle('blog')
  const isGoNoteList = isListoSingle('note')
  const isGoNoteSingle = isArticle('note')
  const isGoNotesList = isListoSingle('notes')
  const isGoNotesSingle = isArticle('notes')
  const isGotoPage = isArticle('pages')
  return { isHomeLink, isGoHome, isGoBlogList, isGoBlogArticle, isNotChangeLink, isGoNoteList, isGoNoteSingle, isGoNotesList, isGoNotesSingle, isGotoPage }
}
