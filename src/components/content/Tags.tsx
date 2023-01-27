interface TAGS {
  name: string
}
interface props {
  TAGS: TAGS[]
}
export default function Tags({ TAGS }: props) {
  return (
    <div>
      {TAGS !== undefined &&
        TAGS.map((name, i) => {
          return <a key={i} className='btn m-3'>{name}</a>
        })
      }
    </div>
  )
}
