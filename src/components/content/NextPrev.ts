import { html } from '@utils/parser'

interface Link {
  TITLE: string
  SLUG: string
}
interface Props {
  NEXT_POST: Link
  PREV_POST: Link
}
export default function NextPrev({ NEXT_POST, PREV_POST }: Props) {
  return html`
      ${PREV_POST.TITLE !== undefined && html`
        <a href="${PREV_POST.SLUG}">
          <div class='btn'>${PREV_POST.TITLE}</div>
        </a>
      `}
      ${NEXT_POST.TITLE !== undefined && html`
        <a href="${NEXT_POST.SLUG}">
          <div class='btn'>${NEXT_POST.TITLE}</div>
        </a>
      `}
  `
}
