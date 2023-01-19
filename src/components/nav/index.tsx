import type { LIST_NAV } from '@Mytypes/nav'
import HeaderNav from './header'
import NavList from './list'

interface props {
  LIST: LIST_NAV[]
}
export default function Nav({ LIST }: props) {
  return (
    <>
      <nav>
        <HeaderNav/>
        <NavList LIST={LIST} />
      </nav>
    </>
  )
}
