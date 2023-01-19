import type { LIST_NAV } from '@Mytypes/nav'
import NavList from './list'

export default function Nav(LIST: LIST_NAV[]) {
  return (
    <>
      <NavList LIST={LIST} />
    </>
  )
}
