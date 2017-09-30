import personContext from 'models/person';
import navigationLinkContext from 'models/navigation-link';
export class App {
  constructor() {
    this.personContext = personContext;
    this.navigationLinkContext = navigationLinkContext;
    this.person = {};
    this.navigationLinks = [];
  }
}
