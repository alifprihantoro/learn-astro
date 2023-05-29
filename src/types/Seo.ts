interface pages {
  firts: string
  last: string
  prev: string
  next: string
}
export interface seo {
  TITLE: string
  LINK: string
  IMG: string
  DESCRIPTION: string
  DATE_CONTENT?: string
  PAGENATION?: pages
}
export interface PROPS_SEO {
  seo: seo
}
