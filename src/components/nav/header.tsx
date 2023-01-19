import { NAV_HEADER } from '@configs/home/nav'

export default function HeaderNav() {
  const { IMG_URL, DESCRIPTION } = NAV_HEADER

  return (
    <header>
      <img src={IMG_URL} alt={DESCRIPTION} />
    </header>
  )
}
