export default class NavigationLink {
  constructor(name, url, type, subtype, cssClass, iconType, orderIndex, description, id = 0) {
    this.id = id;
    this.name = name;
    this.url = url;
    this.type = type;
    this.subtype = subtype;
    this.cssClass = cssClass;
    this.iconType = iconType;
    this.description = description;
    this.orderIndex = orderIndex;
  }

  static getNavigationLinks(personId) {
    //TODO: generate navigation links from skills for person
    let navigationLinks = [
      new NavigationLink('Home', '/person/1', 'main-nav', 'ui-menu-color01', 10),
      new NavigationLink('Skills', '/person/1/skills', 'main-nav', null, 'ui-menu-color02', 20, 'Learn more about my skills.'),
      new NavigationLink('Technical Leadership', '/person/1/skills#technical-leadership', 'skill', null, null, 100, 'This is a visionary description.'),
      new NavigationLink('Enterprise Architecture', '/person/1/skills#enterprise-architecture', 'skill', null, null, 200, 'This is an architect description'),
      new NavigationLink('Full Stack Engineering', '/person/1/skills#full-stack-engineering', 'skill', null, null, 300, 'This is an engineer description'),
      new NavigationLink('Internet Marketing', '/person/1/skills#internet-marketing', 'skill', null, null, 400, 'This is a marketer description'),
      new NavigationLink('History', '/person/1/history', 'main-nav', null, 'ui-menu-color03', 30),
      new NavigationLink('Portfolio', '/person/1/portfolio', 'main-nav', null, 'ui-menu-color04', 40),
      new NavigationLink('Blog', '/person/1/blog', 'main-nav', null, 'ui-menu-color05', 50),
      new NavigationLink('Contact', '/person/1/contact', 'main-nav', null, 'ui-menu-color06', 60),
      new NavigationLink('Linkedin', 'https://www.linkedin.com/in/shawnsouto/', 'social', 'linkedin', 100),
      new NavigationLink('Twitter', 'https://www.twitter.com/', 'social', 'twitter', 200),
      new NavigationLink('Website', 'https://blabberjax.com', 'social', 'website', 300),
      new NavigationLink('Resume', '/src/assets/attachments/shawn-souto-resume.doc', 'resume', 400)
    ];

    return navigationLinks;
  }
}
