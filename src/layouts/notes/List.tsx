import Wrapper from '@components/Wraper'
import Nav from '@components/nav'
import Footer from '@components/footer'
import { NAV_LIST } from '@configs/notes/nav'

interface props {
  title: string,
  Content: preact.JSX.Element
}
export default function ContentNote({ title, Content }: props) {
  const SEO = {
    TITLE: title,
    LINK: '',
    IMG: '',
    DESCRIPTION: '',
  }
  return (
    <Wrapper SEO={SEO}>
      <Nav LIST={NAV_LIST} />
      {Content}
      <Footer />
    </Wrapper>
  )
}
