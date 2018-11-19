import Skill from 'models/skill';

export default class Position {
  constructor(companyName, title, officeLocation, startDate, endDate,  description, skills, imageUrl,  id = 0) {
    this.id = id;
    this.companyName = companyName;
    this.title = title;
    this.officeLocation = officeLocation;
    this.startDate = startDate;
    if (endDate) {
      this.endDate = endDate;
    } else {
      this.endDate = null;
      this.isCurrent = true;
    }
    this.description = description;
    this.skills = skills;
    this.imageUrl = imageUrl;
  }

  static getPositions(id) {
    let positions = [
      new Position(
        'Colgate-Palmolive',
        'Lead Enterprise Architect',
        'Piscataway, NJ',
        new Date(2015, 7, 1),
        null,
        `
        <ul>
        <li>	Lead & collaborate on major cross-functional initiatives including cloud, integration, SAP, SAP HANA, infrastructure as code, and other transformational technologies. </li>
        <li>	Lead engineer for custom built analytics platform based on Ember, JavaScript (ES6), HTML5, Node, Docker, and HANA.  Responsibilities include hands-on development, application architecture & design, leading international team of 10, requirements gathering, SCRUM management, and product management.  
        Top priority project: <span class="italic">highlighted at Google Next 2017 (<a href="https://youtu.be/j_K1YoMHpbk?t=39m35s" target="_blank">See on YouTube</a>), 
        2017 SAP Innovation Award Winner (<a href="https://drive.google.com/open?id=0B3snJ2ivYc8JOEJLNGhTV3ctSTQ" target="_blank">Presentation</a>) and demoed in SAP Sapphire 2015 keynote with Hasso Plattner.</span></li>
        <li>	Established Architecture Review Board, formalizing design review process, roles, and responsibilities.  
        <br/><span class="italic">Completed over 60 design reviews in 2018.</span></li>
        <li>	Work across functions to ensure technical and strategic alignment to business goals, including leading task forces, developing and aligning roadmaps, prioritizing capabilities, setting standards & best practices, leading training programs and assisting with intern program. 
        <br/><span class="italic">Trained over 100 individuals in multiple training sessions on QlikView, SAP HANA, and JavaScript.</span></li>
        <li>	Managed 3 direct reports. </li>
        </ul>
        `,
        [
          new Skill('C#', '/skill/1/c-sharp', 'skill', 'ui-menu-color02', 1, 'This is a C# description.'),
          new Skill('SAP', '/sap', 'skill', 'ui-menu-color03', 2, 'This is an architect description')
        ],
        '/cp_logo.jpg'
      ),
      new Position(
        'SSI Design',
        'Owner / Founder',
        'Hillsborough, NJ',
        new Date(2008, 1, 1),
        null,
        `
        <ul>  
        <li>	Developed custom built CMS & marketing platform, BlabberJax <sup>TM</sup> in ASP.NET. See: <a href="https://www.blabberjac.com" target="_blank">BlabberJax</a>
              <span class="italic">Capabilities: Content Management System, Content Scheduling, Visitor Tracking &amp; Engagement, Marketing Automation</span>
        </li>
        <li>	Establish and automate end-to-end internet presence for each client including website, SEO, email marketing, social media and video marketing. 
        <br /><span class="bold">Successfully increased client website traffic up to 3859%.</span></li>
        <li>	Custom built numerous websites and applications for 20+ companies in all industries with user bases up to 60K+ visitors per month.  
        See: <a href="https://www.forwardfocusinc.com" target="_blank">Forward Focus</a>, <a href="http://www.mainattractions.com" target="_blank">Main Attractions</a>, <a href="https://www.bidservice.com" target="_blank">Bid Service</a></li>
        <li>	Created a free 6 week course on "How to Promote Your Business Online."  <a href="http://bit.ly/2jl7exD" target="_blank">Read Article</a></li>
        <li>	E2E business responsibilities including marketing, sales, consulting, project management, custom software development, and management.</li>
        </ul>
        `,
        [
          new Skill('C#', '/skill/1/c-sharp', 'skill', 'ui-menu-color02', 1, 'This is a C# description.'),
          new Skill('JavaScript', '/sap', 'skill', 'ui-menu-color03', 2, 'This is an architect description')
        ],
        '/ssi-design-web-design-logo.jpg'
      ),
      new Position(
        'Colgate-Palmolive',
        'Business Process Analyst, Technical Lead',
        'Piscataway, NJ',
        new Date(2010, 6, 30),
        new Date(2015, 9, 30),
        `
        <ul>
        <li>	Created syndicated data platform which harmonizes retail, panel, and other external data from over 700 local databases into one global system. Re-engineered business process accelerates data availability <span class="italic">from 2 months to under 30 days</span>.</li>
        <li>	Managed project planning & resource development, along with analysis, design & development of custom built end-to-end solution.</li>
        <li>	Led international team of developers and collaborated with global external vendors, business partners, and key stakeholders including VP of Global Insights.</li>
        <li>	Designed & developed: Web, BI, and RESTful applications.  Technologies included HTML5, JavaScript, CSS, UI5, Knockout.js, SAP HANA XS Engine, Qlikview, SAP Business Objects Platform, BEx Analyzer, ABAP, and other technologies.  <span class="italic">Launched first Qlikview app at Colgate-Palmolive</span>.</li>
        <li>	Hand-selected for cross-functional taskforce to formulate mid-term Digitization strategy.  </li>
        <br/><span class="italic">Presented strategic opportunities to CIO and direct reports<span class="italic">.</li>
        </ul>
        `,
        [
          new Skill('C#', '/skill/1/c-sharp', 'skill', 'ui-menu-color02', 1, 'This is a C# description.'),
          new Skill('JavaScript', '/sap', 'skill', 'ui-menu-color03', 2, 'This is an architect description')
        ],
        '/cp_logo.jpg'
      )
    ];
    return _(positions).orderBy(({ endDate }) => endDate || new Date(9999, 1, 1), ['desc']).value();
  }
}
