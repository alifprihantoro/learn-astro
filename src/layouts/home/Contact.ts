import { CONTACS } from '@configs/home/CONTACTS'
import { html } from '@utils/parser'

export default function ContactHome() {
  return html`
    <div class='md:w-[50%] mx-5 pt-16' id='contact'>
      <h2 id='contacts' class='font-bold text-4xl my-5 border-b-2' tabIndex="0" >
        contact
      </h2>
      <ul>
        ${CONTACS.map(({ link, title, icon }) => {
    // eslint-disable-next-line indent
          return html`
            <li>
              <a class='flex hover:text-primary' rel='nofollow' target='blank' href="${link}" alt="link menuju ${title}">
                <span class="iconify mx-3" data-icon=${icon}></span>
                ${title}
              </a>
            </li>
          `})}
      </ul>
    </div>
  `
}
