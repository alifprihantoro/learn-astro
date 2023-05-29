import type { MarkdownInstance } from 'astro'

const postImportResult = import.meta.glob('../../content/note/**/*.md', { eager: true })
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const posts = Object.values(postImportResult) as MarkdownInstance<Record<string, any>>[]
const ITEMS = posts.map((post) => {
  const frontmatter = post.frontmatter
  const TITLE = frontmatter.title
  const SLUG = frontmatter.slug
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
