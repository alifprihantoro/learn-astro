/**
* home
* about
* contact
* toggle btn
* dropdown : specific for post/note/home
*/
const MAIN_NAV_LIST = [
  { title: 'home', link: '/#', icon: 'material-symbols:home'},
  { title: 'about', link: '/#about', icon: 'mdi:user' },
  { title: 'contact', link: '/#contact', icon: 'mdi:telephone' },
]
const MAIN_NAV_LIST_DROPDOWN = [
  { title: 'blog', link: '/blog' },
  { title: 'note old', link: '/note' },
  { title: 'note new', link: '/notes' },
  { title: 'about', link: '/pages/about' },
  { title: 'Privacy Policy', link: '/pages/privacy-policy' },
  { title: 'Tech', link: '/pages/technology' },
]
export { MAIN_NAV_LIST, MAIN_NAV_LIST_DROPDOWN }
