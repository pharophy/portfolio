import personContext from 'models/person';
import navigationLinkContext from 'models/navigation-link';
import _ from 'lodash';

export class PersonFooter {
  constructor() {
    this.personContext = personContext;
    this.navigationLinkContext = navigationLinkContext;
    this.person = {};
    this.resumeLink = {};
    this.socialLinks = [];
    this.linkedin = {};
  }

  created() {
    this.person = this.personContext.getPerson(0);
    this.navigationLinks = this.navigationLinkContext.getNavigationLinks(this.person.id);
    this.resumeLink = _(this.navigationLinks).find(n => n.type === 'resume');
    const socLinks = _(this.navigationLinks).filter(n => n.type === 'social').value();
    this.socialLinks = socLinks; // _(socLinks).keyBy('subtype');
  }

}
