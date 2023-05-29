import { html } from '@utils/parser'

interface Info {
  TITLE: string
  SLUG: string
  TAGS: string[]
}
export default function Breadcrumbs(INFO: Info) {
  const { TITLE, SLUG, TAGS } = INFO
  return html`
    <div class='w-[90%] text-sm breadcrumbs m-5'>
      <ul>
        <li><a href='/'>Home</a></li>
        <li><a href="/blog/${SLUG}">${TITLE}</a></li>
        ${TAGS !== undefined &&
          TAGS.map((name) => {
            return html`
              <li>
                <a href="/tags/${name}">${name}</a>
              </li>
            `
          })}
      </ul>
    </div>
  `
}
