import { MAIN_NAV_LIST_DROPDOWN } from '@configs/nav'
import DarkBtn from './darkBtn'

export default function Dropdown() {
  return (
    <div className='nav-slide'>
      <input type='checkbox' id='menu-dropdown' />
      <label htmlFor='menu-dropdown' tabIndex={0} >
        <div></div>
        <div></div>
        <div></div>
      </label>
      <div >
        <h2 tabIndex={0} className='font-bold text-4xl my-5 border-b-2'>NAVIGATION</h2>
        <ul>
          {MAIN_NAV_LIST_DROPDOWN.map(({ link, title }, i) => {
            return (
              <li key={i}><a className='w-full hover:bg-primary' href={link} alt={`link menuju ${title}`}>{title}</a></li>
            )
          })}
        </ul>
        <DarkBtn />
      </div>
    </div>
  )
}
