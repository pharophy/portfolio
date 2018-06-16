export default class Skill {
  constructor(name, description, url, type, cssClass, orderIndex, content, id = 0) {
    this.id = id;
    this.name = name;
    this.url = url;
    this.type = type;
    this.cssClass = cssClass;
    this.description = description;
    this.orderIndex = orderIndex;
    this.content = content;
  }

  static getSkills(id) {
    return [
      new Skill('Visionary', 'This is a visionary description.'),
      new Skill('Enterprise Architect', 'This is an architect description'),
      new Skill('Full Stack Engineer', 'This is an engineer description'),
      new Skill('Marketer', 'This is a marketer description')
    ];
  }
}
