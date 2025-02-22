import { test, expect } from '@playwright/test';

test.describe('Test Automation Practice Website', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the test automation practice website
    await page.goto('https://testautomationpractice.blogspot.com/');
    // Wait for the page to be fully loaded
    await page.waitForLoadState('networkidle');
  });

  test.describe('Form Interactions', () => {
    test('should fill and submit the form with valid data', async ({ page }) => {
      // Fill in the form fields
      await page.locator('#name').fill('John Doe');
      await page.locator('#email').fill('john.doe@example.com');
      await page.locator('#phone').fill('1234567890');
      await page.locator('#textarea').fill('Test Address\nLine 2\nCity');
      
      // Select gender
      await page.locator('#male').check();
      expect(await page.locator('#male').isChecked()).toBeTruthy();
      
      // Select days
      await page.locator('#monday').check();
      await page.locator('#friday').check();
      expect(await page.locator('#monday').isChecked()).toBeTruthy();
      expect(await page.locator('#friday').isChecked()).toBeTruthy();
      
      // Select country from dropdown
      await page.selectOption('#country', 'Canada');
      expect(await page.locator('#country').inputValue()).toBe('Canada');
      
      // Select colors
      await page.selectOption('#colors', ['red', 'blue']);
      
      // Verify form submission (note: this is a demo site, so we'll just verify the form is filled)
      expect(await page.locator('#name').inputValue()).toBe('John Doe');
    });
  });

  test.describe('Alert Handling', () => {
    test('should handle alert dialog', async ({ page }) => {
      // Handle alert dialog
      page.on('dialog', async dialog => {
        expect(dialog.type()).toBe('alert');
        expect(dialog.message()).toBe('I am an alert box!');
        await dialog.accept();
      });
      
      await page.locator('button:has-text("Alert")').click();
    });

    test('should handle confirm dialog - Accept', async ({ page }) => {
      page.on('dialog', async dialog => {
        expect(dialog.type()).toBe('confirm');
        await dialog.accept();
      });
      
      await page.locator('button:has-text("Confirm Box")').click();
      await expect(page.locator('#demo')).toHaveText('You pressed OK!');
    });

    test('should handle confirm dialog - Dismiss', async ({ page }) => {
      page.on('dialog', async dialog => {
        expect(dialog.type()).toBe('confirm');
        await dialog.dismiss();
      });
      
      await page.locator('button:has-text("Confirm Box")').click();
      await expect(page.locator('#demo')).toHaveText('You pressed Cancel!');
    });
  });

  test.describe('Table Interactions', () => {
    test('should verify table contents and structure', async ({ page }) => {
      // Verify table headers
      const headers = await page.locator('.tsc_table_charts thead th').allTextContents();
      expect(headers).toContain('Rank');
      expect(headers).toContain('Country');
      expect(headers).toContain('Capital');
      
      // Verify specific row data
      const firstRow = await page.locator('.tsc_table_charts tbody tr').first();
      const cells = await firstRow.locator('td').allTextContents();
      expect(cells).toContain('1');
      
      // Count total rows
      const rowCount = await page.locator('.tsc_table_charts tbody tr').count();
      expect(rowCount).toBeGreaterThan(0);
    });
  });

  test.describe('Drag and Drop', () => {
    test('should perform drag and drop operation', async ({ page }) => {
      const sourceElement = page.locator('#draggable');
      const targetElement = page.locator('#droppable');
      
      // Get source element position
      const sourceBox = await sourceElement.boundingBox();
      const targetBox = await targetElement.boundingBox();
      
      if (sourceBox && targetBox) {
        // Perform drag and drop
        await page.mouse.move(sourceBox.x + sourceBox.width / 2, sourceBox.y + sourceBox.height / 2);
        await page.mouse.down();
        await page.mouse.move(targetBox.x + targetBox.width / 2, targetBox.y + targetBox.height / 2);
        await page.mouse.up();
        
        // Verify the drop was successful
        await expect(targetElement).toHaveText('Dropped!');
      }
    });
  });

  test.describe('Date Picker', () => {
    test('should select a date from date picker', async ({ page }) => {
      await page.locator('#datepicker').click();
      
      // Select a specific date (e.g., 15th of current month)
      await page.locator('.ui-datepicker-calendar td:not(.ui-datepicker-other-month) a').nth(14).click();
      
      // Verify date is selected (format will depend on the actual implementation)
      expect(await page.locator('#datepicker').inputValue()).toBeTruthy();
    });
  });

  test.describe('Slider Interaction', () => {
    test('should move slider to specific value', async ({ page }) => {
      const slider = page.locator('#slider span');
      const sliderBox = await slider.boundingBox();
      
      if (sliderBox) {
        // Move to 50% of the slider
        await page.mouse.move(sliderBox.x + sliderBox.width / 2, sliderBox.y + sliderBox.height / 2);
        await page.mouse.down();
        await page.mouse.up();
      }
    });
  });
});