import { html } from '@utils/parser'

interface props {
  TAGS: string[]
}
export default function Tags({ TAGS }: props) {
  return html`
    <div>
    ${TAGS !== undefined &&
      TAGS.map((name) => {
        return html`<a class='btn m-3 btn-primary'>${name}</a>`
      })}
    </div>
  `
}
