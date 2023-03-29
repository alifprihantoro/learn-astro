import Dropdown from './Dropdown'
import HeaderNav from './header'
import NavList from './list'

export default function Nav() {
  return (
    <div className='w-full sticky right-0 top-0 z-50'>
      <nav className='navbar rounded-box bg-base-300 text-neutral-content m-auto w-full md:w-[900px]'>
        <HeaderNav />
        <div className='text-center ml-auto w-fit mr-0'>
          <ul className='w-fit menu menu-horizontal m-auto'>
            <NavList />
          </ul>
        </div>
        <Dropdown />
      </nav>
    </div>
  )
}
