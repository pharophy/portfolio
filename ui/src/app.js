//import { PLATFORM } from 'aurelia-framework';

export class App {
  configureRouter(config, router) {
    config.map([
      //{ route: '',  moduleId: 'home',   title: 'Home'},

      //NOTE: must navigate to localhost:9000/#/person/1 to see home page
      { route: ['/person/:id', '/person/:id/summary'],  moduleId: 'person/summary',   title: 'About Me'},
      { route: 'person/:id/history',  moduleId: 'person/history',   title: 'My Work History'},
      { route: 'person/:id/portfolio',  moduleId: 'person/portfolio',   title: 'My Portfolio'},
      { route: 'person/:id/skills',  moduleId: 'person/skill',   title: 'My Skills'},
      { route: 'person/:id/contact',  moduleId: 'person/contact',   title: 'Contact Me'},
      { route: 'skill/:skill',  moduleId: 'skills/detail',   title: 'Skill Details'}
    ]);

    this.router = router;
  }
}
