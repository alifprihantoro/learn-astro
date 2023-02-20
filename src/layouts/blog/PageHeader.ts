import { html } from '@utils/parser'

interface props {
  TOTAL: number
}
export default function PageHeader({ TOTAL }: props) {
  return html`
      <h2 class='font-bold text-4xl mx-5 my-5 border-b-2 w-full'>Blog</h2>
      <div class='alert alert-info shadow-lg'>
        <div>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            class='stroke-current flex-shrink-0 w-6 h-6'
          ><path
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
            ></path></svg
          >
          <span>
            Terdapat "${TOTAL}" Postingan dari Blog yang bisa kalian baca dan komentari.
          </span>
        </div>
      </div>
  `
}
