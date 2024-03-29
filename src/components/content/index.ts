import Breadcrumbs from '@components/content/Breadcrumbs'
import Tags from '@components/content/Tags'
import NextPrev from '@components/content/NextPrev'
import HeaderBlog from '@layouts/blog/Header'
import type { Astro } from '@Mytypes/blogProps'
import { html } from '@utils/parser'

export default function ContentMDSlug(props: Astro) {
  const {
    TITLE,
    Content,
    SLUG,
    AUTHOR,
    DATE,
    TAGS,
    NEXT_POST,
    PREV_POST,
  } = props
  const BREADCRUMBS_PROPS = { TITLE, SLUG, TAGS }
  return HeaderBlog({ TITLE, SLUG, AUTHOR, DATE }) +
    Breadcrumbs(BREADCRUMBS_PROPS) +
    // content
    html`<div class='prose m-5 break-words'>${Content.toString()}` +
    Tags({ TAGS }) +
    // comment
    html`
<button class='btn btn-primary w-full' id='toggle-comment'>show comment</button>
<div id='content-comment' class='hidden'></div>
</div>
` +
    NextPrev({ NEXT_POST, PREV_POST })
}
