import type { Pagenation } from '@Mytypes/blogProps'
interface props {
  PAGE_PROPS: Pagenation
}
export default function PagenationPageBlog({ PAGE_PROPS }: props) {
  const { currentPage, url, lastPage } = PAGE_PROPS
  return (
    <div className='w-fit m-auto text-center leading-[4rem]'>
      {
        currentPage != 1 && (
          <>
            <a className='btn mx-2' href='/blog'>
              First Page
            </a>
            <a className='btn mx-2' href={url.prev}>
              prev
            </a>
          </>
        )
      }
      <div className='btn mx-2'>current page : {currentPage}</div>
      <div className='btn mx-2'>total page : {lastPage}</div>
      {
        currentPage != lastPage && (
          <>
            <a className='btn mx-2' href={url.next}>
              next
            </a>
            <a className='btn mx-2' href={`/blog/${lastPage}`}>
              Last Page
            </a>
          </>
        )
      }
    </div>
  )
}
