export default class Person {
  constructor(firstName, lastName, resumeLink, imageUrl, id = 0) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.resumeLink = resumeLink;
    this.imageUrl = imageUrl;
  }

  static getPerson(id) {
    return new Person(
      'Shawn',
      'Souto',
      'http://link.to/resume.pdf',
      'http://link.to/image.jpg',
      0
    );
  }
}
