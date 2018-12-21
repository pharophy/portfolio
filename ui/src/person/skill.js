import personContext from 'models/person';
import skillContext from 'models/skill';
import _ from 'lodash';

export default class Skill {
  constructor() {
    this.personContext = personContext;
    this.skillContext = skillContext;
    this.person = {};
    this.skillGroups = [];
    this.guides = [
      { value: 1, endValue: null, text: 'Beginner', color: '#80D877' },
      { value: 2, endValue: null, text: 'Intermediate', color: '#57B24D' },
      { value: 3, endValue: null, text: 'Proficient', color: '#368D2D' },
      { value: 4, endValue: null, text: 'Advanced', color: '#1C6015' },
      { value: 4.9, endValue: null, text: 'Guru', color: '#0B3706' }
    ];
    this.navModel = {};
  }

  async bind(bindingContext, overrideContext) {
    this.person = this.personContext.getPerson(0);
    const skillSet = this.skillContext.getSkills(this.person.id);
    this.skillGroups = _(skillSet).groupBy('subtype').value();
    this.navModel.setTitle(`${this.person.firstName} ${this.person.lastName}'s Skills | ${this.person.companyName}`);
  }

  activate(params, routeConfig) {
    this.navModel = routeConfig.navModel;
  }
}
