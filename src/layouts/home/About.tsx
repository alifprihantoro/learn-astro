import { ABOUT_HOME, ROADMAPS_HOME } from '@configs/home/INFO'

export default function AboutHome() {
  return (
    <div className='md:w-[50%] md:p-[5%] mx-5' id='about'>
      <h2 id='About' className='font-bold text-4xl my-5 border-b-2'>{ABOUT_HOME.title}</h2>
      <p>{ABOUT_HOME.body}</p>
      <a href={ABOUT_HOME.btn.link} className='btn'>{ABOUT_HOME.btn.title}</a>
      <h2 id='Roadmaps' className='font-bold text-4xl my-5 border-b-2'>{ROADMAPS_HOME.title}</h2>
      <ul>
        {ROADMAPS_HOME.lists.map((list, i) => {
          return <li key={i}>{list}</li>
        })}
      </ul>
    </div>
  )
}
