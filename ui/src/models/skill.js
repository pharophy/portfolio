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

      new Skill('Team Leadership', '#/skill/team-leadership', 'skill', 'Roles', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 4, 1),
      new Skill('Enterprise Architect', '#/skill/enterprise-architect', 'skill', 'Roles', null, 'flaticon-insignia', 200, 'This is an architect description', null, null, 3, 2),
      new Skill('Software Architect', '#/skill/software-architect', 'skill', 'Roles', null, 'flaticon-insignia', 200, 'This is an architect description', null, null, 4, 3),
      new Skill('Solution Architect', '#/skill/software-architect', 'skill', 'Roles', null, 'flaticon-insignia', 200, 'This is an architect description', null, null, 4, 4),
      new Skill('Full Stack Engineer', '#/skill/full-stack-engineer', 'skill', 'Roles', null, 'flaticon-tool-1', 300, 'This is an engineer description', null, null, 4, 5),
      new Skill('Web Developer', '#/skill/web-developer', 'skill', 'Roles', null, 'flaticon-insignia', 200, 'This is an architect description', null, null, 4, 6),
      new Skill('Internet Marketer', '#/skill/internet-marketer', 'skill', 'Roles', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 4, 7),
      new Skill('Product Manager', '#/skill/product-manager', 'skill', 'Roles', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 2, 8),
      new Skill('Agile Project Manager', '#/skill/agile-project-manager', 'skill', 'Roles', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 2, 9),

      new Skill('Business Analysis', '#/skill/business-analysis', 'skill', 'Soft Skills', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 5, 10),
      new Skill('Presentation Skills', '#/skill/presentation-skill', 'skill', 'Soft Skills', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 4, 11),
      new Skill('Technical Strategy', '#/skill/technical-leader', 'skill', 'Soft Skills', null, 'flaticon-profile5', 100, 'This is a visionary description.', null, null, 4, 12),
      new Skill('People Development', '#/skill/people-development', 'skill', 'Soft Skills', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 4, 13),
      new Skill('Process Optimization', '#/skill/product-manager', 'skill', 'Soft Skills', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 3, 14),
      new Skill('Agile / SCRUM', '#/skill/product-manager', 'skill', 'Soft Skills', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 3, 15),

      new Skill('HTML5', '#/skill/html5', 'skill', 'Front-end', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 4, 16),
      new Skill('ES6 (JavaScript)', '#/skill/es6', 'skill', 'Front-end', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 4, 17),
      new Skill('Ember JS', '#/skill/ember-js', 'skill', 'Front-end', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 3, 18),
      new Skill('Vue JS', '#/skill/vue-js', 'skill', 'Front-end', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 1, 19),
      new Skill('Aurelia JS', '#/skill/ember-js', 'skill', 'Front-end', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 3, 20),
      new Skill('Angular JS', '#/skill/ember-js', 'skill', 'Front-end', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 1, 21),
      new Skill('Knockout JS', '#/skill/knockout-js', 'skill', 'Front-end', null, 'flaticon-insignia', 200, 'This is an architect description', null, null, 3, 22),
      new Skill('jQuery', '#/skill/jquery', 'skill', 'Front-end', null, 'flaticon-insignia', 200, 'This is an architect description', null, null, 4, 23),

      new Skill('Node JS', '#/skill/node-js', 'skill', 'Web Stack', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 3, 24),
      new Skill('Express JS', '#/skill/express-js', 'skill', 'Server-side Frameworks', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 3, 25),
      new Skill('CSS3', '#/skill/css3', 'skill', 'Front-end', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 3, 26),

      new Skill('C#', '#/skill/c-sharp', 'skill', 'Languages', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 4, 27),
      new Skill('JavaScript', '#/skill/javascript', 'skill', 'Languages', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 4, 27),
      new Skill('ASP.NET MVC', '#/skill/aspnet-mvc', 'skill', 'Server-side Frameworks', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 3, 28),
      new Skill('ASP.NET WebForms', '#/skill/aspnet-webforms', 'skill', 'Server-side Frameworks', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 3, 29),
      new Skill('Web API', '#/skill/web-api', 'skill', 'API Development', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 3, 30),
      new Skill('IIS', '#/skill/iis', 'skill', 'Web Stack', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 3, 31),

      new Skill('OData', '#/skill/odata', 'skill', 'API Development', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 5, 32),
      new Skill('REST', '#/skill/odata', 'skill', 'API Development', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 4, 33),

      new Skill('MSSQL', '#/skill/mssql', 'skill', 'Database', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 4, 34),
      new Skill('SQL', '#/skill/sql', 'skill', 'Database', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 4, 35),

      new Skill('Docker', '#/skill/docker', 'skill', 'DevOps', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 2, 36),
      new Skill('Kubernetes', '#/skill/kubernetes', 'skill', 'DevOps', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 1, 37),

      new Skill('Google Cloud Platform', '#/skill/google-cloud-platform', 'skill', 'Cloud', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 2, 38),
      new Skill('Azure AD B2C', '#/skill/azure', 'skill', 'Cloud', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 1, 39),

      new Skill('Progressive Web Apps', '#/skill/progressive-web-apps', 'skill', 'Front-end', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 1, 40),
      new Skill('Single Page Apps', '#/skill/single-page-apps', 'skill', 'Front-end', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 4, 41),

      new Skill('SAP BW', '#/skill/sap-bw', 'skill', 'SAP', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 3, 42),
      new Skill('SAP HANA', '#/skill/sap-hana', 'skill', 'SAP', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 5, 43),
      new Skill('SAP HANA XS', '#/skill/sap-hana-xs', 'skill', 'SAP', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 4, 44),
      new Skill('SAP ABAP', '#/skill/sap-abap', 'skill', 'SAP', null, 'flaticon-insignia', 200, 'This is an architect description', null, null, 3, 45),
      new Skill('SAPUI5', '#/skill/sapui5', 'skill', 'SAP', null, 'flaticon-insignia', 200, 'This is an architect description', null, null, 1, 46),

      new Skill('Qlikview', '#/skill/qlikview', 'skill', 'Dashboards', null, 'flaticon-insignia', 200, 'This is an architect description', null, null, 2, 47),
      new Skill('Tableau', '#/skill/tableau', 'skill', 'Dashboards', null, 'flaticon-insignia', 200, 'This is an architect description', null, null, 1, 48),

      new Skill('git', '#/skill/git', 'skill', 'DevOps', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 3, 49),
      new Skill('GitHub', '#/skill/github', 'skill', 'DevOps', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 3, 50),

      new Skill('SEO', '#/skill/seo', 'skill', 'Marketing', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 4, 51),
      new Skill('Email Marketing', '#/skill/email-marketing', 'skill', 'Marketing', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 4, 52),
      new Skill('Social Media Marketing', '#/skill/social-media-marketing', 'skill', 'Marketing', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 3, 53),
      new Skill('Content Marketing', '#/skill/content-marketing', 'skill', 'Marketing', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 5, 54)

    ];
  }
}
