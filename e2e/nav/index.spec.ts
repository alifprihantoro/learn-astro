import { test, expect } from '@playwright/test'
import compareImg from '../helper/compare'
import { contentNavNotVisible, contentNavVisible } from './content'
import { OUTPUT } from '../config'

const NAV_BTN = '.nav-slide > label'
const PATH_SS = `${OUTPUT}navigation/`
// TODO:
// name ss by browser and widthxhight
test('open close menu', async ({ page }) => {
  await page.goto('http://localhost:3000')
  await page.screenshot({ path: `${PATH_SS}first.png` })
  await contentNavNotVisible(page)
  await page.click(NAV_BTN)
  await page.screenshot({ path: `${PATH_SS}open.png` })
  await contentNavVisible(page)
  // Klik lagi untuk menutup dropdown
  await page.click(NAV_BTN)
  // Wait for 2 seconds
  // await page.waitForTimeout(2000)
  await page.waitForSelector(NAV_BTN)
  // Cek cek is dropdown closed
  await page.screenshot({ path: `${PATH_SS}close.png` })
  const compare1 = await compareImg(`${PATH_SS}open.png`, `${PATH_SS}close.png`, `${PATH_SS}compare1.png`)
  // image open and close must be different
  expect(compare1).toBeFalsy()
  await expect(page.locator( '.nav-slide ul > li a:has-text("blog")')).not.toBeInViewport()
  await contentNavNotVisible(page)
})
