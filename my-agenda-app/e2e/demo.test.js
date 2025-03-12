import { expect, test } from '@playwright/test';

test('home page has expected h1', async ({ page }) => {
	await page.goto('/');
	await expect(page.locator('h1')).toBeVisible();
});


test('adds an agenda entry and verifies it appears', async ({ page }) => {
	// Arrange
	await page.goto('/');
	await page.fill('.agenda-input', 'My Test Agenda');

	// Act
	await page.click('.add-button');

	// Assert
	const newAgendaItem = page.locator('li.agenda-item', { hasText: 'My Test Agenda' });
	await expect(newAgendaItem).toBeVisible();
});

