import type { content } from '@Mytypes/listImg'

interface list {
  content: content[]
}
export default function ListCardImg(list: list) {
  return (
    <div className='md:flex md:p-5 max-w-full'>
      {
        list.content.map(({ title, img, link }, i) => {
          return (
            <div key={i} className="card card-compact w-[90%] max-w-sm bg-base-100 shadow-xl m-5">
              <figure>
                <img tabIndex={0} className='w-full object-cover h-48' src={img} alt={title} />
              </figure>
              <div className="card-body">
                <h2 tabIndex={0} className="card-title" alt={title}>
                  <a href={link} alt={`link menuju ${title}`}>
                    {title}
                  </a>
                </h2>
              </div>
            </div>
          )
        })}
    </div>
  )
}
