import rss from '@astrojs/rss'
import getPropsBlogs from '@utils/getPropsBlogs'

export async function get(context) {
  // const blog = await getCollection('blog')
  const postImportResult = import.meta.glob('../content/blog/**/*.md', { eager: true })
  const posts = Object.values(postImportResult)
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
