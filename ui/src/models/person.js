export default class Person {
  constructor(id = 0, firstName, lastName, resumeLink) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.resumeLink = resumeLink;
  }

  static getPerson(id) {
    return {
      firstName: 'Shawn',
      lastName: 'Souto',
      resumeLink: 'http://link.to/resume.pdf'
    };
  }
}
