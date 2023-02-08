import getBlogMd from '@utils/getBlogMd'
import type { MarkdownInstance } from 'astro'
import type { Posts } from '@Mytypes/blogProps'

/**
* @returns [markdown array] from astro and sort by date
*/
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function getPropsBlogs(posts: MarkdownInstance<Record<string, any>>[]) {
  posts.sort((a, b) => {
    const A_DATE = new Date(a.frontmatter.date).valueOf()
    const B_DATE = new Date(b.frontmatter.date).valueOf()
    return B_DATE - A_DATE
  })
  return posts.map((post) => {
    const frontmatter = post.frontmatter as Posts
    const TITLE = frontmatter.title
    let slug = frontmatter.slug
    slug =
      slug === undefined || slug === false
        ? getBlogMd(post.file)
        : frontmatter.slug
    const DESCRIPTION = frontmatter.description
    const Content = post.Content
    let AUTHOR = frontmatter.author
    AUTHOR =
      AUTHOR === undefined ? { name: 'Alief Prihantoro', uri: '#' } : AUTHOR
    const DATE = frontmatter.date
    const TAGS = frontmatter.tags
    const LASTMOD = frontmatter.lasmod
    return {
      params: { slug },
      props: { TITLE, Content, SLUG: slug, DESCRIPTION, AUTHOR, DATE, TAGS, LASTMOD, post },
    }
  })
}
