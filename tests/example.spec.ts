import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('local app ', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await page.getByText('Hello World')
  
  await expect(page.getByText('hello World' )).toBeVisible();
});

test('local app case sensitive', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await page.getByText('Hello World')
  
  await expect(page.getByText('Hello World', { exact: true })).toBeVisible();
});
