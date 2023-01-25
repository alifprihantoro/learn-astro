import HERO_EL from '@configs/home/HERO_EL'

export default function HeroElement() {
  const { title, paragraph, btn } = HERO_EL
  return (
    <div className="hero min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h2 className="text-5xl font-bold" tabIndex={0} >{title}</h2>
          <p className="py-6" tabIndex={0} >{paragraph}</p>
          <button className="btn btn-primary">
            <a href={btn.link}>{btn.title}</a>
          </button>
        </div>
      </div>
    </div>
  )
}
