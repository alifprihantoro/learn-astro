import NotFoundPage from '@layouts/404'
import { html } from '@utils/parser'

export default async function get({ URL, callBack }: { URL: string, callBack: (arg) => string }) {
  return await fetch(URL)
    .then(async res => {
      return { res, data: await res.json() }
    }).then(({ res, data }) => {
      if (res.ok) {
        return callBack(data)
      }
      if (res.status === 404) {
        return NotFoundPage()
      }
      return html`<div>error network</div>`
    })
}
