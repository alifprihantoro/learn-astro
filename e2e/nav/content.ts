import { Page, expect } from '@playwright/test'

export async function contentNavVisible(page: Page) {
  expect(await page.isVisible('h2:has-text("navigation")')).toBeTruthy()
  expect(await page.isVisible('ul > li:has-text("blog")')).toBeTruthy()
  expect(await page.isVisible('ul > li:has-text("note old")')).toBeTruthy()
  expect(await page.isVisible('ul > li:has-text("note new")')).toBeTruthy()
  expect(await page.isVisible('ul > li:has-text("about")')).toBeTruthy()
  expect(await page.isVisible('ul > li:has-text("privacy policy")')).toBeTruthy()
  expect(await page.isVisible('ul > li:has-text("tech")')).toBeTruthy()
  expect(await page.isVisible('h2:has-text("theme setting")')).toBeTruthy()
  expect(await page.isVisible('label > span:has-text("light theme")')).toBeTruthy()
  expect(await page.isVisible('label > span:has-text("dark theme")')).toBeTruthy()
  expect(await page.isVisible('label > span:has-text("system theme")')).toBeTruthy()
}

export async function contentNavNotVisible(page: Page) {
  expect(await page.isHidden('h2:has-text("navigation")')).toBeTruthy()
  expect(await page.isHidden('ul > li:has-text("blog")')).toBeTruthy()
  expect(await page.isHidden('ul > li:has-text("note old")')).toBeTruthy()
  expect(await page.isHidden('ul > li:has-text("note new")')).toBeTruthy()
  expect(await page.isHidden('ul > li:has-text("about")')).toBeTruthy()
  expect(await page.isHidden('ul > li:has-text("privacy policy")')).toBeTruthy()
  expect(await page.isHidden('ul > li:has-text("tech")')).toBeTruthy()
  expect(await page.isHidden('h2:has-text("theme setting")')).toBeTruthy()
  expect(await page.isHidden('label > span:has-text("light theme")')).toBeTruthy()
  expect(await page.isHidden('label > span:has-text("dark theme")')).toBeTruthy()
  expect(await page.isHidden('label > span:has-text("system theme")')).toBeTruthy()
}
