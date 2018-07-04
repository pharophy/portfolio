import NavigationLink from 'models/navigation-link';

export default class Skill extends NavigationLink {
  constructor(name, url, type, subType, cssClass, iconType, orderIndex, description, content, id) {
    super(name, url, type, subType, cssClass, iconType, orderIndex, description); /* ignore id */
    this.id = id;
    //this.name = name;
    //this.url = url;
    //this.type = type;
    //this.cssClass = cssClass;
    //this.description = description;
    //this.orderIndex = orderIndex;
    this.content = content;
  }

  static getSkills(personId) {
    return [
      new Skill('Technical Leadership', '/skill/technical-leadership', 'skill', null, null, 'flaticon-profile5', 100, 'This is a visionary description.'),
      new Skill('Enterprise Architecture', '/skill/enterprise-architecture', 'skill', null, null, 'flaticon-insignia', 200, 'This is an architect description'),
      new Skill('Full Stack Engineering', '/skill/full-stack-engineering', 'skill', null, null, 'flaticon-tool-1', 300, 'This is an engineer description'),
      new Skill('Internet Marketing', '/skill/internet-marketing', 'skill', null, null, 'flaticon-paper40', 400, 'This is a marketer description')
    ];
  }
}
