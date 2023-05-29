import rss from '@astrojs/rss'
import getPropsBlogs from '@utils/getPropsBlogs'
import type { MarkdownInstance } from 'astro'

interface Context {
  site: string
}
export async function get(context: Context) {
  const postImportResult = import.meta.glob('../content/blog/**/*.md', { eager: true })
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const posts = Object.values(postImportResult) as MarkdownInstance<Record<string, any>>[]
  const POST_SORT = getPropsBlogs(posts)
  const ITEMS = POST_SORT.map(({ props }) => {
    const { TITLE, DATE, SLUG, DESCRIPTION } = props
    const DESCRIPTION_CHECK = DESCRIPTION == undefined ? '' : DESCRIPTION
    return {
      title: TITLE,
      pubDate: new Date(DATE),
      description: DESCRIPTION_CHECK,
      link: `/blog/${SLUG}/`,
    }
  })
  return rss({
    title: 'Buzz?s Blog',
    description: 'A humble Astronaut?s guide to the stars',
    site: context.site,
    items: ITEMS,
  })
}
