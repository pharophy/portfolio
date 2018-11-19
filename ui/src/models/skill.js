import NavigationLink from 'models/navigation-link';

export default class Skill extends NavigationLink {
  constructor(name, url, type, subType, cssClass, iconType, orderIndex, description, content, imageUrl, rating, id) {
    super(name, url, type, subType, cssClass, iconType, orderIndex, description); /* ignore id */
    this.id = id;
    //this.name = name;
    //this.url = url;
    //this.type = type;
    //this.cssClass = cssClass;
    //this.description = description;
    //this.orderIndex = orderIndex;
    this.content = content;
    this.imageUrl = imageUrl;
    this.rating = rating;
  }

  static getSkills(personId) {
    return [
      new Skill('Technical Leader', '#/skill/technical-leader', 'skill', 'role', null, 'flaticon-profile5', 100, 'This is a visionary description.', null, null, 4, 1),
      new Skill('Enterprise Architect', '#/skill/enterprise-architect', 'skill', 'role', null, 'flaticon-insignia', 200, 'This is an architect description', null, null, 3, 2),
      new Skill('Full Stack Engineer', '#/skill/full-stack-engineer', 'skill', 'role', null, 'flaticon-tool-1', 300, 'This is an engineer description', null, null, 4, 3),
      new Skill('Web Developer', '#/skill/web-developer', 'skill', 'role', null, 'flaticon-insignia', 200, 'This is an architect description', null, null, 4, 4),
      new Skill('Software Architect', '#/skill/software-architect', 'skill', 'role', null, 'flaticon-insignia', 200, 'This is an architect description', null, null, 4, 5),
      new Skill('Internet Marketer', '#/skill/internet-marketer', 'skill', 'role', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 4, 6),
      new Skill('Product Manager', '#/skill/product-manager', 'skill', 'role', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 2, 7),
      new Skill('Agile Project Manager', '#/skill/product-manager', 'skill', 'role', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 2, 8),

      new Skill('HTML5', '#/skill/html5', 'skill', 'front-end', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 4, 9),
      new Skill('ES6 (JavaScript)', '#/skill/es6', 'skill', 'front-end', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 4, 10),
      new Skill('Ember JS', '#/skill/ember-js', 'skill', 'front-end', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 3, 11),
      new Skill('Vue JS', '#/skill/vue-js', 'skill', 'front-end', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 1, 12),
      new Skill('Aurelia JS', '#/skill/ember-js', 'skill', 'front-end', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 2, 13),
      new Skill('Angular JS', '#/skill/ember-js', 'skill', 'front-end', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 1, 14),
      new Skill('Knockout JS', '#/skill/knockout-js', 'skill', 'front-end', null, 'flaticon-insignia', 200, 'This is an architect description', null, null, 3, 15),
      new Skill('jQuery', '#/skill/jquery', 'skill', 'front-end', null, 'flaticon-insignia', 200, 'This is an architect description', null, null, 4, 16),
      
      new Skill('Node JS', '#/skill/node-js', 'skill', 'programming', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 3, 17),
      new Skill('Express JS', '#/skill/express-js', 'skill', 'programming', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 3, 18),
      new Skill('CSS3', '#/skill/css3', 'skill', 'front-end', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 3, 19),

      new Skill('C#', '#/skill/c-sharp', 'skill', 'programming', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 4, 20),
      new Skill('ASP.NET MVC', '#/skill/aspnet-mvc', 'skill', 'programming', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 2, 21),
      new Skill('Web API', '#/skill/web-api', 'skill', 'programming', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 3, 22),
      new Skill('IIS', '#/skill/iis', 'skill', 'web-stack', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 3, 23),

      new Skill('OData', '#/skill/odata', 'skill', 'programming', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 5, 24),
      new Skill('REST', '#/skill/odata', 'skill', 'technical', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 4, 25),

      new Skill('MSSQL', '#/skill/mssql', 'skill', 'database', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 4, 26),
      new Skill('SQL', '#/skill/sql', 'skill', 'database', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 4, 27),
      
      new Skill('Docker', '#/skill/docker', 'skill', 'devops', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 2, 28),
      new Skill('Kubernetes', '#/skill/kubernetes', 'skill', 'devops', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 1, 29),
      
      new Skill('Google Cloud Platform', '#/skill/google-cloud-platform', 'skill', 'cloud', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 2, 30),
      new Skill('Azure AD B2C', '#/skill/azure', 'skill', 'cloud', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 1, 31),
      
      new Skill('Progressive Web Apps', '#/skill/progressive-web-apps', 'skill', 'front-end', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 1, 32),
      new Skill('Single Page Apps', '#/skill/single-page-apps', 'skill', 'front-end', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 4, 33),

      new Skill('SAP BW', '#/skill/sap-bw', 'skill', 'sap', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 4, 34),
      new Skill('SAP HANA', '#/skill/sap-hana', 'skill', 'sap', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 5, 35),
      new Skill('SAP HANA XS', '#/skill/sap-hana-xs', 'skill', 'sap', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 4, 36),
      new Skill('SAP ABAP', '#/skill/sap-abap', 'skill', 'sap', null, 'flaticon-insignia', 200, 'This is an architect description', null, null, 3, 37),
      new Skill('SAPUI5', '#/skill/sapui5', 'skill', 'sap', null, 'flaticon-insignia', 200, 'This is an architect description', null, null, 1, 38),
      
      new Skill('Qlikview', '#/skill/qlikview', 'skill', 'dashboards', null, 'flaticon-insignia', 200, 'This is an architect description', null, null, 2, 39),
      new Skill('Tableau', '#/skill/tableau', 'skill', 'dashboards', null, 'flaticon-insignia', 200, 'This is an architect description', null, null, 1, 40),

      new Skill('git', '#/skill/git', 'skill', 'devops', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 3, 41),
      new Skill('GitHub', '#/skill/github', 'skill', 'devops', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 3, 42),
      
      new Skill('SEO', '#/skill/seo', 'skill', 'marketing', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 4, 43),
      new Skill('Email Marketing', '#/skill/email-marketing', 'skill', 'marketing', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 4, 44),
      new Skill('Social Media Marketing', '#/skill/social-media-marketing', 'skill', 'marketing', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 3, 45),
      new Skill('Content Marketing', '#/skill/content-marketing', 'skill', 'marketing', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 5, 46)
      
    ];
  }
}
