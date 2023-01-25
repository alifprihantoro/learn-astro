import { CONTACS, ICONS_CONTACS } from '@configs/home/CONTACTS'

export default function ContactHome() {
  return (
    <div className='md:w-[50%] md:p-[5%] mx-5' id='contact'>
      <h2 id='contacts' className='font-bold text-4xl my-5 border-b-2'>contact</h2>
      <ul>
        {CONTACS.map(({ link, title }, i) => {
          return (
            <li key={i} >
              <a className='flex' href={link}>
                <span className='mx-3'>{ICONS_CONTACS[i]}</span>
                {title}
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
