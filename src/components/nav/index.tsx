import Dropdown from './Dropdown'
import HeaderNav from './header'
import NavList from './list'

export default function Nav() {
  return (
    <div className='w-full sticky right-0 top-0 z-50'>
      <nav className='navbar rounded-box bg-base-300 text-neutral-content m-auto w-full md:w-[900px]'>
        <HeaderNav />
        <label id="chk1-label">Remember my preferences</label>
        <div className='max-sm:fixed max-sm:bottom-0 max-sm:right-0
          max-sm:w-screen text-center sm:ml-auto sm:w-fit
          sm:mr-0 z-[99]'>
          <ul className='max-sm:bg-neutral w-fit menu menu-horizontal rounded-box m-auto'>
            <NavList />
            <Dropdown />
          </ul>
        </div>
      </nav>
    </div>
  )
}
