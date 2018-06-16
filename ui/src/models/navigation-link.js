export default class NavigationLink {
  constructor(name, url, type, cssClass, orderIndex, description) {
    this.name = name;
    this.url = url;
    this.type = type;
    this.cssClass = cssClass;
    this.description = description;
    this.orderIndex = orderIndex;
  }

  static getNavigationLinks(personId) {
    return [
      new NavigationLink('Home', '', 'default', 'ui-menu-color01', 0),
      new NavigationLink('Visionary', '/person/1/visionary', 'skill', 'ui-menu-color02', 1),
      new NavigationLink('Engineer', '/engineer', 'skill', 'ui-menu-color03', 2),
      new NavigationLink('Marketer', '/marketer', 'skill', 'ui-menu-color04', 3),
      new NavigationLink('History', '/history', 'default', 'ui-menu-color05', 4),
      new NavigationLink('Linkedin', 'https://www.linkedin.com/in/shawnsouto/', 'linkedin', 5),
      new NavigationLink('Website', 'http://blabberjax.com', 'external', 6),
      new NavigationLink('Resume', '/src/assets/attachments/shawn-souto-resume.doc', 'resume', 7)
    ];
  }
}
