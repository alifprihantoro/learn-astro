export default function commentToggle() {
  document.getElementById('toggle-comment').onclick = () => {
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
    document.getElementById('content-comment').appendChild(script)
  }
}
