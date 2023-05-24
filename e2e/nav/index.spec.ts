import { test, expect } from '@playwright/test'
import compareImg from '../helper/compare'
import { contentNavNotVisible, contentNavVisible } from './content'
import { OUTPUT } from '../config'

const NAV_BTN = '.nav-slide > label'
const PATH_SS = `${OUTPUT}navigation/`
// TODO:
// name ss by browser and widthxhight
test('open menu', async ({ page }) => {
  await page.goto('http://localhost:3000')
  await page.screenshot({ path: `${PATH_SS}first.png` })
  contentNavNotVisible(page)
  await page.click(NAV_BTN)
  await page.screenshot({ path: `${PATH_SS}open.png` })
  contentNavVisible(page)
  // Klik lagi untuk menutup dropdown
  await page.click(NAV_BTN)
  // Wait for 2 seconds
  await page.waitForTimeout(2000)
  // Cek cek is dropdown closed
  await page.screenshot({ path: `${PATH_SS}close.png` })
  const compare1 = await compareImg('screenshot2.png', 'screenshot3.png', 'compare1.png')
  expect(compare1 > 0).toBeTruthy()
  contentNavNotVisible(page)
})
