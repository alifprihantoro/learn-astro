import render from '@utils/markdownIt'
import pathMd2Url from '@utils/pathMd2Url'
import type { MarkdownInstance } from 'astro'

const postImportResult = import.meta.glob('../../content/note/**/*.md', { eager: true })
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const posts = Object.values(postImportResult) as MarkdownInstance<Record<string, any>>[]
const ITEMS = posts.map((post) => {
  const frontmatter = post.frontmatter
  const TITLE = frontmatter.title
  const slug = frontmatter.slug || pathMd2Url(post.file)
  const DESCRIPTION = frontmatter.description
  const Content = render(post.rawContent())
  return { TITLE, Content, slug, DESCRIPTION }
})
export async function get({ props }) {
  return {
    body: JSON.stringify(props),
  }
}
export async function getStaticPaths() {
  return ITEMS.map((val) => {
    return { params: { slug: val.slug }, props: val }
  })
}
