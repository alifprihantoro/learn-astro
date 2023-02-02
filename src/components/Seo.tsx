import type { PROPS_SEO } from '@Mytypes/Seo'
import { TITLE as HOME } from '@configs/home'

export default function Seo({ seo }: PROPS_SEO) {
  const { TITLE, LINK, IMG, DATE_CONTENT, PAGENATION } = seo
  const SITE_TITLE = `${HOME} | ${TITLE}`
  const USERNAME = '@alifprihantoro'
  const DESCRIPTION = TITLE
  const SITE_IMG = ''
  const TWITTER_LINK = `https://twitter.com/${USERNAME}`
  const DATE = ''
  return (
    <>
      <title itemProp='name'>{SITE_TITLE}</title>
      <meta property='og:title' content={SITE_TITLE} />
      <meta name='twitter:title' content={SITE_TITLE} />
      <meta itemProp='name' content={SITE_TITLE} />
      <meta name='application-name' content={SITE_TITLE} />
      <meta property='og:site_name' content={SITE_TITLE} />
      <meta name='description' content={DESCRIPTION} />
      <meta itemProp='description' content={DESCRIPTION} />
      <meta property='og:description' content={DESCRIPTION} />
      <meta name='twitter:description' content={DESCRIPTION} />
      <base href={LINK} />
      <link rel='canonical' href={LINK} itemProp='url' />
      <meta name='url' content={LINK} />
      <meta name='twitter:url' content={LINK} />
      <meta property='og:url' content={LINK} />
      {
        IMG !== undefined ? (
          <>
            <meta name='twitter:card' content={DESCRIPTION} />
            <meta name='twitter:site' content={USERNAME} />
            <meta name='twitter:title' content={TITLE} />
            <meta name='twitter:description' content={`view :${TITLE}`} />
            <meta name='twitter:image' content={IMG} />
          </>
        ) : (
          <>
            <meta itemProp='image' content={SITE_IMG} />
            <meta property='og:image' content={SITE_IMG} />
            <meta name='twitter:image' content={SITE_IMG} />
            <meta name='twitter:image:src' content={SITE_IMG} />
          </>
        )
      }
      <meta property='og:type' content='article' />
      <meta property='article:publisher' content={DATE_CONTENT} />
      <meta property='og:article:published_time' content={DATE_CONTENT} />
      <meta property='article:published_time' content={DATE_CONTENT} />
      <meta property='og:updated_time' content={DATE} />
      <meta name='robots' content='index,follow' />
      <meta name='googlebot' content='index,follow' />
      <meta name='twitter:site' content={TWITTER_LINK} />
      <meta name='twitter:creator' content={TWITTER_LINK} />
      <meta name='keywords' content={`${DESCRIPTION},${TITLE}`} />
      <meta name='imagemode' content='force' />
      <meta name='coverage' content='Worldwide' />
      <meta name='distribution' content='Global' />
      <meta name='HandheldFriendly' content='True' />
      <meta name='msapplication-tap-highlight' content='no' />
      <meta name='apple-mobile-web-app-title' content={HOME} />
      <meta name='apple-mobile-web-app-capable' content='yes' />
      <meta
        name='apple-mobile-web-app-status-bar-style'
        content='black-translucent'
      />
      <meta name='apple-touch-fullscreen' content='yes' />
      {
        PAGENATION !== undefined && (
          <>
            <link rel='first' href={PAGENATION.firts} />
            <link rel='last' href={PAGENATION.last} />
            {PAGENATION.prev !== undefined && (
              <link rel='prev' href={PAGENATION.prev} />
            )}
            {PAGENATION.next !== undefined && (
              <link rel='prev' href={PAGENATION.next} />
            )}
          </>
        )
      }
    </>
  )
}

