export default class NavigationLink {
  constructor(name, url, type, description) {
    this.name = name;
    this.url = url;
    this.type = type;
    this.description = description;
  }

  static getNavigationLinks(personId) {
    return [
      new NavigationLink('Home', '', 'default'),
      new NavigationLink('Visionary', '/person/1/visionary', 'skill'),
      new NavigationLink('Engineer', '/engineer', 'skill'),
      new NavigationLink('Marketer', '/marketer', 'skill'),
      new NavigationLink('History', '/history', 'default'),
      new NavigationLink('Linkedin', 'http://linkedin.com', 'external'),
      new NavigationLink('Website', 'http://blabberjax.com', 'external'),
      new NavigationLink('Website', 'http://link.to/resume.pdf', 'attachment')
    ];
  }
}
