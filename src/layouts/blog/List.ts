import type { Pagenation } from '@Mytypes/blogProps'
import { html } from '@utils/parser'

interface props {
  PAGE_INFO: Pagenation
}
export default function ListBlog({ PAGE_INFO }: props) {
  return html`
    <div class='myread'>
      ${PAGE_INFO.data.map(({ SLUG, TITLE, DATE }) => {
    const MyDate = new Date(DATE)
    return html`
      <a href="/blog/${SLUG}">
        <div class='content'>
          <span class='date'>
            <span class='day'>${MyDate.getDay()}</span>
            <span class='rest'>
              ${new Intl.DateTimeFormat('en-US', { month: 'long' }).format(MyDate)}
              <br />
              ${MyDate.getFullYear()}
            </span>
          </span>
          <h3 class='readMore'>${TITLE}</h3>
        </div>
      </a>
    `})}
    </div>
  `
}
