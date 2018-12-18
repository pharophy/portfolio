import Skill from 'models/skill';
import PortfolioEntryType from 'models/portfolio-entry-type';

export default class PortfolioEntry {
  constructor(title, shortDescription, description, url, images, skills, types, id = 0) {
    this.id = id;
    this.title = title;
    this.shortDescription = shortDescription;
    this.description = description;
    this.url = url;
    this.images = images;
    this.defaultImage = images[0];
    this.skills = skills;
    this.types = types;
  }

  static async getPortfolioEntries(personId) {
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
          new Skill('SAP', '/sap', 'skill', 'ui-menu-color03', 2, 'This is an architect description')
        ],
        [
          new PortfolioEntryType('Software Engineering', 'software-engineering', null, null, 1)
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
          new Skill('SAP', '/sap', 'skill', 'ui-menu-color03', 2, 'This is an architect description')
        ],
        [
          new PortfolioEntryType('Software Engineering', 'software-engineering', null, null, 1),
          new PortfolioEntryType('Website Design', 'website-design', null, null, 2),
          new PortfolioEntryType('Marketing Automation', 'marketing-automation', null, null, 3)
        ],
        0
      ),
      new PortfolioEntry(
        'Main Attractions',
        'This is a short desc of clt website',
        'This is a description of the clt website and services',
        null,
        [
          'http://designbyssi.com/App_Themes/default/images/portfolio/nj-web-design/mainattractions-full.jpg'
        ],
        [
          new Skill('C#', '/skill/1/c-sharp', 'skill', 'ui-menu-color02', 1, 'This is a C# description.'),
          new Skill('SAP', '/sap', 'skill', 'ui-menu-color03', 2, 'This is an architect description')
        ],
        [
          new PortfolioEntryType('Website Design', 'website-design', null, null, 2)
        ],
        0
      ),
      new PortfolioEntry(
        'Main Attractions',
        'This is a short desc of clt website',
        'This is a description of the clt website and services',
        null,
        [
          'http://designbyssi.com/App_Themes/default/images/portfolio/nj-web-design/millstone-river-creamery.jpg'
        ],
        [
          new Skill('C#', '/skill/1/c-sharp', 'skill', 'ui-menu-color02', 1, 'This is a C# description.'),
          new Skill('SAP', '/sap', 'skill', 'ui-menu-color03', 2, 'This is an architect description')
        ],
        [
          new PortfolioEntryType('Website Design', 'website-design', null, null, 2),
          new PortfolioEntryType('Marketing Automation', 'marketing-automation', null, null, 3)
        ],
        0
      )
    ];

    return portfolioEntries;
  }
}
