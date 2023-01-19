import { IMG_URL, DESCRIPTION } from '@configs/home'

export default function HeaderNav() {
  return (
    <header>
      <img src={IMG_URL} alt={DESCRIPTION} />
    </header>
  )
}
