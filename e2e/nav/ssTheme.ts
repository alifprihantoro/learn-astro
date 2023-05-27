import type { Page } from '@playwright/test'
import { NAV_BTN } from '../config'

const THEME_BTN = '.nav-slide label span:has-text("'
const SYSTEM_THEME_BTN = `${THEME_BTN}system theme")`
const DARK_THEME_BTN = `${THEME_BTN}dark theme")`
const LIGHT_THEME_BTN = `${THEME_BTN}light theme")`

export default async function ssTheme(page: Page, PATH_THEME_SS: string) {
  await page.click(NAV_BTN)
  // Wait for animation
  await page.waitForSelector(NAV_BTN)
  await page.screenshot({ path: `${PATH_THEME_SS}system.png` })
  await page.click(DARK_THEME_BTN)
  await page.screenshot({ path: `${PATH_THEME_SS}dark-klick.png` })
  await page.click(LIGHT_THEME_BTN)
  await page.screenshot({ path: `${PATH_THEME_SS}light-klick.png` })
  await page.click(SYSTEM_THEME_BTN)
  await page.screenshot({ path: `${PATH_THEME_SS}system-klick.png` })
}
