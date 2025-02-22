import { test, expect } from '@playwright/test';

test.describe('App Component', () => {
  test('should render welcome message', async ({ page }) => {
    await page.goto('/');
    
    // Check if the welcome message is visible
    const welcomeMessage = page.getByText('Start prompting (or editing) to see magic happen :)');
    await expect(welcomeMessage).toBeVisible();
  });

  test('should have correct background color', async ({ page }) => {
    await page.goto('/');
    
    // Check if the main container has the correct Tailwind classes
    const container = page.locator('div').filter({ hasText: 'Start prompting' });
    await expect(container).toHaveClass(/min-h-screen bg-gray-100 flex items-center justify-center/);
  });
});