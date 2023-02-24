import type { Astro } from '@Mytypes/blogProps'
import getPropsBlogs from '@utils/getPropsBlogs'
import nextPrevPost from '@utils/nextPrevPost'
import type { MarkdownInstance } from 'astro'

const postImportResult = import.meta.glob('../../content/blog/**/*.md', { eager: true })
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const posts = Object.values(postImportResult) as MarkdownInstance<Record<string, any>>[]
const POST_SORT = nextPrevPost(getPropsBlogs(posts))
const ITEMS = POST_SORT.map(({ props }) => {
  const { TITLE, DATE, SLUG, DESCRIPTION, Content, AUTHOR, TAGS, NEXT_POST, PREV_POST } = props
  return {
    TITLE,
    Content,
    DESCRIPTION,
    SLUG,
    AUTHOR,
    DATE,
    TAGS,
    NEXT_POST,
    PREV_POST,
  }
})
export async function get({ props }) {
  return {
    body: JSON.stringify(props),
  }
}
export async function getStaticPaths() {
  return ITEMS.map((val: Astro) => {
    return { params: { slug: val.SLUG }, props: val }
  })
}
