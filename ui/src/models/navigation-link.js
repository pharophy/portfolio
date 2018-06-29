export default class NavigationLink {
  constructor(name, url, type, subtype, cssClass, orderIndex, description, id = 0) {
    this.id = id;
    this.name = name;
    this.url = url;
    this.type = type;
    this.subtype = subtype;
    this.cssClass = cssClass;
    this.description = description;
    this.orderIndex = orderIndex;
  }

  static getNavigationLinks(personId) {
    //TODO: generate navigation links from skills for person
    let navigationLinks = [
      new NavigationLink('Home', '', 'default', 'ui-menu-color01', 0),
      new NavigationLink('Visionary', '/person/1/visionary', 'skill', null, 'ui-menu-color02', 1, 'This is a visionary description.'),
      new NavigationLink('Enterprise Architect', '/engineer', 'skill', null, 'ui-menu-color03', 2, 'This is an architect description'),
      new NavigationLink('Full Stack Engineer', '/engineer', 'skill', null, 'ui-menu-color03', 3, 'This is an engineer description'),
      new NavigationLink('Marketer', '/marketer', 'skill', null, 'ui-menu-color04', 4, 'This is a marketer description'),
      new NavigationLink('History', '/history', 'default', null, 'ui-menu-color05', 5),
      new NavigationLink('Linkedin', 'https://www.linkedin.com/in/shawnsouto/', 'social', 'linkedin', 6),
      new NavigationLink('Twitter', 'https://www.twitter.com/', 'social', 'twitter', 7),
      new NavigationLink('Website', 'http://blabberjax.com', 'social', 'website', 8),
      new NavigationLink('Resume', '/src/assets/attachments/shawn-souto-resume.doc', 'resume', 9)
    ];

    return navigationLinks;
  }
}
