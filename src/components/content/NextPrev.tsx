interface Link {
  TITLE:string
  SLUG:string
}
interface Props {
  NEXT_POST:Link
  PREV_POST:Link
}
export default function NextPrev({ NEXT_POST, PREV_POST }: Props) {
  return (
    <>

      {
        PREV_POST.TITLE !== undefined && (
          <a href={PREV_POST.SLUG}>
            <div className='btn'>{PREV_POST.TITLE}</div>
          </a>
        )
      }
      {
        NEXT_POST.TITLE !== undefined && (
          <a href={NEXT_POST.SLUG}>
            <div className='btn'>{NEXT_POST.TITLE}</div>
          </a>
        )
      }
    </>
  )
}
