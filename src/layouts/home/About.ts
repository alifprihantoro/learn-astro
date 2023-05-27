import { ABOUT_HOME, ROADMAPS_HOME } from '@configs/home/INFO'
import { html } from '@utils/parser'

export default function AboutHome() {
  return html`
    <div class='md:w-[50%] mx-5 pt-16' id='about'>
      <h2 tabIndex="0" id='About' class='font-bold text-4xl my-5 border-b-2'>${ABOUT_HOME.title}</h2>
      <p tabIndex="0" >${ABOUT_HOME.body}</p>
      <a href=${ABOUT_HOME.btn.link} class='btn btn-secondary text-white/90' rel='nofollow' target="_blank" >${ABOUT_HOME.btn.title}</a>
      <h2 tabIndex="0" id='Roadmaps' class='font-bold text-4xl my-5 border-b-2'>${ROADMAPS_HOME.title}</h2>
      <ul>
  ${ROADMAPS_HOME.lists.map((list) => {
    return html`<li class='list-disc ml-4' tabIndex="0">${list}</li>`
  })}
      </ul>
    </div>
  `
}
