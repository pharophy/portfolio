import NavigationLink from 'models/navigation-link';

export default class Skill extends NavigationLink {
  constructor(name, url, type, cssClass, orderIndex, description, content, id) {
    super(name, url, type, cssClass, orderIndex, description); /* ignore id */
    this.id = id;
    this.name = name;
    this.url = url;
    this.type = type;
    this.cssClass = cssClass;
    this.description = description;
    this.orderIndex = orderIndex;
    this.content = content;
  }

  static getSkills(personId) {
    return [
      new Skill('Visionary', '/person/1/visionary', 'skill', 'ui-menu-color02', 1, 'This is a visionary description.'),
      new Skill('Enterprise Architect', '/engineer', 'skill', 'ui-menu-color03', 2, 'This is an architect description'),
      new Skill('Full Stack Engineer', '/engineer', 'skill', 'ui-menu-color03', 3, 'This is an engineer description'),
      new Skill('Marketer', '/marketer', 'skill', 'ui-menu-color04', 4, 'This is a marketer description')
    ];
  }
}
