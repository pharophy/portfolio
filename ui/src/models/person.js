export default class Person {
  constructor(firstName, lastName, imageUrl, title, subtitle, address, phone, email, id = 0) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.imageUrl = imageUrl;
    this.title = title;
    this.subtitle = subtitle;
    this.address = address;
    this.phone = phone;
    this.email = email;
  }

  static getPerson(id) {
    return new Person(
      'Shawn',
      'Souto',
      '/src/assets/images/shawn-souto.jpg',
      'Full Stack Engineer, Enterprise Architect, & Marketer',
      'This is Shawn\'s subtitle',
      '2501 Balmoral Ct \nHillsborough, NJ 08844',
      '908-616-0569',
      'shawn.souto@gmail.com',
      0
    );
  }
}
