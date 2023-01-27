interface Tags {
  name: string
}
interface Info {
  TITLE: string
  SLUG: string
  TAGS: Tags[]
}
interface Props {
  INFO: Info
}
export default function Breadcrumbs({ INFO }: Props) {
  const { TITLE, SLUG, TAGS } = INFO
  return (
    <div className='w-[90%] text-sm breadcrumbs m-5'>
      <ul>
        <li><a href='/'>Home</a></li>
        <li><a href={`/blog/${SLUG}`}>{TITLE}</a></li>
        {
          TAGS !== undefined &&
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
