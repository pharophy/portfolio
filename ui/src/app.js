import personContext from 'models/person';
import navigationLinkContext from 'models/navigation-link';
import _ from 'lodash';

export class App {
  constructor() {
    this.personContext = personContext;
    this.navigationLinkContext = navigationLinkContext;
    this.person = {};
    this.navigationLinks = [];
    this.resumeLink = {};
    this.menuLinks = [];
    this.skills = [];
    this.linkedin = {};
  }

  created() {
    this.person = this.personContext.getPerson(0);
    this.navigationLinks = this.navigationLinkContext.getNavigationLinks(this.person.id);
    //this.skills = _(this.navigationLinks).find(n => n.type === 'skill');
    this.resumeLink = _(this.navigationLinks).find(n => n.type === 'resume'); //this.navigationLinks[7]; //TODO: when inet access, import lodash and change to _(this.navigationLinks).find(n => n.type === 'attachment');
    this.menuLinks = _(this.navigationLinks).filter(n => n.type === 'default' || n.type === 'skill').value();
    this.skills = _(this.navigationLinks).filter(n => n.type === 'skill').value();
    this.skills[0].isFirst = true;
    this.linkedin = _(this.navigationLinks).find(n => n.type === 'linkedin');
    //TODO: need to determine how to handle content sections
    //TODO: set up routing for other pages
  }

  configureRouter(config, router) {
    config.title = 'Resume';
    config.map([
      { route: 'page/:path',              moduleId: 'components/page',   title: 'About'}//,
      //{ route: 'contacts/:id',  moduleId: 'contact-detail', name:'contacts' }
    ]);

    this.router = router;
  }
}
