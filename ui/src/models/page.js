export default class Page {
  constructor(path = '/', title, content, id = 0) {
    this.path = path;
    this.title = title;
    this.content = content;
  }

  static getPage(id) {
    return new Page(
      'about',
      'Executive Summary',
      '<p>this is content</p>',
      0
    );
  }
}
