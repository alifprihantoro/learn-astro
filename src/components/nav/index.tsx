import type { LIST_NAV } from '@Mytypes/nav'
import NavList from './list'

interface props {
  LIST: LIST_NAV[]
}
export default function Nav({ LIST }: props) {
  const LOGO = 'MuryP'
  return (
    <>
      <nav className='md:navbar rounded-box bg-neutral text-neutral-content'>
        <a className='btn btn-ghost normal-case text-xl'>{LOGO}</a>
        <div className='fixed bottom-0 right-0 w-screen text-center'>
          <ul className='m-auto w-fit menu menu-horizontal bg-base-100 rounded-box'>
            <NavList LIST={LIST} />
          </ul>
        </div>
      </nav>
    </>
  )
}
