import render from '@utils/markdownIt'
import pathMd2Url from '@utils/pathMd2Url'
import type { MarkdownInstance } from 'astro'

const postImportResult = import.meta.glob('../../content/notes/**/*.md', { eager: true })
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const posts = Object.values(postImportResult) as MarkdownInstance<Record<string, any>>[]
const ITEMS = posts.map((post) => {
  const slug = pathMd2Url(post.file)
  const title = slug.replace(/.*\//i, '')
  const Content = render(post.rawContent())
  return {
    params: { slug },
    props: { title, Content, slug },
  }
})
export async function get({ props }) {
  return {
    body: JSON.stringify(props),
  }
}
export async function getStaticPaths() {
  return ITEMS
}
