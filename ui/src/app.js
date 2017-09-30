import personContext from 'models/person';
import navigationLinkContext from 'models/navigation-link';
export class App {
  constructor() {
    this.personContext = personContext;
    this.navigationLinkContext = navigationLinkContext;
    this.person = {};
    this.navigationLinks = [];
  }

  created() {
    this.person = this.personContext.getPerson(0);
    this.navigationLinks = this.navigationLinkContext.getNavigationLinks(this.person.id);
    //this.skills = _(this.navigationLinks).find(n => n.type === 'skill');
    this.resumeLink = this.navigationLinks[7]; //TODO: when inet access, import lodash and change to _(this.navigationLinks).find(n => n.type === 'attachment');
  }
}
