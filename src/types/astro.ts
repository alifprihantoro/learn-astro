interface url {
  prev: string
  next: string
}
interface props {
  slug: string
  TITLE: string
  DATE: string
}
interface data {
  params: object
  props: props
}
export interface page {
  url: url
  lastPage: number
  currentPage: number
  total: number
  data: data[]
}
