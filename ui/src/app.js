import personContext from 'models/person';
import navigationLinkContext from 'models/navigation-link';
import skillContext from 'models/skill';
import positionContext from 'models/position';
import portfolioContext from 'models/portfolio-entry';
import _ from 'lodash';

export class App {
  constructor() {
    this.personContext = personContext;
    this.navigationLinkContext = navigationLinkContext;
    this.skillContext = skillContext;
    this.positionContext = positionContext;
    this.portfolioContext = portfolioContext;
    this.person = {};
    this.navigationLinks = [];
    this.resumeLink = {};
    this.menuLinks = [];
    this.skills = [];
    this.socialLinks = [];
    this.linkedin = {};
    this.website = {};
    this.positions = [];
    this.portfolioEntries = [];
  }

  created() {
    this.person = this.personContext.getPerson(0);
    this.navigationLinks = this.navigationLinkContext.getNavigationLinks(this.person.id);
    //this.skills = _(this.navigationLinks).find(n => n.type === 'skill');
    this.resumeLink = _(this.navigationLinks).find(n => n.type === 'resume'); //this.navigationLinks[7]; //TODO: when inet access, import lodash and change to _(this.navigationLinks).find(n => n.type === 'attachment');
    this.menuLinks = _(this.navigationLinks).filter(n => n.type === 'default' || n.type === 'skill').value();
    //this.skills = _(this.navigationLinks).filter(n => n.type === 'skill').value();
    this.skills = this.skillContext.getSkills(this.person.id);
    this.skills[0].isFirst = true;

    const socLinks = _(this.navigationLinks).filter(n => n.type === 'social').value();
    this.socialLinks = socLinks; // _(socLinks).keyBy('subtype');
    this.linkedin = _(this.navigationLinks).find(n => n.subtype === 'linkedin');
    this.website = _(this.navigationLinks).find(n => n.subtype === 'website');

    this.positions = this.positionContext.getPositions(this.person.id);
    this.portfolioEntries = this.portfolioContext.getPortfolioEntries(this.person.id);
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
