import { bindable, bindingMode } from 'aurelia-framework';
import personContext from 'models/person';
import blogContext from 'models/blog-entry';

export class Blog {
  @bindable blogEntries;
  @bindable({ defaultBindingMode: bindingMode.twoWay }) loading;

  constructor() {
    this.personContext = personContext;
    this.blogContext = blogContext;
    this.person = {};
    this.blogEntries = [];
    this.loading = true;
  }

  async activate() {
    this.person = this.personContext.getPerson(0);
    let sessionCache = sessionStorage.getItem('blogEntries');
    if (!sessionCache) {
      let queryPromise = this.blogContext.getBlogEntries(this.person.id);
      queryPromise.then(data => {
        this.blogEntries = data;
        sessionStorage.setItem('blogEntries', JSON.stringify(data));
        this.loading = false;
      });
    } else {
      this.blogEntries = JSON.parse(sessionCache);
      this.loading = false;
    }
  }
}
