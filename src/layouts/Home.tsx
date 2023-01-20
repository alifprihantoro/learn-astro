import Wrapper from '@components/Wraper'
import { SEO } from '@configs/home'
import Nav from '@components/nav'
import HeroElement from '@components/heroElement'
import Footer from '@components/footer'
import { NAV_LIST } from '@configs/home/nav'

export default function Home() {
  return (
    <Wrapper SEO={SEO}>
      <Nav LIST={NAV_LIST} />
      <HeroElement />
      {/* content */}
      <Footer />
    </Wrapper>
  )
}
