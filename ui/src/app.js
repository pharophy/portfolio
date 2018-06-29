//import { PLATFORM } from 'aurelia-framework';

export class App {
  configureRouter(config, router) {
    config.map([
      //{ route: '',  moduleId: 'components/page',   title: 'Page'},
      { route: '',  moduleId: 'person/summary',   title: 'Summary'}
      //{ route: ['', 'home'],   name: 'home',    moduleId: PLATFORM.moduleName('home') }
    ]);

    this.router = router;
  }
}
