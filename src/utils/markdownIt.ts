import hljs from 'highlight.js' // https://highlightjs.org
import mdIt from 'markdown-it'
import type MarkdownIt from 'markdown-it'
import headingName from 'markdown-it-named-headings'
import checkBox from 'markdown-it-checkbox'

export default function render(Content:string) {
  // Actual default values
  const md = mdIt({
    highlight: function(str, lang) {
      if (lang && hljs.getLanguage(lang)) {
        try {
          return `<pre class="hljs"><code>${hljs.highlight(str, { language: lang, ignoreIllegals: true }).value
          }</code></pre>`
        } catch (__) { /* empty */ }
      }

      return `<pre class="hljs"><code>${md.utils.escapeHtml(str)}</code></pre>`
    },
    html: true,
    linkify: true,
    typographer: true,
  })
    .use(headingName) 
    .use(checkBox) as MarkdownIt

  md.renderer.rules.link_open = function(tokens, idx, options, env, slf) {
    const token = tokens[idx]
    const GET_LINK = token.attrs[0][1]
    const CEK_HTTPS_WWW = /(http(|s):(\/\/|)|)(www|)/i.test(GET_LINK)
    const isMyInternalLink = /(muryp.my.id|^\/|^\.\.\/)/i.test(GET_LINK)
    const isExternalLink = CEK_HTTPS_WWW && !isMyInternalLink
    if (isExternalLink) {
      token.attrSet('target', '_blank')
      token.attrSet('rel', 'nofollow')
    }
    return slf.renderToken(tokens, idx, options)
  }
  md.renderer.rules.image = function(tokens, idx, options, env, slf) {
    const token = tokens[idx]
    token.attrs[token.attrIndex('alt')][1] = slf.renderInlineAsText(token.children, options, env)
    token.attrSet('loading', 'lazy')
    return `<figure>
      ${slf.renderToken(tokens, idx, options)}
      <figcaption>${token.attrs[token.attrIndex('alt')][1]}</figcaption>
    </figure>`
  }
  const contentResult = md.render(Content)
  return contentResult
}
