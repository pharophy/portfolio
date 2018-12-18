import personContext from 'models/person';
import navigationLinkContext from 'models/navigation-link';
import skillContext from 'models/skill';
import positionContext from 'models/position';
import portfolioContext from 'models/portfolio-entry';
import _ from 'lodash';

export default class Summary {
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

  async created() {
    this.person = this.personContext.getPerson(0);
    this.navigationLinks = this.navigationLinkContext.getNavigationLinks(this.person.id);
    //this.skills = _(this.navigationLinks).find(n => n.type === 'skill');
    this.resumeLink = _(this.navigationLinks).find(n => n.type === 'resume'); //this.navigationLinks[7]; //TODO: when inet access, import lodash and change to _(this.navigationLinks).find(n => n.type === 'attachment');
    this.menuLinks = _(this.navigationLinks).filter(n => n.type === 'main-nav').value();
    //this.skills = _(this.navigationLinks).filter(n => n.type === 'skill').value();
    this.skills = _.slice(this.skillContext.getSkills(this.person.id), 0, 3); //top 3
    this.skills[0].isFirst = true;

    const socLinks = _(this.navigationLinks).filter(n => n.type === 'social').value();
    this.socialLinks = socLinks; // _(socLinks).keyBy('subtype');
    this.linkedin = _(this.navigationLinks).find(n => n.subtype === 'linkedin');
    this.website = _(this.navigationLinks).find(n => n.subtype === 'website');

    this.positions = this.positionContext.getPositions(this.person.id);
    this.portfolioEntries = await this.portfolioContext.getPortfolioEntries(this.person.id);
    //TODO: need to determine how to handle content sections
    //TODO: set up routing for other pages
  }

  activate(params, routeConfig) {
    /*return this.api.pull<Product>([params.id]).then((items) => {
      let item = items.find((item) => item.id == params.id);
      if (item) {
          routeConfig.navModel.setTitle(item.name);
      }
    }*/
    //routeConfig.navModel.setTitle(`${this.person.firstName} ${this.pereson.lastName}`);
  }
}
