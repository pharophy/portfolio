import { PLATFORM } from 'aurelia-framework';

export class App {
  configureRouter(config, router) {
    config.map([
      //{ route: '',  moduleId: 'home',   title: 'Home'},

      //NOTE: must navigate to localhost:9000/#/person/1 to see home page
      { route: '/', name: 'home',  moduleId: PLATFORM.moduleName('person/summary'),   title: 'About Me', layoutView: PLATFORM.moduleName('components/_shared/_layout.html') },
      { route: ['/person/:id', '/person/:id/summary'],  moduleId: PLATFORM.moduleName('person/summary'),   title: 'About Me', layoutView: PLATFORM.moduleName('components/_shared/_layout.html')},
      { route: 'person/:id/history',  moduleId: PLATFORM.moduleName('person/history'),   title: 'My Work History', layoutView: PLATFORM.moduleName('components/_shared/_layout.html') },
      { route: 'person/:id/portfolio',  moduleId: PLATFORM.moduleName('person/portfolio'),   title: 'My Portfolio', layoutView: PLATFORM.moduleName('components/_shared/_layout.html') },
      { route: 'person/:id/skills',  moduleId: PLATFORM.moduleName('person/skill'),   title: 'My Skills', layoutView: PLATFORM.moduleName('components/_shared/_layout.html') },
      { route: 'person/:id/contact',  moduleId: PLATFORM.moduleName('person/contact'),   title: 'Contact Me', layoutView: PLATFORM.moduleName('components/_shared/_layout.html') },
      { route: 'person/:id/blog',  moduleId: PLATFORM.moduleName('person/blog'),   title: 'Recent Posts', layoutView: PLATFORM.moduleName('components/_shared/_layout.html')},
      { route: 'skill/:skill',  moduleId: PLATFORM.moduleName('skills/detail'),   title: 'Skill Details', layoutView: PLATFORM.moduleName('components/_shared/_layout.html')}
    ]);

    this.router = router;
  }
}
