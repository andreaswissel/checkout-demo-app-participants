import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  it('should mount', () => {
    cy.mount(ButtonComponent, {
      componentProperties: {
        label: 'Test Button',
      },
    });
  });
});
