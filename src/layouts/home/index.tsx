import Nav from '@components/nav'
import HeroElement from '@components/heroElement'
import Footer from '@components/footer'
import ListCardImg from '@components/ListCardImg'
import project from '@Mytypes/project'

export default function Home() {
  return (
    <>
      <Nav />
      <HeroElement />
      <div className="">
        <h2 className='font-bold text-4xl mx-5 my-5 border-b-2'>Project</h2>
        <ListCardImg content={project} />
      </div>
      {/* contact | about */}
      <Footer />
    </>
  )
}
