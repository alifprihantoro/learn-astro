import HeroElement from './heroElement'
import ContactHome from './Contact'
import AboutHome from './About'
import ListCardImg from '@components/ListCardImg'
import project from '@configs/home/project'
import { html } from '@utils/parser'

export default function Home() {
  return html`
      ${HeroElement()}
      <div class="md:flex">
        ${AboutHome()}
        ${ContactHome()}
      </div>
      <main>
        <div id='content' class="">
          <h2 class='font-bold text-4xl mx-5 my-5 border-b-2'>Project</h2>
          <div class='md:flex md:p-5 max-w-full' >
            ${ListCardImg(project)}
          </div>
        </div>
      </main>
  `
}
