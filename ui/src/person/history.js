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
  }

  created() {
    this.person = this.personContext.getPerson(0);
    this.navigationLinks = this.navigationLinkContext.getNavigationLinks(this.person.id);
    this.resumeLink = _(this.navigationLinks).find(n => n.type === 'resume');
    this.positions = this.positionContext.getPositions(this.person.id);
  }
}
