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
      new NavigationLink('Summary', '/person/1', 'main-nav', null, 'ui-menu-color01', 'flaticon-stats47', 10),
      new NavigationLink('Skills', '/person/1/skills', 'main-nav', null, 'ui-menu-color02', 'flaticon-identification28', 20, 'Learn more about my skills.'),
      //new NavigationLink('Technical Leadership', '/person/1/skills#technical-leadership', 'skill', null, null, null, 100, 'This is a visionary description.'),
      //new NavigationLink('Enterprise Architecture', '/person/1/skills#enterprise-architecture', 'skill', null, null, null, 200, 'This is an architect description'),
      //new NavigationLink('Full Stack Engineering', '/person/1/skills#full-stack-engineering', 'skill', null, null, null, 300, 'This is an engineer description'),
      //new NavigationLink('Internet Marketing', '/person/1/skills#internet-marketing', 'skill', null, null, null, 400, 'This is a marketer description'),
      new NavigationLink('History', '/person/1/history', 'main-nav', null, 'ui-menu-color03', 'flaticon-graduation61', 30),
      new NavigationLink('Portfolio', '/person/1/portfolio', 'main-nav', null, 'ui-menu-color04', 'flaticon-book-bag2', 40),
      new NavigationLink('Blog', '/person/1/blog', 'main-nav', null, 'ui-menu-color05', 'flaticon-pens15', 50),
      new NavigationLink('Contact', '/person/1/contact', 'main-nav', null, 'ui-menu-color06', 'flaticon-placeholders4', 60),
      new NavigationLink('Linkedin', 'https://www.linkedin.com/in/shawnsouto/', 'social', 'linkedin', null, 100),
      new NavigationLink('Twitter', 'https://www.twitter.com/', 'social', 'twitter', null, 200),
      new NavigationLink('Website', 'https://blabberjax.com', 'social', 'website', null, 300),
      new NavigationLink('Resume', '/src/assets/attachments/shawn-souto-resume.doc', 'resume', null, 400)
    ];

    return navigationLinks;
  }
}
