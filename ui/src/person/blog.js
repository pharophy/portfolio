import { bindable } from 'aurelia-framework';
import personContext from 'models/person';
import blogContext from 'models/blog-entry';

export default class Blog {
  @bindable blogEntries;

  constructor() {
    this.personContext = personContext;
    this.blogContext = blogContext;
    this.person = {};
    this.blogEntries = [];
  }

  async activate() {
    this.person = this.personContext.getPerson(0);
    this.blogEntries = await this.blogContext.getBlogEntries(this.person.id);
  }
}
