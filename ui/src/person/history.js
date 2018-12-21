import personContext from 'models/person';
import navigationLinkContext from 'models/navigation-link';
import positionContext from 'models/position';
import _ from 'lodash';

export default class History {
  constructor() {
    this.personContext = personContext;
    this.navigationLinkContext = navigationLinkContext;
    this.positionContext = positionContext;
    this.person = {};
    this.navigationLinks = [];
    this.resumeLink = {};
    this.positions = [];
    this.navModel = {};
  }

  created() {
    this.person = this.personContext.getPerson(0);
    this.navigationLinks = this.navigationLinkContext.getNavigationLinks(this.person.id);
    this.resumeLink = _(this.navigationLinks).find(n => n.type === 'resume');
    this.positions = this.positionContext.getPositions(this.person.id);
    this.navModel.setTitle(`${this.person.firstName} ${this.person.lastName}'s History | ${this.person.companyName}`);
  }

  activate(params, routeConfig) {
    this.navModel = routeConfig.navModel;
  }
}
