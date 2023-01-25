import { MAIN_NAV_LIST_DROPDOWN } from '@configs/nav'
import NavList from './list'

export default function Nav() {
  const LOGO = 'MuryP'
  return (
    <>
      <nav className='navbar rounded-box bg-base-300 text-neutral-content m-auto'>
        <a className='btn btn-ghost normal-case text-xl'>{LOGO}</a>
        <div className='max-sm:fixed max-sm:bottom-0 max-sm:right-0
          max-sm:w-screen text-center sm:ml-auto sm:w-fit
          sm:mr-0 z-[99]'>
          <ul className='max-sm:bg-neutral w-fit menu menu-horizontal rounded-box m-auto'>
            <NavList />
            <div className="dropdown max-md:dropdown-top dropdown-end md:dropdown-end">
              <label tabIndex={0} alt='btn open dropdown' className="btn m-1"><svg xmlns="http://www.w3.org/2000/svg" width="1.17em" height="1em" viewBox="0 0 28 24"><path fill="currentColor" d="M2.61 0h22.431a2.61 2.61 0 1 1 0 5.22H2.61a2.61 2.61 0 1 1 0-5.22zm0 9.39h22.431a2.61 2.61 0 1 1 0 5.22H2.61a2.61 2.61 0 1 1 0-5.22zm0 9.391h22.431a2.61 2.61 0 1 1 0 5.22H2.61a2.61 2.61 0 1 1 0-5.22z" /></svg></label>
              <ul className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                {MAIN_NAV_LIST_DROPDOWN.map(({ link, title }, i) => {
                  return (
                    <li key={i}><a href={link} alt={`link menuju ${title}`}>{title}</a></li>
                  )
                })}
              </ul>
            </div>
          </ul>
        </div>
      </nav>
    </>
  )
}
