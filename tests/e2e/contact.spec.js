import { test, expect } from '@playwright/test'

test.describe('Contact Form', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('should open contact modal from hero button', async ({ page }) => {
    // Click the "Nous rejoindre" button in the hero section
    await page.click('text=Nous rejoindre')
    
    // Check that the modal is visible
    await expect(page.locator('.modal-overlay')).toBeVisible()
    await expect(page.locator('.modal-title')).toContainText('Nous contacter')
  })

  test('should validate required fields', async ({ page }) => {
    // Open the contact modal
    await page.click('text=Nous rejoindre')
    
    // Try to submit without filling any fields
    await page.click('button[type="submit"]')
    
    // Check that error messages appear
    await expect(page.locator('.error-message')).toBeVisible()
    await expect(page.locator('input.error')).toBeVisible()
  })

  test('should validate email format', async ({ page }) => {
    // Open the contact modal
    await page.click('text=Nous rejoindre')
    
    // Fill form with invalid email
    await page.fill('#name', 'John Doe')
    await page.fill('#email', 'invalid-email')
    await page.selectOption('#subject', 'inscription')
    await page.fill('#message', 'Test message')
    
    // Submit form
    await page.click('button[type="submit"]')
    
    // Check email validation error
    await expect(page.locator('.error-message')).toContainText('email n\'est pas valide')
  })

  test('should validate phone format', async ({ page }) => {
    // Open the contact modal
    await page.click('text=Nous rejoindre')
    
    // Fill form with invalid phone
    await page.fill('#name', 'John Doe')
    await page.fill('#email', 'john@example.com')
    await page.fill('#phone', 'invalid-phone')
    await page.selectOption('#subject', 'inscription')
    await page.fill('#message', 'Test message')
    
    // Submit form
    await page.click('button[type="submit"]')
    
    // Check phone validation error
    await expect(page.locator('.error-message')).toContainText('téléphone n\'est pas valide')
  })

  test('should submit form successfully with mocked API', async ({ page }) => {
    // Mock the API call
    await page.route('**/api/contact', async route => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ success: true, message: 'Message sent successfully' })
      })
    })

    // Open the contact modal
    await page.click('text=Nous rejoindre')
    
    // Fill form with valid data
    await page.fill('#name', 'John Doe')
    await page.fill('#email', 'john@example.com')
    await page.fill('#phone', '06 12 34 56 78')
    await page.selectOption('#subject', 'inscription')
    await page.fill('#message', 'Je souhaite rejoindre le club CPBO')
    
    // Submit form
    await page.click('button[type="submit"]')
    
    // Check that the form shows loading state
    await expect(page.locator('button[type="submit"]')).toContainText('Envoi en cours')
    
    // Wait for success message
    await expect(page.locator('.submit-message.success')).toBeVisible()
    await expect(page.locator('.submit-message.success')).toContainText('envoyé avec succès')
  })

  test('should handle API error gracefully', async ({ page }) => {
    // Mock the API call to return an error
    await page.route('**/api/contact', async route => {
      await route.fulfill({
        status: 500,
        contentType: 'application/json',
        body: JSON.stringify({ error: 'Internal server error' })
      })
    })

    // Open the contact modal
    await page.click('text=Nous rejoindre')
    
    // Fill form with valid data
    await page.fill('#name', 'John Doe')
    await page.fill('#email', 'john@example.com')
    await page.selectOption('#subject', 'inscription')
    await page.fill('#message', 'Test message')
    
    // Submit form
    await page.click('button[type="submit"]')
    
    // Wait for error message
    await expect(page.locator('.submit-message.error')).toBeVisible()
    await expect(page.locator('.submit-message.error')).toContainText('erreur')
  })

  test('should close modal when clicking cancel', async ({ page }) => {
    // Open the contact modal
    await page.click('text=Nous rejoindre')
    
    // Check that modal is visible
    await expect(page.locator('.modal-overlay')).toBeVisible()
    
    // Click cancel button
    await page.click('text=Annuler')
    
    // Check that modal is closed
    await expect(page.locator('.modal-overlay')).not.toBeVisible()
  })

  test('should close modal when clicking overlay', async ({ page }) => {
    // Open the contact modal
    await page.click('text=Nous rejoindre')
    
    // Check that modal is visible
    await expect(page.locator('.modal-overlay')).toBeVisible()
    
    // Click on the overlay (not on the modal content)
    await page.locator('.modal-overlay').click({ position: { x: 10, y: 10 } })
    
    // Check that modal is closed
    await expect(page.locator('.modal-overlay')).not.toBeVisible()
  })

  test('should close modal after successful submission', async ({ page }) => {
    // Mock the API call
    await page.route('**/api/contact', async route => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ success: true })
      })
    })

    // Open the contact modal
    await page.click('text=Nous rejoindre')
    
    // Fill and submit form
    await page.fill('#name', 'John Doe')
    await page.fill('#email', 'john@example.com')
    await page.selectOption('#subject', 'inscription')
    await page.fill('#message', 'Test message')
    await page.click('button[type="submit"]')
    
    // Wait for success message
    await expect(page.locator('.submit-message.success')).toBeVisible()
    
    // Wait for modal to close automatically
    await expect(page.locator('.modal-overlay')).not.toBeVisible({ timeout: 5000 })
  })

  test('should reset form after successful submission', async ({ page }) => {
    // Mock the API call
    await page.route('**/api/contact', async route => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ success: true })
      })
    })

    // Open the contact modal
    await page.click('text=Nous rejoindre')
    
    // Fill form
    await page.fill('#name', 'John Doe')
    await page.fill('#email', 'john@example.com')
    await page.selectOption('#subject', 'inscription')
    await page.fill('#message', 'Test message')
    
    // Submit form
    await page.click('button[type="submit"]')
    
    // Wait for success message
    await expect(page.locator('.submit-message.success')).toBeVisible()
    
    // Reopen modal to check if form is reset
    await page.click('text=Nous rejoindre')
    
    // Check that form fields are empty
    await expect(page.locator('#name')).toHaveValue('')
    await expect(page.locator('#email')).toHaveValue('')
    await expect(page.locator('#message')).toHaveValue('')
  })
})
