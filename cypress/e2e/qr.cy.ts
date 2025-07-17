describe('QR Code Tests', () => {
  it('should create a QR code', () => {
    // Visit the toolbox page
    cy.visit('http://localhost:5173/toolbox')

    // Navigate to the Generators category
    cy.get('[data-cy="category-generators-link"]').click()

    // Open the QR Code Generator tool
    cy.get('[data-cy="tool-card-qr-code"]').click()

    // Enter the URL to generate the QR for
    cy.get('[data-cy="qr-input-url"]').type('https://example.com')

    // Click the generate QR code button
    cy.get('[data-cy="generate-qr-button"]').click()

    // Assert that the QR code image is displayed and visible
    cy.get('[data-cy="qr-code-image"]').should('exist').and('be.visible')
  })
})
