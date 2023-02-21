import HERO_EL from '@configs/home/HERO_EL'
import { html } from '@utils/parser'

export default function HeroElement() {
  const { title, paragraph, btn } = HERO_EL
  return html`
    <div class="hero min-h-screen">
      <div class="hero-content text-center">
        <div class="max-w-md">
          <h2 class="text-5xl font-bold" tabIndex="0" >${title}</h2>
          <p class="py-6" tabIndex="0" >${paragraph}</p>
          <a class="btn btn-primary" href="${btn.link}">${btn.title}</a>
        </div>
      </div>
    </div>
  `
}
