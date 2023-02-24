export default async function get({ URL }: { URL: string }) {
  return await fetch(URL)
    .then(res => res.json())
}
