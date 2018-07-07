import personContext from 'models/person';
import skillContext from 'models/skill';
import _ from 'lodash';

export default class Skill {
  constructor() {
    this.personContext = personContext;
    this.skillContext = skillContext;
    this.person = {};
    this.roles = [];
    this.skills = [];
  }

  created() {
    this.person = this.personContext.getPerson(0);
    const skillSet = this.skillContext.getSkills(this.person.id);
    this.roles = _(skillSet).filter(n => n.subtype === 'role').value();
    this.skills = _(skillSet).filter(n => n.subtype === 'technical').value();
  }
}
