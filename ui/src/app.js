//import { PLATFORM } from 'aurelia-framework';

export class App {
  configureRouter(config, router) {
    config.map([
      //{ route: '',  moduleId: 'components/page',   title: 'Page'},
      { route: '',  moduleId: 'person/summary',   title: 'Summary'},
      { route: 'history',  moduleId: 'person/history',   title: 'History'},
      { route: 'portfolio',  moduleId: 'person/portfolio',   title: 'Portfolio'},
      { route: 'skill',  moduleId: 'skills/detail',   title: 'Skill Information'}
      //{ route: ['', 'home'],   name: 'home',    moduleId: PLATFORM.moduleName('home') }
    ]);

    this.router = router;
  }
}
