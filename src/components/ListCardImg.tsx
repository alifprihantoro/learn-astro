import type { content } from '@Mytypes/listImg'

interface list {
  content: content[]
}
export default function ListCardImg(list: list) {
  return (
    <div className='flex'>
      {
        list.content.map(({ title, img, body, link }, i) => {
          return (
            <div key={i} className="card card-compact w-96 bg-base-100 shadow-xl m-5">
              <figure><img className='w-[300px] h-[300px]' src={img} alt="Shoes" /></figure>
              <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{body}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">
                    <a href={link}>Show</a>
                  </button>
                </div>
              </div>
            </div>
          )
        })}
    </div>
  )
}
