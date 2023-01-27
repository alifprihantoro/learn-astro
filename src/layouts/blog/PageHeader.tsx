interface props {
  total: number
}
export default function PageHeader({ total }: props) {
  return (
    <>
      <h2 className='font-bold text-4xl mx-5 my-5 border-b-2 w-full'>Blog</h2>
      <div className='alert alert-info shadow-lg'>
        <div>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            className='stroke-current flex-shrink-0 w-6 h-6'
          ><path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
            ></path></svg
          >
          <span>
            {`Terdapat "${total}" Postingan dari Blog yang bisa kalian baca dan komentari.`}
          </span>
        </div>
      </div>
    </>
  )
}
