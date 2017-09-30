export default class Person {
  constructor(firstName, lastName, resumeLink, imageUrl, id = 0) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.resumeLink = resumeLink;
    this.imageUrl = imageUrl;
  }

  static getPerson(id) {
    return {
      firstName: 'Shawn',
      lastName: 'Souto',
      resumeLink: 'http://link.to/resume.pdf'
    };
  }
}
