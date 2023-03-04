import { html } from '@utils/parser'
import get from '../utils/fetch'

export async function handlerListBlog(NEXT_LINK: string) {
  const ListBlogArticle = await import('@layouts/blog')
  const URL = NEXT_LINK.match(/^blog(\/|)$/i) ? '/blog/1.json' : `/${NEXT_LINK}.json`
  const PAGE_DATA = await get({ URL })
    .then(({ page }) => page)
  return ListBlogArticle.default(PAGE_DATA)
}
export async function handlerSingleBlog(NEXT_LINK: string) {
  const PageArticle = await import('@components/content')
  const PAGE_DATA = await get({ URL: `/${NEXT_LINK}.json` })
  import('../comment').then((e) => e.default())
  return PageArticle.default(PAGE_DATA)
}
export async function handlerListNote({ NEXT_LINK, PATH }: { NEXT_LINK: string, PATH: string }) {
  const PAGE_DATA = await get({ URL: `/${NEXT_LINK}.json` })
  const PageArticle = html`
    <main class='flex flex-wrap mx-10'>
      ${PAGE_DATA.map(({ SLUG, TITLE }) => {
    // eslint-disable-next-line indent
    return html`
            <div class='note-list'>
              <h2 class='card-title'>
                <a href='./${PATH}/${SLUG}'>${TITLE}</a>
              </h2>
            </div>
        `
    // eslint-disable-next-line indent
  })}
    </main>
  `
  return PageArticle
}
export async function handlerSingleNote({ NEXT_LINK, PATH }: { NEXT_LINK: string, PATH: string }) {
  const { Content } = await get({ URL: `/${NEXT_LINK}.json` })
  const PageArticle = html`
    <article class='prose m-5'>
      ${PATH !== 'pages' && html`<a href='/${PATH}' class='btn m-5'>back to list</a>`}
      <div class='prose m-5' >
        ${Content}
      </div>
    </article>
  `
  return PageArticle
}
