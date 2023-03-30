import type { Pagenation } from '@Mytypes/blogProps'
import { html } from '@utils/parser'
interface props {
  PAGE_PROPS: Pagenation
}
export default function PagenationPageBlog({ PAGE_PROPS }: props) {
  const { currentPage, url, lastPage } = PAGE_PROPS
  return html`
<div class='w-fit m-auto text-center leading-[4rem] max-md:[&>*]:w-full'>
  ${currentPage != 1 && html`
      <a class='btn bg-primary text-white/90 border-primary hover:bg-primary hover:translate-x-1 hover:-translate-y-1 mx-2' href='/blog'> First Page </a>
      <a class='btn bg-primary text-white/90 border-primary hover:bg-primary hover:translate-x-1 hover:-translate-y-1 mx-2' href=${url.prev.replace(/(.*)\.json$/i, '$1')}> prev </a>
    `}
      <div class='btn btn-secondary hover:bg-secondary text-white/80 mx-2'>current page : ${currentPage}</div>
      <div class='btn btn-secondary hover:bg-secondary text-white/80 mx-2'>total page : ${lastPage}</div>
  ${currentPage != lastPage && html`
      <a class='btn bg-primary border-primary text-white/90 hover:bg-primary hover:translate-x-1 hover:-translate-y-1 mx-2' href="${url.next.replace(/(.*)\.json$/i, '$1')}"> next </a>
      <a class='btn bg-primary border-primary text-white/90 hover:bg-primary hover:translate-x-1 hover:-translate-y-1 mx-2' href="/blog/${lastPage}"> Last Page </a>
    `}
</div>
`}
