import { test } from '@playwright/test'
import { URL } from '../config'

export default function start() {
  test.beforeEach(async ({ page }) => {
    await page.goto(URL)
    await page.getByRole('button', { name: 'okay' }).click()
  })
}
