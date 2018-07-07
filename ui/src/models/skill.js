import NavigationLink from 'models/navigation-link';

export default class Skill extends NavigationLink {
  constructor(name, url, type, subType, cssClass, iconType, orderIndex, description, content, imageUrl, yearsExperience, id) {
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
    this.yearsExperience = yearsExperience;
  }

  static getSkills(personId) {
    return [
      new Skill('Technical Leader', '#/skill/technical-leader', 'skill', 'role', null, 'flaticon-profile5', 100, 'This is a visionary description.', null, null, 5),
      new Skill('Enterprise Architect', '#/skill/enterprise-architect', 'skill', 'role', null, 'flaticon-insignia', 200, 'This is an architect description', null, null, 3),
      new Skill('Full Stack Engineer', '#/skill/full-stack-engineer', 'skill', 'role', null, 'flaticon-tool-1', 300, 'This is an engineer description', null, null, 10),
      new Skill('Web Developer', '#/skill/web-developer', 'skill', 'role', null, 'flaticon-insignia', 200, 'This is an architect description', null, null, 10),
      new Skill('Software Architect', '#/skill/software-architect', 'skill', 'role', null, 'flaticon-insignia', 200, 'This is an architect description', null, null, 8),
      new Skill('Internet Marketer', '#/skill/internet-marketer', 'skill', 'role', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 10),
      new Skill('Product Manager', '#/skill/product-manager', 'skill', 'role', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 2),
      new Skill('Agile Project Manager', '#/skill/product-manager', 'skill', 'role', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 8),

      new Skill('HTML5', '#/skill/html5', 'skill', 'technical', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 10),
      new Skill('ES6 (JavaScript)', '#/skill/es6', 'skill', 'technical', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 2),
      new Skill('Ember JS', '#/skill/ember-js', 'skill', 'technical', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 2),
      new Skill('Vue JS', '#/skill/vue-js', 'skill', 'technical', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 1),
      new Skill('Aurelia JS', '#/skill/ember-js', 'skill', 'technical', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 1),
      new Skill('Angular JS', '#/skill/ember-js', 'skill', 'technical', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 1),
      new Skill('Knockout JS', '#/skill/knockout-js', 'skill', 'technical', null, 'flaticon-insignia', 200, 'This is an architect description', null, null, 1),
      new Skill('jQuery', '#/skill/jquery', 'skill', 'technical', null, 'flaticon-insignia', 200, 'This is an architect description', null, null, 6),
      
      new Skill('Node JS', '#/skill/node-js', 'skill', 'technical', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 3),
      new Skill('Express JS', '#/skill/express-js', 'skill', 'technical', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 3),
      new Skill('CSS3', '#/skill/css3', 'skill', 'technical', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 5),

      new Skill('C#', '#/skill/c-sharp', 'skill', 'technical', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 8),
      new Skill('ASP.NET MVC', '#/skill/aspnet-mvc', 'skill', 'technical', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 8),
      new Skill('Web API', '#/skill/web-api', 'skill', 'technical', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 8),
      new Skill('IIS', '#/skill/iis', 'skill', 'technical', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 8),

      new Skill('OData', '#/skill/odata', 'skill', 'technical', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 5),
      new Skill('REST', '#/skill/odata', 'skill', 'technical', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 5),

      new Skill('MSSQL', '#/skill/mssql', 'skill', 'technical', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 8),
      new Skill('SQL', '#/skill/sql', 'skill', 'technical', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 8),
      
      new Skill('Docker', '#/skill/docker', 'skill', 'technical', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 2),
      new Skill('Kubernetes', '#/skill/kubernetes', 'skill', 'technical', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 1),
      
      new Skill('Google Cloud Platform', '#/skill/google-cloud-platform', 'skill', 'technical', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 1),
      new Skill('Azure AD B2C', '#/skill/azure', 'skill', 'technical', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 1),
      
      new Skill('Progressive Web Apps', '#/skill/progressive-web-apps', 'skill', 'technical', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 1),
      new Skill('Single Page Apps', '#/skill/single-page-apps', 'skill', 'technical', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 4),

      new Skill('SAP BW', '#/skill/sap-bw', 'skill', 'technical', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 8),
      new Skill('SAP HANA', '#/skill/sap-hana', 'skill', 'technical', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 5),
      new Skill('SAP HANA XS', '#/skill/sap-hana-xs', 'skill', 'technical', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 4),
      new Skill('SAP ABAP', '#/skill/sap-abap', 'skill', 'technical', null, 'flaticon-insignia', 200, 'This is an architect description', null, null, 8),
      new Skill('SAPUI5', '#/skill/sapui5', 'skill', 'technical', null, 'flaticon-insignia', 200, 'This is an architect description', null, null, 1),
      
      new Skill('Qlikview', '#/skill/qlikview', 'skill', 'technical', null, 'flaticon-insignia', 200, 'This is an architect description', null, null, 1),
      new Skill('Tableau', '#/skill/tableau', 'skill', 'technical', null, 'flaticon-insignia', 200, 'This is an architect description', null, null, 1),

      new Skill('git', '#/skill/git', 'skill', 'technical', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 4),
      new Skill('GitHub', '#/skill/github', 'skill', 'technical', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 4),
      
      new Skill('SEO', '#/skill/seo', 'skill', 'technical', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 10),
      new Skill('Email Marketing', '#/skill/email-marketing', 'skill', 'technical', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 8),
      new Skill('Social Media Marketing', '#/skill/social-media-marketing', 'skill', 'technical', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 8),
      new Skill('Content Marketing', '#/skill/content-marketing', 'skill', 'technical', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 8)
      
    ];
  }
}
