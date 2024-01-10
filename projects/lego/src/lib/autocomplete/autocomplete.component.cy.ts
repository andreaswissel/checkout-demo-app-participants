import {
  NoopAnimationsModule,
  provideAnimations,
} from '@angular/platform-browser/animations';
import { AutocompleteComponent } from './autocomplete.component';
import { Default } from './autocomplete.stories';

describe('AutocompleteComponent', () => {
  const selectedOption = `Steak sandwhich`;
  const bbqRibsRegEx = /BBQ ribs/i;

  // TODO: Type in "steak sand", select option, check that setOption has been called with the right value
  // TODO: Clear text, type "bbq", select option, use regex to check setOption has been called with the right value
});
