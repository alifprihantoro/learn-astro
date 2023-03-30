import type { content } from '@Mytypes/listImg'
import { html } from '@utils/parser'

export default function ListCardImg(list: content[]) {
  return html`
      ${list.map(({ title, img, link }) => {
    return html`
      <div class="card card-compact w-[90%] max-w-sm shadow-md shadow-base-300 rounded-[5px] m-5">
        <figure>
          <img tabIndex="0" class='w-full object-cover h-48' src="${img}" alt="${title}" />
        </figure>
        <div class="card-body">
          <h2 tabIndex="0" class="card-title" alt="${title}">
            <a href="${link}" alt="link menuju ${title}">
              ${title}
            </a>
          </h2>
        </div>
      </div>
    `
  })}`
}
