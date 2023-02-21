import { MAIN_NAV_LIST_DROPDOWN } from '@configs/nav'

export default function Dropdown() {
  return (
    <div className="dropdown max-md:dropdown-top dropdown-end md:dropdown-end">
      <label tabIndex={0} alt='btn open dropdown' className="btn m-1"><svg xmlns="http://www.w3.org/2000/svg" width="1.17em" height="1em" viewBox="0 0 28 24"><path fill="currentColor" d="M2.61 0h22.431a2.61 2.61 0 1 1 0 5.22H2.61a2.61 2.61 0 1 1 0-5.22zm0 9.39h22.431a2.61 2.61 0 1 1 0 5.22H2.61a2.61 2.61 0 1 1 0-5.22zm0 9.391h22.431a2.61 2.61 0 1 1 0 5.22H2.61a2.61 2.61 0 1 1 0-5.22z" /></svg></label>
      <ul className="dropdown-content menu p-2 shadow bg-neutral rounded-box w-52">
        {MAIN_NAV_LIST_DROPDOWN.map(({ link, title }, i) => {
          return (
            <li key={i}><a className='w-full hover:bg-primary' href={link} alt={`link menuju ${title}`}>{title}</a></li>
          )
        })}
      </ul>
    </div>
  )
}
