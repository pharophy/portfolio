export default class Person {
  constructor(firstName, lastName, companyName, imageUrl, title, subtitle, address, phone, email, scheduleUrl, resumeIntro, resumeSummary, id = 0) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.companyName = companyName;
    this.imageUrl = imageUrl;
    this.title = title;
    this.subtitle = subtitle;
    this.address = address;
    this.phone = phone;
    this.email = email;
    this.scheduleUrl = scheduleUrl;
    this.resumeIntro = resumeIntro;
    this.resumeSummary = resumeSummary;
  }

  static getPerson(id) {
    return new Person(
      'Shawn',
      'Souto',
      'SSI Design',
      'shawn-souto.jpg',
      'Full Stack Engineer, Architect, & Marketer',
      'Highly motivated, curious, and passionate about success.',
      'Please contact for postal address',
      '844-WEB-DES9',
      'shawn.souto[at]gmail.com',
      'https://calendly.com/blabberjax',
      `
      My mission is to help others leverage technology to achieve their dreams. 
      I've helped companies of all sizes, from solopreneurs to fortune 100 companies, and worked with all levels of the organization.
      My experience ranges from developing strategies for new technologies, to leading mission critical projects, to architecting and developing multiple software platforms from the ground up (see my <a style="color:inherit; text-decoration: underline;" href="https://www.designbyssi.com/#/person/0/portfolio">portfolio</a>).
      Most of my domain knowledge falls under sales, marketing and analytics.`,
      `
      Hands on Lead Enterprise Architect with 10+ years of consistent growth as a software engineer in a range of 
      technologies including HTML5, JavaScript (ES6/Node/Ember/SPAs), C#.NET, REST APIs, SAP HANA, SQL, Docker, GCP and 
      emerging technologies. In addition, prior experience in web design as well as a range of non-IT functions such as 
      entrepreneurship, sales, and construction grants the ability to see challenges from every perspective resulting in 
      dramatically improved business processes and elegant systems.
      `,
      0
    );
  }
}
