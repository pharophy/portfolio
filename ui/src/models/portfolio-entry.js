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
        'BlabberJax CMS',
        'Custom built Content Marketing System with plugins that help you run your business smarter.',
        null,
        'https://www.blabberjax.com/content-marketing-system/',
        [
          '/assets/portfolio/blabberjax/cms/blabberjax-cms-overview.png',
          '/assets/portfolio/blabberjax/cms/blabberjax-cms-dashboard.png',
          '/assets/portfolio/blabberjax/cms/blabberjax-cms-ceo-framework.png',
          '/assets/portfolio/blabberjax/cms/blabberjax-cms-edit-page.png'
        ],
        [
          new Skill('C#', '/skill/1/c-sharp', 'skill', 'ui-menu-color02', 1, 'This is a C# description.'),
          new Skill('Software Architect', '#/skill/software-architect', 'skill', 'Roles', null, 'flaticon-insignia', 200, 'This is an architect description', null, null, 4, 3),
          new Skill('Full Stack Engineer', '#/skill/full-stack-engineer', 'skill', 'Roles', null, 'flaticon-tool-1', 300, 'This is an engineer description', null, null, 4, 5),
          new Skill('HTML5', '#/skill/html5', 'skill', 'Front-end', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 4, 16),
          new Skill('jQuery', '#/skill/jquery', 'skill', 'Front-end', null, 'flaticon-insignia', 200, 'This is an architect description', null, null, 4, 23),
          new Skill('SQL', '#/skill/sql', 'skill', 'Database', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 4, 35),
          new Skill('SEO', '#/skill/seo', 'skill', 'Marketing', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 4, 51),
          new Skill('Email Marketing', '#/skill/email-marketing', 'skill', 'Marketing', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 4, 52),
          new Skill('Social Media Marketing', '#/skill/social-media-marketing', 'skill', 'Marketing', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 3, 53),
          new Skill('Content Marketing', '#/skill/content-marketing', 'skill', 'Marketing', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 5, 54)
        ],
        [
          new PortfolioEntryType('BlabberJax Marketing Platform', 'blabberjax', null, null, 1),
          new PortfolioEntryType('Client Samples', 'client', null, null, 3),
          new PortfolioEntryType('Web Design', 'web-design', null, null, 4),
          new PortfolioEntryType('Internet Marketing', 'internet-marketing', null, null, 5)
        ],
        0
      ),
      new PortfolioEntry(
        'BlabberJax Content Planner',
        'Plan your content strategy, automate execution, and auto-publish to Facebook, Linkedin, Mailchimp, and Twitter with the ability to approve content before it\'s published.',
        null,
        'https://www.blabberjax.com/content-marketing-system/',
        [
          '/assets/portfolio/blabberjax/content-planner/blabberjax-content-planner-editorial-calendar.png',
          '/assets/portfolio/blabberjax/content-planner/content-planner-automated-delivery.jpg',
          '/assets/portfolio/blabberjax/content-planner/content-planner-automation.jpg'
        ],
        [
          new Skill('C#', '/skill/1/c-sharp', 'skill', 'ui-menu-color02', 1, 'This is a C# description.'),
          new Skill('HTML5', '#/skill/html5', 'skill', 'Front-end', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 4, 16),
          new Skill('jQuery', '#/skill/jquery', 'skill', 'Front-end', null, 'flaticon-insignia', 200, 'This is an architect description', null, null, 4, 23),
          new Skill('SQL', '#/skill/sql', 'skill', 'Database', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 4, 35),
          new Skill('REST', '#/skill/odata', 'skill', 'API Development', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 4, 33),
          new Skill('SEO', '#/skill/seo', 'skill', 'Marketing', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 4, 51),
          new Skill('Email Marketing', '#/skill/email-marketing', 'skill', 'Marketing', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 4, 52),
          new Skill('Social Media Marketing', '#/skill/social-media-marketing', 'skill', 'Marketing', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 3, 53),
          new Skill('Content Marketing', '#/skill/content-marketing', 'skill', 'Marketing', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 5, 54),
        ],
        [
          new PortfolioEntryType('BlabberJax Marketing Platform', 'blabberjax', null, null, 1),
        ],
        0
      ),
      new PortfolioEntry(
        'BlabberJax Engage',
        'Custom built intelligent CTA platform to generate leads and automate actions across your BlabberJax, Zoho CRM, Mailchimp, and more.',
        null,
        'https://www.blabberjax.com/content-marketing-system/',
        [
          '/assets/portfolio/blabberjax/engage/engage-process-to-lead.jpg',
          '/assets/portfolio/blabberjax/engage/engage-gated-content.jpg',
          '/assets/portfolio/blabberjax/engage/engage-intelligent-actions.jpg',
          '/assets/portfolio/blabberjax/engage/engage-actions.jpg',
          '/assets/portfolio/blabberjax/engage/dynamic-calls-to-action-can-be-executed-on-multiple-conditions.jpg'
        ],
        [
          new Skill('C#', '/skill/1/c-sharp', 'skill', 'ui-menu-color02', 1, 'This is a C# description.'),
          new Skill('HTML5', '#/skill/html5', 'skill', 'Front-end', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 4, 16),
          new Skill('jQuery', '#/skill/jquery', 'skill', 'Front-end', null, 'flaticon-insignia', 200, 'This is an architect description', null, null, 4, 23),
          new Skill('SQL', '#/skill/sql', 'skill', 'Database', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 4, 35),
          new Skill('REST', '#/skill/odata', 'skill', 'API Development', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 4, 33),
          new Skill('SEO', '#/skill/seo', 'skill', 'Marketing', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 4, 51),
          new Skill('Email Marketing', '#/skill/email-marketing', 'skill', 'Marketing', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 4, 52),
          new Skill('Social Media Marketing', '#/skill/social-media-marketing', 'skill', 'Marketing', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 3, 53),
          new Skill('Content Marketing', '#/skill/content-marketing', 'skill', 'Marketing', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 5, 54),
        ],
        [
          new PortfolioEntryType('BlabberJax Marketing Platform', 'blabberjax', null, null, 1),
        ],
        0
      ),
      new PortfolioEntry(
        'BlabberJax Contacts',
        'Know your contact\'s interests before you speak to them. Custom built lead management and visitor tracking platform, integrated with Google Analytics user tracking.',
        null,
        'https://www.blabberjax.com/content-marketing-system/',
        [
          '/assets/portfolio/blabberjax/contacts/blabberjax-contacts.png'
        ],
        [
          new Skill('C#', '/skill/1/c-sharp', 'skill', 'ui-menu-color02', 1, 'This is a C# description.'),
          new Skill('HTML5', '#/skill/html5', 'skill', 'Front-end', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 4, 16),
          new Skill('jQuery', '#/skill/jquery', 'skill', 'Front-end', null, 'flaticon-insignia', 200, 'This is an architect description', null, null, 4, 23),
          new Skill('SQL', '#/skill/sql', 'skill', 'Database', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 4, 35),
          new Skill('REST', '#/skill/odata', 'skill', 'API Development', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 4, 33),
          new Skill('SEO', '#/skill/seo', 'skill', 'Marketing', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 4, 51),
          new Skill('Email Marketing', '#/skill/email-marketing', 'skill', 'Marketing', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 4, 52),
          new Skill('Social Media Marketing', '#/skill/social-media-marketing', 'skill', 'Marketing', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 3, 53),
          new Skill('Content Marketing', '#/skill/content-marketing', 'skill', 'Marketing', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 5, 54),
        ],
        [
          new PortfolioEntryType('BlabberJax Marketing Platform', 'blabberjax', null, null, 1),
        ],
        0
      ),
      new PortfolioEntry(
        'BlabberJax eCommerce',
        'Custom built eCommerce and purchase order platform built on top of BlabberJax Dynamic Data.',
        null,
        'https://www.blabberjax.com/content-marketing-system/',
        [
          '/assets/portfolio/clients/bidservice/bidservice-po-submit.png',
          '/assets/portfolio/blabberjax/ecommerce/ecommerce-product-list.png',
          '/assets/portfolio/blabberjax/ecommerce/email-templates.png',
          '/assets/portfolio/blabberjax/ecommerce/edit-product.png'
        ],
        [
          new Skill('C#', '/skill/1/c-sharp', 'skill', 'ui-menu-color02', 1, 'This is a C# description.'),
          new Skill('HTML5', '#/skill/html5', 'skill', 'Front-end', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 4, 16),
          new Skill('jQuery', '#/skill/jquery', 'skill', 'Front-end', null, 'flaticon-insignia', 200, 'This is an architect description', null, null, 4, 23),
          new Skill('SQL', '#/skill/sql', 'skill', 'Database', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 4, 35),
          new Skill('REST', '#/skill/odata', 'skill', 'API Development', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 4, 33),
          new Skill('Web API', '#/skill/web-api', 'skill', 'API Development', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 3, 30),
          new Skill('ASP.NET WebForms', '#/skill/aspnet-webforms', 'skill', 'Server-side Frameworks', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 3, 29),
        ],
        [
          new PortfolioEntryType('BlabberJax Marketing Platform', 'blabberjax', null, null, 1),
        ],
        0
      ),
      new PortfolioEntry(
        'BlabberJax Reporting',
        'Custom built reporting platform partially released as open source under Google Analytics.GoogleCharts.NET with over 3K downloads.',
        null,
        'https://www.nuget.org/packages/GoogleAnalytics.GoogleCharts.NET/',
        [
          '/assets/portfolio/blabberjax/reporting/blabberjax-reporting.png',
          '/assets/portfolio/blabberjax/reporting/google-analytics-charts.jpg'
        ],
        [
          new Skill('C#', '/skill/1/c-sharp', 'skill', 'ui-menu-color02', 1, 'This is a C# description.'),
          new Skill('HTML5', '#/skill/html5', 'skill', 'Front-end', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 4, 16),
          new Skill('jQuery', '#/skill/jquery', 'skill', 'Front-end', null, 'flaticon-insignia', 200, 'This is an architect description', null, null, 4, 23),
          new Skill('SQL', '#/skill/sql', 'skill', 'Database', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 4, 35),
          new Skill('REST', '#/skill/odata', 'skill', 'API Development', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 4, 33),
          new Skill('Web API', '#/skill/web-api', 'skill', 'API Development', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 3, 30),
          new Skill('ASP.NET WebForms', '#/skill/aspnet-webforms', 'skill', 'Server-side Frameworks', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 3, 29),
        ],
        [
          new PortfolioEntryType('BlabberJax Marketing Platform', 'blabberjax', null, null, 1),
        ],
        0
      ),
      new PortfolioEntry(
        'BlabberJax Construction Site Management',
        'Document management system for managing multiple construction sites.',
        null,
        null,
        [
          '/assets/portfolio/blabberjax/construction/skyfield-full.jpg'
        ],
        [
          new Skill('C#', '/skill/1/c-sharp', 'skill', 'ui-menu-color02', 1, 'This is a C# description.'),
          new Skill('HTML5', '#/skill/html5', 'skill', 'Front-end', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 4, 16),
          new Skill('jQuery', '#/skill/jquery', 'skill', 'Front-end', null, 'flaticon-insignia', 200, 'This is an architect description', null, null, 4, 23),
          new Skill('SQL', '#/skill/sql', 'skill', 'Database', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 4, 35),
          new Skill('REST', '#/skill/odata', 'skill', 'API Development', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 4, 33),
          new Skill('Web API', '#/skill/web-api', 'skill', 'API Development', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 3, 30),
          new Skill('ASP.NET WebForms', '#/skill/aspnet-webforms', 'skill', 'Server-side Frameworks', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 3, 29),
        ],
        [
          new PortfolioEntryType('BlabberJax Marketing Platform', 'blabberjax', null, null, 1),
        ],
        0
      ),
      new PortfolioEntry(
        'BlabberJax Support',
        'Ticket management system for computer repair stores.',
        null,
        null,
        [
          '/assets/portfolio/blabberjax/support-ews/support-print.jpg',
          '/assets/portfolio/blabberjax/support-ews/support-home.jpg',
          '/assets/portfolio/blabberjax/support-ews/support-client-login.jpg',
          '/assets/portfolio/blabberjax/support-ews/support-update.jpg'
        ],
        [
          new Skill('C#', '/skill/1/c-sharp', 'skill', 'ui-menu-color02', 1, 'This is a C# description.'),
          new Skill('HTML5', '#/skill/html5', 'skill', 'Front-end', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 4, 16),
          new Skill('jQuery', '#/skill/jquery', 'skill', 'Front-end', null, 'flaticon-insignia', 200, 'This is an architect description', null, null, 4, 23),
          new Skill('SQL', '#/skill/sql', 'skill', 'Database', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 4, 35),
          new Skill('REST', '#/skill/odata', 'skill', 'API Development', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 4, 33),
          new Skill('Web API', '#/skill/web-api', 'skill', 'API Development', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 3, 30),
          new Skill('ASP.NET WebForms', '#/skill/aspnet-webforms', 'skill', 'Server-side Frameworks', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 3, 29),
        ],
        [
          new PortfolioEntryType('BlabberJax Marketing Platform', 'blabberjax', null, null, 1),
        ],
        0
      ),
      new PortfolioEntry(
        'Custom Analytics Platform',
        'Custom built platform similar to Qlik or Tableau with powerful story telling capabilities.',
        null,
        null,
        [
          '/assets/portfolio/apps/custom-analytics-platform/Slide20.JPG',
          '/assets/portfolio/apps/custom-analytics-platform/Slide19.JPG',
          '/assets/portfolio/apps/custom-analytics-platform/Slide22.JPG',
          '/assets/portfolio/apps/custom-analytics-platform/Slide21.JPG',
          '/assets/portfolio/apps/custom-analytics-platform/Slide23.JPG',
          '/assets/portfolio/apps/custom-analytics-platform/Slide24.JPG',
          '/assets/portfolio/apps/custom-analytics-platform/Slide18.JPG',
          '/assets/portfolio/apps/custom-analytics-platform/Slide16.JPG',
          '/assets/portfolio/apps/custom-analytics-platform/Slide15.JPG',
          '/assets/portfolio/apps/custom-analytics-platform/Slide10.JPG'
        ],
        [
          new Skill('HTML5', '#/skill/html5', 'skill', 'Front-end', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 4, 16),
          new Skill('CSS3', '#/skill/css3', 'skill', 'Front-end', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 3, 26),
          new Skill('ES6 (JavaScript)', '#/skill/es6', 'skill', 'Front-end', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 4, 17),
          new Skill('Ember JS', '#/skill/ember-js', 'skill', 'Front-end', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 3, 18),
          new Skill('Node JS', '#/skill/node-js', 'skill', 'Web Stack', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 3, 24),
          new Skill('SQL', '#/skill/sql', 'skill', 'Database', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 4, 35),
          new Skill('REST', '#/skill/odata', 'skill', 'API Development', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 4, 33),
          new Skill('OData', '#/skill/odata', 'skill', 'API Development', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 5, 32),
          new Skill('Docker', '#/skill/docker', 'skill', 'DevOps', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 2, 36),
          new Skill('Kubernetes', '#/skill/kubernetes', 'skill', 'DevOps', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 1, 37),
          new Skill('Google Cloud Platform', '#/skill/google-cloud-platform', 'skill', 'Cloud', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 2, 38),
          new Skill('Single Page Apps', '#/skill/single-page-apps', 'skill', 'Front-end', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 4, 41),
          new Skill('SAP BW', '#/skill/sap-bw', 'skill', 'SAP', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 3, 42),
          new Skill('SAP HANA', '#/skill/sap-hana', 'skill', 'SAP', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 5, 43),
          new Skill('SAP HANA XS', '#/skill/sap-hana-xs', 'skill', 'SAP', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 4, 44),
          new Skill('Team Leadership', '#/skill/team-leadership', 'skill', 'Roles', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 4, 1),
          new Skill('Solution Architect', '#/skill/software-architect', 'skill', 'Roles', null, 'flaticon-insignia', 200, 'This is an architect description', null, null, 4, 4),
          new Skill('Product Manager', '#/skill/product-manager', 'skill', 'Roles', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 2, 8),
          new Skill('Agile Project Manager', '#/skill/agile-project-manager', 'skill', 'Roles', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 2, 9),
        ],
        [
          new PortfolioEntryType('App Development', 'app-development', null, null, 2),
        ],
        0
      ),
      new PortfolioEntry(
        'Student Feedback',
        'Social login enabled app for karate schools and personal trainers to teach online.',
        null,
        null,
        [
          '/assets/portfolio/apps/student-feedback/feedback-activities.png',
          '/assets/portfolio/apps/student-feedback/feedback-student-feedback-view.png',
          '/assets/portfolio/apps/student-feedback/feedback-feedback-form.png',
          '/assets/portfolio/apps/student-feedback/feedback-social-login.png'
        ],
        [
          new Skill('C#', '/skill/1/c-sharp', 'skill', 'ui-menu-color02', 1, 'This is a C# description.'),
          new Skill('HTML5', '#/skill/html5', 'skill', 'Front-end', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 4, 16),
          new Skill('jQuery', '#/skill/jquery', 'skill', 'Front-end', null, 'flaticon-insignia', 200, 'This is an architect description', null, null, 4, 23),
          new Skill('SQL', '#/skill/sql', 'skill', 'Database', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 4, 35),
          new Skill('REST', '#/skill/odata', 'skill', 'API Development', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 4, 33),
          new Skill('Web API', '#/skill/web-api', 'skill', 'API Development', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 3, 30),
          new Skill('ASP.NET WebForms', '#/skill/aspnet-webforms', 'skill', 'Server-side Frameworks', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 3, 29),
        ],
        [
          new PortfolioEntryType('App Development', 'app-development', null, null, 2),
        ],
        0
      ),
      new PortfolioEntry(
        'Onsite Training Registration',
        'OSHA training calendar, registration, and payment processing app.',
        null,
        null,
        [
          '/assets/portfolio/apps/training-calendar/training-courses.jpg',
          '/assets/portfolio/apps/training-calendar/applegate-calendar-home.jpg',
          '/assets/portfolio/apps/training-calendar/my-account.jpg',
          '/assets/portfolio/apps/training-calendar/testimonials.jpg'
        ],
        [
          new Skill('C#', '/skill/1/c-sharp', 'skill', 'ui-menu-color02', 1, 'This is a C# description.'),
          new Skill('HTML5', '#/skill/html5', 'skill', 'Front-end', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 4, 16),
          new Skill('jQuery', '#/skill/jquery', 'skill', 'Front-end', null, 'flaticon-insignia', 200, 'This is an architect description', null, null, 4, 23),
          new Skill('SQL', '#/skill/sql', 'skill', 'Database', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 4, 35),
          new Skill('REST', '#/skill/odata', 'skill', 'API Development', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 4, 33),
          new Skill('Web API', '#/skill/web-api', 'skill', 'API Development', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 3, 30),
          new Skill('ASP.NET WebForms', '#/skill/aspnet-webforms', 'skill', 'Server-side Frameworks', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 3, 29),
          new Skill('JavaScript', '#/skill/javascript', 'skill', 'Languages', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 4, 27),
        ],
        [
          new PortfolioEntryType('App Development', 'app-development', null, null, 2),
        ],
        0
      ),
      new PortfolioEntry(
        'Snail Mail Analytics',
        'Personalized URLs for traditional mail to get better insights into who is opening mailers.',
        null,
        null,
        [
          '/assets/portfolio/apps/snail-mail/go-bondex-full.jpg'
        ],
        [
          new Skill('C#', '/skill/1/c-sharp', 'skill', 'ui-menu-color02', 1, 'This is a C# description.'),
          new Skill('HTML5', '#/skill/html5', 'skill', 'Front-end', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 4, 16),
          new Skill('jQuery', '#/skill/jquery', 'skill', 'Front-end', null, 'flaticon-insignia', 200, 'This is an architect description', null, null, 4, 23),
          new Skill('SQL', '#/skill/sql', 'skill', 'Database', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 4, 35),
          new Skill('REST', '#/skill/odata', 'skill', 'API Development', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 4, 33),
          new Skill('Web API', '#/skill/web-api', 'skill', 'API Development', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 3, 30),
          new Skill('ASP.NET WebForms', '#/skill/aspnet-webforms', 'skill', 'Server-side Frameworks', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 3, 29),
        ],
        [
          new PortfolioEntryType('App Development', 'app-development', null, null, 2),
        ],
        0
      ),
      new PortfolioEntry(
        'Municipal Bonds eCommerce',
        'Customized version of BlabberJax eCommerce for purchasing municipal bonds with pen-based digital signature.',
        null,
        null,
        [
          '/assets/portfolio/apps/municipal-bonds/bondex-mb-full.jpg'
        ],
        [
          new Skill('C#', '/skill/1/c-sharp', 'skill', 'ui-menu-color02', 1, 'This is a C# description.'),
          new Skill('HTML5', '#/skill/html5', 'skill', 'Front-end', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 4, 16),
          new Skill('jQuery', '#/skill/jquery', 'skill', 'Front-end', null, 'flaticon-insignia', 200, 'This is an architect description', null, null, 4, 23),
          new Skill('SQL', '#/skill/sql', 'skill', 'Database', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 4, 35),
          new Skill('REST', '#/skill/odata', 'skill', 'API Development', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 4, 33),
          new Skill('Web API', '#/skill/web-api', 'skill', 'API Development', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 3, 30),
          new Skill('ASP.NET WebForms', '#/skill/aspnet-webforms', 'skill', 'Server-side Frameworks', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 3, 29),
          new Skill('JavaScript', '#/skill/javascript', 'skill', 'Languages', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 4, 27)
        ],
        [
          new PortfolioEntryType('App Development', 'app-development', null, null, 2),
        ],
        0
      ),
      new PortfolioEntry(
        'SSI Accounting & Project Management',
        'Client facing app connecting projects, invoices, and support tickets with Hiveage invoices.',
        null,
        null,
        [
          '/assets/portfolio/apps/ssi-accounting-prjmgt/ssiacctdb-dashboard.png',
          '/assets/portfolio/apps/ssi-accounting-prjmgt/ssiacctdb-project-view.png',
          '/assets/portfolio/apps/ssi-accounting-prjmgt/ssiacctdb-invoice-view.png',
          '/assets/portfolio/apps/ssi-accounting-prjmgt/ssiacctdb-raise-ticket.png',
          '/assets/portfolio/apps/ssi-accounting-prjmgt/ssiacctdb-login.png'
        ],
        [
          new Skill('C#', '/skill/1/c-sharp', 'skill', 'ui-menu-color02', 1, 'This is a C# description.'),
          new Skill('HTML5', '#/skill/html5', 'skill', 'Front-end', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 4, 16),
          new Skill('jQuery', '#/skill/jquery', 'skill', 'Front-end', null, 'flaticon-insignia', 200, 'This is an architect description', null, null, 4, 23),
          new Skill('SQL', '#/skill/sql', 'skill', 'Database', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 4, 35),
          new Skill('ASP.NET WebForms', '#/skill/aspnet-webforms', 'skill', 'Server-side Frameworks', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 3, 29),
          new Skill('JavaScript', '#/skill/javascript', 'skill', 'Languages', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 4, 27),
        ],
        [
          new PortfolioEntryType('App Development', 'app-development', null, null, 2),
        ],
        0
      ),
      new PortfolioEntry(
        'Portfolio App',
        'ES6/7 SPA built with Aurelia to showcase work history.  Plans to develop further and integrate with BlabberJax platform.',
        null,
        null,
        [
          '/assets/portfolio/apps/portfolio-site/portfolio-home.png',
          '/assets/portfolio/apps/portfolio-site/portfolio-skills.png'
        ],
        [
          new Skill('HTML5', '#/skill/html5', 'skill', 'Front-end', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 4, 16),
          new Skill('ES6 (JavaScript)', '#/skill/es6', 'skill', 'Front-end', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 4, 17),
          new Skill('Aurelia JS', '#/skill/ember-js', 'skill', 'Front-end', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 3, 20),
          new Skill('jQuery', '#/skill/jquery', 'skill', 'Front-end', null, 'flaticon-insignia', 200, 'This is an architect description', null, null, 4, 23),
          new Skill('CSS3', '#/skill/css3', 'skill', 'Front-end', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 3, 26),
          new Skill('Node JS', '#/skill/node-js', 'skill', 'Web Stack', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 3, 24),
        ],
        [
          new PortfolioEntryType('App Development', 'app-development', null, null, 2),
        ],
        0
      ),
      new PortfolioEntry(
        'Dalegroup News',
        'Simple CMS-like app to upload and share news articles.',
        null,
        null,
        [
          '/assets/portfolio/apps/dalegroup-news/dalegroup-newsletter-half.jpg'
        ],
        [
          new Skill('C#', '/skill/1/c-sharp', 'skill', 'ui-menu-color02', 1, 'This is a C# description.'),
          new Skill('HTML5', '#/skill/html5', 'skill', 'Front-end', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 4, 16),
          new Skill('jQuery', '#/skill/jquery', 'skill', 'Front-end', null, 'flaticon-insignia', 200, 'This is an architect description', null, null, 4, 23),
          new Skill('SQL', '#/skill/sql', 'skill', 'Database', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 4, 35),
          new Skill('Web API', '#/skill/web-api', 'skill', 'API Development', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 3, 30),
          new Skill('ASP.NET WebForms', '#/skill/aspnet-webforms', 'skill', 'Server-side Frameworks', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 3, 29),
        ],
        [
          new PortfolioEntryType('App Development', 'app-development', null, null, 2),
        ],
        0
      ),
      new PortfolioEntry(
        'Forward Focus',
        'BlabberJax implementation and ongoing marketing automation including micro-moment based marketing.',
        null,
        'https://www.forwardfocusinc.com/',
        [
          '/assets/portfolio/clients/forwardfocus/design-sample-forward-focus-responsive-web-design.png',
          '/assets/portfolio/clients/forwardfocus/micro-moment-email-marketing.png'
        ],
        [
          new Skill('SEO', '#/skill/seo', 'skill', 'Marketing', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 4, 51),
          new Skill('Email Marketing', '#/skill/email-marketing', 'skill', 'Marketing', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 4, 52),
          new Skill('Social Media Marketing', '#/skill/social-media-marketing', 'skill', 'Marketing', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 3, 53),
          new Skill('Content Marketing', '#/skill/content-marketing', 'skill', 'Marketing', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 5, 54)
        ],
        [
          new PortfolioEntryType('Client Samples', 'client', null, null, 3),
          new PortfolioEntryType('Web Design', 'web-design', null, null, 4),
          new PortfolioEntryType('Internet Marketing', 'internet-marketing', null, null, 5)
        ],
        0
      ),
      new PortfolioEntry(
        'Porters Cleaning',
        'BlabberJax implementation and ongoing marketing automation.',
        null,
        'https://www.porterscleaning.com/',
        [
          '/assets/portfolio/clients/porterscleaning/design-sample-porters-cleaning-responsive-web-design.png',
          '/assets/portfolio/clients/porterscleaning/blast-email-marketing.png'
        ],
        [
          new Skill('SEO', '#/skill/seo', 'skill', 'Marketing', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 4, 51),
          new Skill('Email Marketing', '#/skill/email-marketing', 'skill', 'Marketing', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 4, 52),
          new Skill('Social Media Marketing', '#/skill/social-media-marketing', 'skill', 'Marketing', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 3, 53),
          new Skill('Content Marketing', '#/skill/content-marketing', 'skill', 'Marketing', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 5, 54)
        ],
        [
          new PortfolioEntryType('Client Samples', 'client', null, null, 3),
          new PortfolioEntryType('Web Design', 'web-design', null, null, 4),
          new PortfolioEntryType('Internet Marketing', 'internet-marketing', null, null, 5)
        ],
        0
      ),
      new PortfolioEntry(
        'Bid Service',
        'BlabberJax implementation with customized purchase order management for the leading global supplier of used semiconductor equipment.',
        null,
        'https://www.bidservice.com/',
        [
          '/assets/portfolio/clients/bidservice/bidservice-home.jpg',
          '/assets/portfolio/clients/bidservice/bidservice-po-submit.png',
          '/assets/portfolio/clients/bidservice/bidservice-filter-ajax.png'
        ],
        [
          new Skill('SEO', '#/skill/seo', 'skill', 'Marketing', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 4, 51),
          new Skill('C#', '#/skill/c-sharp', 'skill', 'Languages', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 4, 27),
          new Skill('JavaScript', '#/skill/javascript', 'skill', 'Languages', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 4, 27),
          new Skill('SQL', '#/skill/sql', 'skill', 'Database', null, 'flaticon-paper40', 400, 'This is a marketer description', null, null, 4, 35),
        ],
        [
          new PortfolioEntryType('Client Samples', 'client', null, null, 3),
          new PortfolioEntryType('Web Design', 'web-design', null, null, 4),
          new PortfolioEntryType('Internet Marketing', 'internet-marketing', null, null, 5)
        ],
        0
      ),
    ];

    return portfolioEntries;
  }
}
