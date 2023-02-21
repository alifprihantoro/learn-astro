import { html } from '@utils/parser'

interface AUTHOR {
  name: string
  uri: string
}
interface Props {
  TITLE: string
  SLUG: string
  AUTHOR: AUTHOR
  DATE: string
}
export default function HeaderBlog({ TITLE, SLUG, AUTHOR, DATE }: Props) {
  return html`
    <div class='w-[90%] m-5 p-5 bg-base-100 rounded-xl'>
      <h2 class='font-bold text-5xl'><a href="${SLUG}">${TITLE}</a></h2>
      <div class="mt-3 flex">
        <a class='inline-flex mr-5 justify-center' href="${AUTHOR.uri}">
          <span class="iconify mr-3 h-fit relative top-1 bottom-1" data-icon="pajamas:profile"></span>
          ${AUTHOR.name}
        </a>
        <span class='flex'>
          <span class="iconify mr-3 h-fit relative top-1 bottom-1" data-icon="material-symbols:date-range"></span>
          ${new Date(DATE).toDateString()}
        </span>
      </div>
    </div>
  `
}
