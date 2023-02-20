/**
* home
* about
* contact
* toggle btn
* dropdown : specific for post/note/home
*/
const MAIN_NAV_LIST = [
  { title: 'home', link: '/', icon: 'pajamas:home' },
  { title: 'about', link: '#about', icon: 'pajamas:profile' },
  { title: 'contact', link: '#contact', icon: 'mdi:telephone' },
]
const MAIN_NAV_LIST_DROPDOWN = [
  { title: 'blog', link: '/blog' },
  { title: 'note old', link: '/note' },
  { title: 'note new', link: '/notes' },
  { title: 'github', link: '/github' },
]
export { MAIN_NAV_LIST, MAIN_NAV_LIST_DROPDOWN }
