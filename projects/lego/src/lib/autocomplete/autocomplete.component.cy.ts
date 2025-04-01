import {
  NoopAnimationsModule,
  provideAnimations,
} from '@angular/platform-browser/animations';
import { AutocompleteComponent } from './autocomplete.component';
import { EventEmitter } from '@angular/core';
import '@testing-library/cypress/add-commands';

const options = ['Steak sandwhich', 'BBQ ribs', 'Hamburger', 'French fries'];

// Extend Cypress namespace
declare global {
  namespace Cypress {
    interface Chainable {
      findByRole(role: string, options?: any): Chainable<JQuery<HTMLElement>>;
    }
  }
}

describe('AutocompleteComponent', () => {
  const selectedOption = `Steak sandwhich`;
  const bbqRibsRegEx = /BBQ ribs/i;

  // TODO: Type "steak sa", select option, check that setOption has been called with the right value
  // TODO: Delete text, type "bbq", select option, check that setOption has been called with the right value

  beforeEach(() => {
    cy.mount(AutocompleteComponent, {
      imports: [NoopAnimationsModule],
      componentProperties: {
        label: 'Autocomplete',
        placeholder: 'Enter favorite food',
        options,
        onOptionSet: new EventEmitter<string>(),
      },
    }).then((mountedComponent) => {
      cy.spy(mountedComponent.component.onOptionSet, 'emit').as('setOptionSpy');
    });
  });

  it('should call setOption with the selected option value after the option is selected', () => {
    cy.get('input').type('steak sa');
    cy.findByRole('option', { name: selectedOption }).should('exist');
    cy.findByRole('option', { name: selectedOption }).click();

    cy.get('@setOptionSpy').should('have.been.calledWith', selectedOption);
  });

  it('should delete the text and check if bbq is also an option', () => {
    cy.get('input').clear();
    cy.get('input').type('bbq');

    cy.findByRole('option', { name: bbqRibsRegEx }).should('exist');
    cy.findByRole('option', { name: bbqRibsRegEx }).click();

    cy.get('@setOptionSpy').should('have.been.calledWith', 'BBQ ribs');
  });
});
