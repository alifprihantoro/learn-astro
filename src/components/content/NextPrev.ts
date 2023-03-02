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
        <a class='btn mb-3' href="${PREV_POST.SLUG}">
          ${PREV_POST.TITLE}
        </a>
      `}
      ${NEXT_POST.TITLE !== undefined && html`
        <a class='btn mb-3' href="${NEXT_POST.SLUG}">
          ${NEXT_POST.TITLE}
        </a>
      `}
  `
}
