import Nav from '@components/nav'
import HeroElement from '@components/heroElement'
import Footer from '@components/footer'
import { NAV_LIST } from '@configs/home/nav'
import ListCardImg from '@components/ListCardImg'
import type { content } from '@Mytypes/listImg'

export default function Home() {
  const LIST = [
    {
      title: 'judul 1',
      img: '/img',
      body: 'Elit odio voluptatibus quae rem ad. Harum aspernatur quo enim quibusdam alias Doloribus ad nam ad minima voluptatibus Cupiditate dolorum esse nostrum fugiat a! Nam aspernatur temporibus saepe sit beatae',
      link: '#',
    },
    {
      title: 'judul 1',
      img: '/img',
      body: 'Elit odio voluptatibus quae rem ad. Harum aspernatur quo enim quibusdam alias Doloribus ad nam ad minima voluptatibus Cupiditate dolorum esse nostrum fugiat a! Nam aspernatur temporibus saepe sit beatae',
      link: '#',
    },
    {
      title: 'judul 1',
      img: '/img',
      body: 'Elit odio voluptatibus quae rem ad. Harum aspernatur quo enim quibusdam alias Doloribus ad nam ad minima voluptatibus Cupiditate dolorum esse nostrum fugiat a! Nam aspernatur temporibus saepe sit beatae',
      link: '#',
    },
  ] as content[]
  return (
    <>
      <Nav LIST={NAV_LIST} />
      <HeroElement />
      <div className="">
        <h2>Project</h2>
        <ListCardImg content={LIST} />
      </div>
      {/* content */}
      <Footer />
    </>
  )
}
