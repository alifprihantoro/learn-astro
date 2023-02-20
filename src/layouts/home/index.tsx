import HeroElement from '@components/heroElement'
import ContactHome from './Contact'
import AboutHome from './About'
import type { JsxChild } from 'typescript'
type props = {
  children: JsxChild
}
export default function Home({ children }: props) {
  return (
    <>
      <HeroElement />
      <div className="md:flex">
        <AboutHome />
        <ContactHome />
      </div>
      <main>
        <div id='content' className="">
          <h2 className='font-bold text-4xl mx-5 my-5 border-b-2'>Project</h2>
          {children}
        </div>
      </main>
    </>
  )
}
