import { test, expect } from '@playwright/test'
import compareImg from './helper/compare'
import { OUTPUT, VIEWPORTS, NAV_BTN } from './config'
import start from './helper/start'

start()
for (const [name, viewport] of VIEWPORTS) {
  // test for open and close nav
  test.describe(`test for ${name} :`, () => {
    test.use({ viewport, colorScheme: 'light' })
    test('comment open close', async ({ page, browserName }) => {
      const PATH_SS = `${`${OUTPUT + browserName}/${name}`}/comment/`
      await page.click(NAV_BTN)
      await page.getByRole('link', { name: 'blog' }).click()
      await page.waitForSelector('div.content')
      await page.click('div.content')
      await page.waitForSelector('button:has-text("show comment")')
      await page.getByRole('button', { name: 'show comment' }).click()
      await expect(page.frameLocator('iframe[title="Comments"]').locator('.gsc-comment-box-bottom')).toBeVisible()
      await page.frameLocator('iframe[title="Comments"]').locator('.gsc-comment-box-bottom').click()
      await page.screenshot({ path: `${PATH_SS}1-open-comment.png` })
      await page.getByRole('button', { name: 'show comment' }).click()
      await page.screenshot({ path: `${PATH_SS}2-close-comment.png` })
      await expect(page.frameLocator('iframe[title="Comments"]').locator('.gsc-comment-box-bottom')).not.toBeVisible()
      const compare = await compareImg(`${PATH_SS}1-open-comment.png`, `${PATH_SS}2-close-comment.png`, `${PATH_SS}compare-close-open.png`)
      expect(compare).toBeFalsy()
    })
  })
}
