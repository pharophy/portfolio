import personContext from 'models/person';
import navigationLinkContext from 'models/navigation-link';
import skillContext from 'models/skill';
import _ from 'lodash';
//import $ from 'jquery';

export class PersonHeader {
  constructor() {
    this.personContext = personContext;
    this.navigationLinkContext = navigationLinkContext;
    this.skillContext = skillContext;
    this.person = {};
    this.navigationLinks = [];
    this.resumeLink = {};
    this.menuLinks = [];
    this.skills = [];
    this.linkedin = {};
    //window.$ = window.jQuery = $;
  }

  created() {
    this.person = this.personContext.getPerson(0);
    this.navigationLinks = this.navigationLinkContext.getNavigationLinks(this.person.id);
    this.resumeLink = _(this.navigationLinks).find(n => n.type === 'resume'); //this.navigationLinks[7]; //TODO: when inet access, import lodash and change to _(this.navigationLinks).find(n => n.type === 'attachment');
    this.menuLinks = _(this.navigationLinks).filter(n => n.type === 'main-nav').value();
    this.skills = _.slice(this.skillContext.getSkills(this.person.id), 0, 3); //top 3
    this.skills[0].isFirst = true;
    this.linkedin = _(this.navigationLinks).find(n => n.subtype === 'linkedin');
  }

}
