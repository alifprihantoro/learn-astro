import { CONTACS } from '@configs/home/CONTACTS'
import { Icons } from '@configs/Icons'

export default function ContactHome() {
  return (
    <div className='md:w-[50%] md:p-[5%] mx-5' id='contact'>
      <h2 id='contacts' className='font-bold text-4xl my-5 border-b-2' tabIndex={0} >
        contact
      </h2>
      <ul>
        {CONTACS.map(({ link, title, icon }, i) => {
          return (
            <li key={i} >
              <a className='flex' href={link} alt={`link menuju ${title}`}>
                <span className='mx-3'>{Icons[icon]}</span>
                {title}
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
