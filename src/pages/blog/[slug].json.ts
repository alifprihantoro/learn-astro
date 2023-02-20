import getPropsBlogs from '@utils/getPropsBlogs'
import type { MarkdownInstance } from 'astro'

const postImportResult = import.meta.glob('../../content/blog/**/*.md', { eager: true })
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const posts = Object.values(postImportResult) as MarkdownInstance<Record<string, any>>[]
const POST_SORT = getPropsBlogs(posts)
const ITEMS = POST_SORT.map(({ props }) => {
  const { TITLE, DATE, SLUG, DESCRIPTION, Content } = props
  const DESCRIPTION_CHECK = DESCRIPTION == undefined ? '' : DESCRIPTION
  return {
    title: TITLE,
    pubDate: new Date(DATE),
    description: DESCRIPTION_CHECK,
    link: `/blog/${SLUG}/`,
    SLUG,
    Content,
  }
})
export async function get({ props }) {
  return {
    body: JSON.stringify(props),
  }
}
export async function getStaticPaths() {
  return ITEMS.map((val) => {
    return { params: { slug: val.SLUG }, props: val }
  })
}
