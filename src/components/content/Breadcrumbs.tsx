interface TAGS {
  name: string
}
interface info {
  TITLE: string
  SLUG: string
  TAGS: TAGS[]
}
interface props {
  info: info
}
export default function Breadcrumbs({ info }: props) {
  const { TITLE, SLUG, TAGS } = info
  return (
    <div className='w-[90%] text-sm breadcrumbs m-5'>
      <ul>
        <li><a href='/'>Home</a></li>
        <li><a href={`/blog/${SLUG}`}>{TITLE}</a></li>
        {
          TAGS.map((NAME, i) => {
            return (
              <li key={i}>
                <a href={`/tags/${NAME}`}>{NAME}</a>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}
