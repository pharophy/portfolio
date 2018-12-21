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
    this.navModel = {};
  }

  async created() {
    this.person = this.personContext.getPerson(0);
    this.navigationLinks = this.navigationLinkContext.getNavigationLinks(this.person.id);
    //this.skills = _(this.navigationLinks).find(n => n.type === 'skill');
    this.resumeLink = _(this.navigationLinks).find(n => n.type === 'resume');
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
    this.portfolioEntries = _(this.portfolioEntries)
      .filter(e =>
        _(e.types).some(t => t.key === 'blabberjax')
      )
      .take(3)
      .value();
    this.navModel.setTitle(`About ${this.person.firstName} ${this.person.lastName} | ${this.person.companyName}`);
  }

  activate(params, routeConfig) {
    this.navModel = routeConfig.navModel;
  }
}
