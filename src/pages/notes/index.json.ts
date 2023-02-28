import type { MarkdownInstance } from 'astro'
import pathMd2Url from '@utils/pathMd2Url'

const postImportResult = import.meta.glob('../../content/notes/**/*.md', { eager: true })
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const posts = Object.values(postImportResult) as MarkdownInstance<Record<string, any>>[]
const ITEMS = posts.map((post) => {
  const SLUG = pathMd2Url(post.file)
  const SPLIT_SLUG = SLUG.split('/')
  const TITLE = SPLIT_SLUG[SPLIT_SLUG.length - 2]
  return {
    TITLE,
    SLUG,
  }
})
export async function get() {
  return {
    body: JSON.stringify(ITEMS),
  }
}
