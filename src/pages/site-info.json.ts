import type { APIContext } from 'astro'

export function get({ generator, site }: APIContext) {
  const body = JSON.stringify({ generator, site })
  return new Response(body)
}
