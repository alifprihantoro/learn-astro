import { Icons } from '@configs/Icons'

interface AUTHOR {
  name: string
  uri: string
}
interface props {
  TITLE: string
  slug: string
  AUTHOR: AUTHOR
  DATE: string
}
export default function HeaderBlog({ TITLE, slug, AUTHOR, DATE }: props) {
  return (
    <div className='w-[90%] m-5 p-5 bg-base-300'>
      <h2 className='font-bold text-4xl'><a href={slug}>{TITLE}</a></h2>
      <div className="mt-3 flex">
        <a className='inline-flex mr-5 justify-center' href={AUTHOR.uri}>
          <span className='mr-3 h-fit relative top-1 bottom-1'>
            {Icons.About}
          </span>
          {AUTHOR.name}
        </a>
        <span className='flex'>
          <span className='mr-3 h-fit relative top-1 bottom-1'>
            {Icons.Date}
          </span>
          {new Date(DATE).toDateString()}
        </span>
      </div>
    </div>
  )
}
