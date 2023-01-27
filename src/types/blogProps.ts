import type { AstroComponentFactory } from 'astro/dist/runtime/server'

export interface author {
  name: string
  uri: string
}
export interface posts {
  title: string
  slug: string | undefined | boolean
  date: string
  lasmod: string
  draft: boolean
  show_comments: boolean
  type: string
  tags: string[]
  image: string
  thumbnail: string
  description: string
  author: author
}
interface TAGS {
  name:string
}
export interface astro {
  TITLE: string
  Content: AstroComponentFactory
  slug: string
  DESCRIPTION: string
  AUTHOR: author
  DATE: string
  TAGS: TAGS[]
}
