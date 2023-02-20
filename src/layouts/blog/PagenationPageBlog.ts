import type { Pagenation } from '@Mytypes/blogProps'
import { html } from '@utils/parser'
interface props {
  PAGE_PROPS: Pagenation
}
export default function PagenationPageBlog({ PAGE_PROPS }: props) {
  const { currentPage, url, lastPage } = PAGE_PROPS
  return html`
<div class='w-fit m-auto text-center leading-[4rem]'>
  ${currentPage != 1 && html`
      <a class='btn mx-2' href='/blog'> First Page </a>
      <a class='btn mx-2' href={url.prev}> prev </a>
    `}
      <div class='btn mx-2'>current page : ${currentPage}</div>
      <div class='btn mx-2'>total page : ${lastPage}</div>
  ${currentPage != lastPage && html`
      <a class='btn mx-2' href="${url.next}"> next </a>
      <a class='btn mx-2' href="/blog/${lastPage}"> Last Page </a>
    `}
</div>
`}
