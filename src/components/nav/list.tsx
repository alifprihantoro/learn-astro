import { MAIN_NAV_LIST } from '@configs/nav'

export default function NavList() {
  return (
    <>
      {MAIN_NAV_LIST.map(({ link, title, icon }, i) => {
        return (
          <li key={i}>
            <a className='max-md:block' href={link} alt={`link menuju ${title}`}>
              <div className='w-fit m-auto'>
                <span className="iconify" data-icon={icon}></span>
              </div>
              <div>
                {title}
              </div>
            </a>
          </li>
        )
      })}
    </>
  )
}
