export default class Person {
  constructor(firstName, lastName, imageUrl, id = 0) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.imageUrl = imageUrl;
  }

  static getPerson(id) {
    return new Person(
      'Shawn',
      'Souto',
      '/src/assets/images/shawn-souto.jpg',
      0
    );
  }
}
