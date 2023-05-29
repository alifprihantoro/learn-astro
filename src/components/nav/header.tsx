import { DESCRIPTION } from '@configs/home'

export default function HeaderNav() {
  const LOGO = 'MuryP'
  return (
    <header>
      <h1>
        <a className='btn btn-ghost normal-case text-xl' href='/' alt={DESCRIPTION}>
          {LOGO}
        </a>
      </h1>
    </header>
  )
}
