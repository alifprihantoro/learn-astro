import { Page, expect } from '@playwright/test'

/**
* cek is user screen contain element
* @param page Page get from page playwright
* @param locator element selector
*/
const inViewPort = async (page: Page, locator: string, description: string) => await expect(page.locator(locator), description).toBeInViewport()
/**
* cek is user screen contain element list
* @param page Page get from page playwright
* @param data list element locator
* @param parent first string element locator
* @example
* ```javascript
* const LIST_ITEM = [
*   'blog")',
*   'note old")',
*   ...
* ]
* inViewPortList(page, LIST_ITEM, `${NAV_CLASS} ul > li a:has-text("`)
* ```
*/
const inViewPortList = async (page: Page, data: string[], parent: string, description: string) => {
  data.forEach(async (e, i) => await inViewPort(page, parent + e, description + i))
}
/**
* cek is not in user screen contain element
* @param page Page get from page playwright
* @param locator element selector
*/
const notInViewPort = async (page: Page, locator: string, description: string) => await expect(page.locator(locator), description).not.toBeInViewport()
/**
* cek is not in user screen contain element list
* @param page Page get from page playwright
* @param data list element locator
* @param parent first string element locator
* @example
* ```javascript
* const LIST_ITEM = [
*   'blog")',
*   'note old")',
*   ...
* ]
* inViewPortList(page, LIST_ITEM, `${NAV_CLASS} ul > li a:has-text("`)
* ```
*/
const notInViewPortList = async (page: Page, data: string[], parent: string, description: string) => {
  data.forEach(async (e, i) => await notInViewPort(page, parent + e, description + i))
}
export { inViewPort, inViewPortList, notInViewPort, notInViewPortList }
