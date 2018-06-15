export default class NavigationLink {
  constructor(name, url, type, cssClass, description) {
    this.name = name;
    this.url = url;
    this.type = type;
    this.cssClass = cssClass;
    this.description = description;
  }

  static getNavigationLinks(personId) {
    return [
      new NavigationLink('Home', '', 'default', 'ui-menu-color01'),
      new NavigationLink('Visionary', '/person/1/visionary', 'skill', 'ui-menu-color02'),
      new NavigationLink('Engineer', '/engineer', 'skill', 'ui-menu-color03'),
      new NavigationLink('Marketer', '/marketer', 'skill', 'ui-menu-color04'),
      new NavigationLink('History', '/history', 'default', 'ui-menu-color05'),
      new NavigationLink('Linkedin', 'https://www.linkedin.com/in/shawnsouto/', 'linkedin'),
      new NavigationLink('Website', 'http://blabberjax.com', 'external'),
      new NavigationLink('Resume', '/src/assets/attachments/shawn-souto-resume.doc', 'resume')
    ];
  }
}
