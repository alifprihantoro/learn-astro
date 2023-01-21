import Nav from '@components/nav'
import HeroElement from '@components/heroElement'
import Footer from '@components/footer'
import { NAV_LIST } from '@configs/home/nav'

export default function Home() {
  return (
    <>
      <Nav LIST={NAV_LIST} />
      <HeroElement />
      <p>Amet esse facere harum odit eligendi? Soluta aperiam provident quas obcaecati odit reprehenderit. In in exercitationem debitis dolorum explicabo Beatae architecto doloribus minima nisi veritatis Repudiandae laborum nisi fugit repudiandae.</p>
      {/* content */}
      <Footer />
    </>
  )
}
