import type { Page } from '@playwright/test'
import { inViewPort, inViewPortList, notInViewPort, notInViewPortList } from '../helper/viewPort'

const NAV_CLASS = '.nav-slide'
const LIST_ITEM = [
  'blog")',
  'note old")',
  'note new")',
  'about")',
  'privacy policy")',
  'tech")',
]
const LIST_THEME = [
  'light theme")',
  'dark theme")',
  'system theme")',
]
/**
* cek is content in navigation is on view port
* @param page Page get from page playwright
*/
export async function contentNavVisible(page: Page) {
  await inViewPort(page, `${NAV_CLASS} h2:has-text("NAVIGATION")`)
  await inViewPortList(page, LIST_ITEM, `${NAV_CLASS} ul > li a:has-text("`)
  await inViewPort(page, `${NAV_CLASS} h2:has-text("theme setting")`)
  await inViewPortList(page, LIST_THEME, `${NAV_CLASS} label > span:has-text("`)
}

/**
* cek is content in navigation is not on view port
* @param page Page get from page playwright
*/
export async function contentNavNotVisible(page: Page) {
  await notInViewPort(page, `${NAV_CLASS} h2:has-text("NAVIGATION")`)
  await notInViewPortList(page, LIST_ITEM, `${NAV_CLASS} ul > li a:has-text("`)
  await notInViewPort(page, `${NAV_CLASS} h2:has-text("theme setting")`)
  await notInViewPortList(page, LIST_THEME, `${NAV_CLASS} label > span:has-text("`)
}
