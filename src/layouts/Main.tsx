import type { seo } from '@Mytypes/Seo'
import Seo from '@layouts/Seo'

interface props {
  SEO: seo
  children: string | number | React.ReactElement | React.ReactElement[] | React.ReactFragment;
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
