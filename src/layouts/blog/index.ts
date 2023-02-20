import PageHeader from '@layouts/blog/PageHeader'
import ListBlog from '@layouts/blog/List'
import PagenationPageBlog from '@layouts/blog/PagenationPageBlog'
import type { Pagenation } from '@Mytypes/blogProps'

export default function BlogArticle(PAGE_PROPS: Pagenation) {
  return PageHeader({ TOTAL: PAGE_PROPS.total }) +
    ListBlog({ PAGE_INFO: PAGE_PROPS }) +
    PagenationPageBlog({ PAGE_PROPS: PAGE_PROPS })
}
