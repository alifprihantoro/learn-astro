import Wrapper from '@components/Wraper'
import Nav from '@components/nav'
import Footer from '@components/footer'
import { NAV_LIST } from '@configs/notes/nav'

interface props {
  title: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any
}
export default function ContentNote({ title, children }: props) {
  const SEO = {
    TITLE: title,
    LINK: '',
    IMG: '',
    DESCRIPTION: '',
  }
  return (
    <Wrapper SEO={SEO}>
      <Nav LIST={NAV_LIST} />
      <main>
        {children}
      </main>
      <Footer />
    </Wrapper>
  )
}
