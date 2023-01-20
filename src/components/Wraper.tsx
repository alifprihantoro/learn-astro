import type { seo } from '@Mytypes/Seo'
import Seo from '@components/Seo'

interface props {
  SEO: seo
  children: preact.JSX.Element[]
}
export default function Main(props: props) {
  const { SEO, children } = props
  return (
    <html lang='en'>
      <head>
        <Seo seo={SEO} />
      </head>
      <body>
        {children}
        {/* script */}
      </body>
    </html>
  )
}
