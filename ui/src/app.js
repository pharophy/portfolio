//import { PLATFORM } from 'aurelia-framework';

export class App {
  configureRouter(config, router) {
    config.map([
      //{ route: '',  moduleId: 'home',   title: 'Home'},

      //NOTE: must navigate to localhost:9000/#/person/1 to see home page
      { route: ['/person/:id', '/person/:id/summary'],  moduleId: 'person/summary',   title: 'Summary'},
      { route: 'person/:id/history',  moduleId: 'person/history',   title: 'History'},
      { route: 'person/:id/portfolio',  moduleId: 'person/portfolio',   title: 'Portfolio'},
      { route: 'person/:id/skills',  moduleId: 'person/skill',   title: 'Skill Information'},
      { route: 'skill/:skill',  moduleId: 'skills/detail',   title: 'Skill Information'}
    ]);

    this.router = router;
  }
}
