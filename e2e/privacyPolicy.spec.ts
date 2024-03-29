import { test, expect } from '@playwright/test'
import compareImg from './helper/compare'
import { OUTPUT, URL, VIEWPORTS } from './config'

for (const [name, viewport] of VIEWPORTS) {
  // test for open and close nav
  test.describe(`test for ${name} :`, () => {
    test.use({ viewport, colorScheme: 'dark' })
    test('open and close popup', async ({ page, browserName }) => {
      const PATH_SS = `${`${OUTPUT + browserName}/${name}`}/popup/`
      await page.goto(URL)
      await page.screenshot({ path: `${PATH_SS}default.png` })
      expect(page.getByRole('button', { name: 'okay' })).toBeVisible()
      await page.getByRole('button', { name: 'okay' }).click()
      await page.screenshot({ path: `${PATH_SS}close.png` })
      expect(page.getByRole('button', { name: 'okay' })).not.toBeVisible()
      await page.reload()
      await page.screenshot({ path: `${PATH_SS}reload.png` })
      expect(page.getByRole('button', { name: 'okay' })).not.toBeVisible()
      const compare1 = await compareImg(`${PATH_SS}default.png`, `${PATH_SS}close.png`, `${PATH_SS}compare1.png`)
      expect(compare1).toBeFalsy()
    })
  })
}
