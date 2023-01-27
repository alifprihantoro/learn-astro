import type { page } from '@Mytypes/astro'

interface props {
  page: page
}
export default function ListBlog({ page }: props) {
  return (
    <div className='myread'>
      {
        page.data.map(({ props }, i) => {
          // eslint-disable-next-line react/prop-types
          const { slug, TITLE, DATE } = props
          const MyDate = new Date(DATE)
          return (
            <a key={i} href={`/blog/${slug}`}>
              <div className='content'>
                <span className='date'>
                  <span className='day'>{MyDate.getDay()}</span>
                  <span className='rest'>
                    {new Intl.DateTimeFormat('en-US', { month: 'long' }).format(
                      MyDate,
                    )}
                    <br />
                    {MyDate.getFullYear()}
                  </span>
                </span>
                <h3 className='readMore'>{TITLE}</h3>
              </div>
            </a>
          )
        })
      }
    </div>
  )
}
