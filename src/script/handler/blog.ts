import { html } from '@utils/parser'
import get from '../utils/fetch'

export async function handlerListBlog(TARGET_LINK: string) {
  const ListBlogArticle = await import('@layouts/blog')
  const URL = TARGET_LINK.match(/^blog(\/|)$/i) ? '/blog/1.json' : `/${TARGET_LINK}.json`
  const PAGE_DATA = await get({ URL })
    .then(({ page }) => page)
  return ListBlogArticle.default(PAGE_DATA)
}
export async function handlerSingleBlog(TARGET_LINK: string) {
  const PageArticle = await import('@components/content')
  const PAGE_DATA = await get({ URL: `/${TARGET_LINK}.json` })
  return PageArticle.default(PAGE_DATA)
}
export async function handlerListNote({ TARGET_LINK, PATH }: { TARGET_LINK: string, PATH: string }) {
  const PAGE_DATA = await get({ URL: `/${TARGET_LINK}.json` })
  const PageArticle = html`
    <main class='flex flex-wrap mx-10'>
      ${ PAGE_DATA.map(({ SLUG, TITLE }) => {
  // eslint-disable-next-line indent
        return html`
            <div class='note-list'>
              <h2 class='card-title'>
                <a href='./${PATH}/${SLUG}'>${TITLE}</a>
              </h2>
            </div>
        `
  // eslint-disable-next-line indent
      }) }
    </main>
  `
  return PageArticle
}
export async function handlerSingleNote({ TARGET_LINK, PATH }: { TARGET_LINK: string, PATH: string }) {
  const {Content} = await get({ URL: `/${TARGET_LINK}.json` })
  const PageArticle = html`
    <article class='prose m-5'>
      ${PATH!=='pages'&&html`<a href='/${PATH}' class='btn m-5'>back to list</a>`}
      <div class='prose m-5' >
        ${Content}
      </div>
    </article>
  `
  return PageArticle
}
