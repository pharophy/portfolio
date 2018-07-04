import personContext from 'models/person';
import blogContext from 'models/blog-entry';
export default class Blog {
  constructor() {
    this.personContext = personContext;
    this.blogContext = blogContext;
    this.person = {};
    this.blogEntries = [];
  }

  created() {
    this.person = this.personContext.getPerson(0);
    this.blogEntries = this.blogContext.getBlogEntries(this.person.id);
  }
}
