import type { LIST_NAV } from '@Mytypes/nav'
interface props {
  LIST: LIST_NAV[]
}
export default function NavList({ LIST }: props) {
  return (
    <>
      {
        LIST.map(({ link, title }, i) => {
          return <a href={link} key={i}>{title}</a>
        })
      }
    </>
  )
}
