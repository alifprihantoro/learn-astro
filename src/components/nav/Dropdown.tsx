import { MAIN_NAV_LIST_DROPDOWN } from '@configs/nav'
import DarkBtn from './darkBtn'

export default function Dropdown() {
  return (
    <div className='nav-slide max-sm:fixed max-sm:bottom-3
      max-sm:right-3 max-sm:w-screen '>
      <input type='checkbox' id='menu-dropdown' />
      <label htmlFor='menu-dropdown' tabIndex={0} >
        <div></div>
        <div></div>
        <div></div>
      </label>
      <div>
        <h2 tabIndex={0} className='text-4xl border-b-2 text-left'>NAVIGATION</h2>
        <ul className='menu'>
          {MAIN_NAV_LIST_DROPDOWN.map(({ link, title }, i) => {
            return (
              <li key={i}><a className='w-full hover:bg-primary' href={link} alt={`link menuju ${title}`}>{title}</a></li>
            )
          })}
        </ul>
        <h2 tabIndex={0} className='text-xl border-b-2 text-left'>THEME SETTING :</h2>
        <DarkBtn />
      </div>
    </div>
  )
}
