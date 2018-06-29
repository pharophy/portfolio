import Skill from 'models/skill';

export default class Position {
  constructor(companyName, title, officeLocation, startDate, endDate,  description, skills,  id = 0) {
    this.id = id;
    this.companyName = companyName;
    this.title = title;
    this.officeLocation = officeLocation;
    this.startDate = startDate;
    if (endDate) {
      this.endDate = endDate;
    } else {
      this.endDate = null;
      this.isCurrent = true;
    }
    this.description = description;
    this.skills = skills;
  }

  static getPositions(id) {
    return [
      new Position(
        'Colgate-Palmolive',
        'Lead Enterprise Architect',
        'Piscataway, NJ',
        new Date(2010, 6, 30),
        null,
        'this is description',
        [
          new Skill('C#', '/skill/1/c-sharp', 'skill', 'ui-menu-color02', 1, 'This is a C# description.'),
          new Skill('SAP', '/sap', 'skill', 'ui-menu-color03', 2, 'This is an architect description'),
        ]
      ),
      new Position(
        'SSI Design',
        'Owner / Founder',
        'Hillsborough, NJ',
        new Date(2010, 6, 30),
        null,
        'this is description',
        [
          new Skill('C#', '/skill/1/c-sharp', 'skill', 'ui-menu-color02', 1, 'This is a C# description.'),
          new Skill('JavaScript', '/sap', 'skill', 'ui-menu-color03', 2, 'This is an architect description'),
        ]
      )
    ];
  }
}
