import { test, expect } from '@playwright/test'
import compareImg from './helper/compare'
import { contentNavNotVisible, contentNavVisible } from './nav/content'
import { OUTPUT, VIEWPORTS, NAV_BTN } from './config'
import ssTheme from './nav/ssTheme'
import start from './helper/start'

const THEME: ['dark', 'light'] = ['dark', 'light']
start()

for (const [name, viewport] of VIEWPORTS) {
  // test for open and close nav
  test.describe(`test for nav ${name} :`, () => {
    test.use({ viewport })
    test.describe('toggle nav', () => {
      test.use({ colorScheme: 'light' })
      test('open and close menu', async ({ page, browserName }) => {
        const PATH_SS = `${`${OUTPUT + browserName}/${name}`}/navigation/`
        await contentNavNotVisible(page)
        await page.click(NAV_BTN)
        // Wait for animation
        await page.waitForSelector(NAV_BTN)
        await page.screenshot({ path: `${PATH_SS}open.png` })
        await contentNavVisible(page)
        // Klik to close
        await page.click(NAV_BTN)
        // Wait for animation
        await page.waitForSelector(NAV_BTN)
        // Cek cek is dropdown closed
        await page.screenshot({ path: `${PATH_SS}close.png` })
        const compare1 = await compareImg(`${PATH_SS}open.png`, `${PATH_SS}close.png`, `${PATH_SS}compare1.png`)
        // image open and close must be different
        expect(compare1).toBeFalsy()
        await contentNavNotVisible(page)
      })
    })
    // cek theme change
    for (const THEME_NAME of THEME) {
      test.describe(`default ${THEME_NAME}:`, () => {
        test.use({ colorScheme: THEME_NAME })
        test('cek theme mode', async ({ page, browserName }) => {
          const PATH_THEME_SS = `${`${OUTPUT + browserName}/${name}`}/theme/${THEME_NAME}/`
          await ssTheme(page, PATH_THEME_SS)
        })
      })
    }
  })
}
