export default function regexRulesRoutes({ CURRENT_LINK, TARGET_LINK }: { CURRENT_LINK: string, TARGET_LINK: string }) {
  const isOnHome = CURRENT_LINK.match(/^(#.*|)$/i)
  const isHomeLink = isOnHome && TARGET_LINK.match(/^#/i)
  const isGoHome = !isOnHome && TARGET_LINK.match(/^(#.*|)$/i)
  const isNotChangeLink = TARGET_LINK.match(new RegExp(`^${CURRENT_LINK}$`, 'i'))
  const isListoSingle = (target: string) => {
    const regex = new RegExp(`^${target}(\\/|)(\\d+|)$`, 'i')
    return TARGET_LINK.match(regex)
  }
  const isArticle = (target: string) => {
    const regex = new RegExp(`^${target}\\/.*`, 'i')
    return TARGET_LINK.match(regex)
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
