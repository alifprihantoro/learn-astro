export default function commentToggle() {
  let isClick = false
  const ELEMENT_COMMENT = document.getElementById('content-comment')
  document.getElementById('toggle-comment').onclick = () => {
    if (isClick) {
      ELEMENT_COMMENT.classList.toggle('hidden')
    } else {
      isClick = true
      const script = document.createElement('script')
      script.src = 'https://giscus.app/client.js'
      script.setAttribute('data-repo', 'muryp/web-compiled')
      script.setAttribute('data-repo-id', 'R_kgDOJETqTw')
      script.setAttribute('data-category', 'Comment')
      script.setAttribute('data-category-id', 'DIC_kwDOJETqT84CUlu1')
      script.setAttribute('data-mapping', 'url')
      script.setAttribute('data-strict', '1')
      script.setAttribute('data-reactions-enabled', '1')
      script.setAttribute('data-emit-metadata', '1')
      script.setAttribute('data-input-position', 'top')
      script.setAttribute('data-theme', 'dark')
      script.setAttribute('data-lang', 'id')
      script.setAttribute('data-loading', 'lazy')
      script.setAttribute('crossorigin', 'anonymous')
      ELEMENT_COMMENT.appendChild(script)
    }
  }
}
