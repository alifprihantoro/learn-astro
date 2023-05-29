/**
* @todo
* cek link 200
* cek link 404
* forward and backward
* reload page
*/
import { test, expect } from '@playwright/test'
import { NAV_BTN, OUTPUT, VIEWPORTS } from './config'
import start from './helper/start'

start()
for (const [name, viewport] of VIEWPORTS) {
  // test for open and close nav
  test.describe(`ceck link on ${name} :`, () => {
    test.use({ viewport, colorScheme: 'light' })
    test(`with status 200 ${name} :`, async ({ page, browserName }) => {
      const PATH_SS = `${`${OUTPUT + browserName}/${name}`}/router/200/`
      await page.click(NAV_BTN)
      await page.getByRole('link', { name: 'blog' }).click()
      await page.waitForSelector('div.content')
      await page.screenshot({ path: `${PATH_SS}1-open-blog.png` })
      await page.click('div.content')
      await page.waitForSelector('button:has-text("show comment")')
      await page.screenshot({ path: `${PATH_SS}2-open-article.png` })
      await page.goBack()
      await page.waitForSelector('div.content')
      await page.screenshot({ path: `${PATH_SS}3-backward.png` })
      await page.goForward()
      await page.waitForSelector('button:has-text("show comment")')
      await page.screenshot({ path: `${PATH_SS}4-forward.png` })
      await page.getByRole('list').filter({ hasText: 'homeaboutcontact' }).getByRole('link', { name: 'home' }).click()
      await expect(page.getByRole('heading', { name: 'Muryp Beta' })).toBeInViewport()
      await page.screenshot({ path: `${PATH_SS}5-go-home.png` })
      await page.getByRole('list').filter({ hasText: 'homeaboutcontact' }).getByRole('link', { name: 'about' }).click()
      await page.waitForSelector('#about')
      await expect(page.locator('#about')).toBeInViewport()
      await page.screenshot({ path: `${PATH_SS}6-go-about-home.png` })
      await page.getByRole('list').filter({ hasText: 'homeaboutcontact' }).getByRole('link', { name: 'contact' }).click()
      await page.waitForSelector('#contacts')
      await expect(page.locator('#contacts')).toBeInViewport()
      await page.screenshot({ path: `${PATH_SS}7-go-contact-home.png` })
    })
  })
}
