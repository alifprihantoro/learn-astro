import NavList from './list'

export default function Nav() {
  const LOGO = 'MuryP'
  return (
    <>
      <nav className='navbar rounded-box bg-base-300 text-neutral-content m-auto'>
        <a className='btn btn-ghost normal-case text-xl'>{LOGO}</a>
        <div className='max-sm:fixed max-sm:bottom-0 max-sm:right-0
          max-sm:w-screen text-center sm:ml-auto sm:w-fit
          sm:mr-0'>
          <ul className='max-sm:bg-neutral w-fit menu menu-horizontal rounded-box m-auto'>
            <NavList/>
          </ul>
        </div>
        <ul className='max-sm:ml-auto max-sm:mr-0 w-fit'>
          <li><button className="btn btn-primary">Button</button></li>
        </ul>
      </nav>
    </>
  )
}
