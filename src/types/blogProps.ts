import type { AstroComponentFactory } from 'astro/dist/runtime/server'

export interface Author {
  name: string
  uri: string
}
export interface Posts {
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
  author: Author
}
interface Tags {
  name:string
}
export interface Astro {
  TITLE: string
  Content: AstroComponentFactory
  SLUG: string
  DESCRIPTION: string
  AUTHOR: Author
  DATE: string
  TAGS: Tags[]
}
interface Url {
  prev: string
  next: string
}
interface Params {
  slug: string
}
interface Data {
  params: Params
  props: Astro
}
export interface Pagenation {
  url: Url
  lastPage: number
  currentPage: number
  total: number
  data: Data[]
}
