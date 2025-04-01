/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />

declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof import('cypress/angular').mount;
    }
  }
}
