import {
  StoryObj,
  applicationConfig,
  moduleMetadata,
} from '@storybook/angular';
import { AutocompleteComponent } from './autocomplete.component';
import { userEvent, within, screen } from '@storybook/testing-library';
import { provideAnimations } from '@angular/platform-browser/animations';

const options = ['Steak sandwhich', 'BBQ ribs', 'Hamburger', 'French fries'];

export default {
  title: 'Components/Forms/Autocomplete',
  component: AutocompleteComponent,
  decorators: [
    applicationConfig({
      providers: [provideAnimations()],
    }),
  ],
};

export const Default: StoryObj<AutocompleteComponent> = {
  args: {
    label: 'Autocomplete',
    placeholder: 'Enter favorite food',
    options,
  },
};

export const WithAutomatedTest: StoryObj<AutocompleteComponent> = {
  args: {
    ...Default.args,
  },
};
