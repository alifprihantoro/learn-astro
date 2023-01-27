import type { Pagenation } from '@Mytypes/blogProps'

interface props {
  PAGE_INFO: Pagenation
}
export default function ListBlog({ PAGE_INFO }: props) {
  return (
    <div className='myread'>
      {
        PAGE_INFO.data.map(({ props }, i) => {
          // eslint-disable-next-line react/prop-types
          const { SLUG, TITLE, DATE } = props
          const MyDate = new Date(DATE)
          return (
            <a key={i} href={`/blog/${SLUG}`}>
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
