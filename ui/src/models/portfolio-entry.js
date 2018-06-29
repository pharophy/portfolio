import Skill from 'models/skill';

export default class PortfolioEntry {
  constructor(title, shortDescription, description, url, images, skills, id = 0) {
    this.id = id;
    this.title = title;
    this.shortDescription = shortDescription;
    this.description = description;
    this.url = url;
    this.images = images;
    this.defaultImage = images[0];
    this.skills = skills;
  }

  static getPortfolioEntries(personId) {
    let portfolioEntries = [
      new PortfolioEntry(
        'Custom Analytics Platform',
        'This is a short desc of anal plat',
        'This is a description of the analytics platform',
        null,
        [
          'http://designbyssi.com/App_Themes/default/images/portfolio/nj-web-design/airsavings-full.jpg',
          'http://designbyssi.com/App_Themes/default/images/portfolio/nj-web-design/viva-full.jpg',
          'http://designbyssi.com/App_Themes/default/images/portfolio/nj-web-design/sinisi-full.jpg'
        ],
        [
          new Skill('C#', '/skill/1/c-sharp', 'skill', 'ui-menu-color02', 1, 'This is a C# description.'),
          new Skill('SAP', '/sap', 'skill', 'ui-menu-color03', 2, 'This is an architect description'),
        ],
        0
      ),
      new PortfolioEntry(
        'BlabberJax Marketing Automation Platform',
        'This is a short desc of mkt plat',
        'This is a description of the marketing automation platform',
        null,
        [
          'http://designbyssi.com/App_Themes/default/images/portfolio/nj-web-design/airsavings-full.jpg',
          'http://designbyssi.com/App_Themes/default/images/portfolio/nj-web-design/viva-full.jpg',
          'http://designbyssi.com/App_Themes/default/images/portfolio/nj-web-design/sinisi-full.jpg'
        ],
        [
          new Skill('C#', '/skill/1/c-sharp', 'skill', 'ui-menu-color02', 1, 'This is a C# description.'),
          new Skill('SAP', '/sap', 'skill', 'ui-menu-color03', 2, 'This is an architect description'),
        ],
        0
      )
    ];

    return portfolioEntries;
  }
}
