import Nav from '@components/nav'
import Footer from '@components/footer'
import { NAV_LIST } from '@configs/notes/nav'

interface props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any
}
export default function ContentNote({ children }: props) {
  return (
    <>
      <Nav LIST={NAV_LIST} />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}
