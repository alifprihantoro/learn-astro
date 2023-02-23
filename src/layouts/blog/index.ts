import PageHeader from '@layouts/blog/PageHeader'
import ListBlog from '@layouts/blog/List'
import PagenationPageBlog from '@layouts/blog/PagenationPageBlog'
import type { Pagenation } from '@Mytypes/blogProps'
import { html } from '@utils/parser'

export default function BlogArticle(PAGE_PROPS: Pagenation) {
  return html`<main class='flex flex-wrap mx-10' />` +
    PageHeader({ TOTAL: PAGE_PROPS.total }) +
    ListBlog({ PAGE_INFO: PAGE_PROPS }) +
    PagenationPageBlog({ PAGE_PROPS: PAGE_PROPS }) +
    html`</main>`
}
