//import { PLATFORM } from 'aurelia-framework';

export class App {
  configureRouter(config, router) {
    config.map([
      //{ route: '',  moduleId: 'home',   title: 'Home'},

      //NOTE: must navigate to localhost:9000/#/person/1 to see home page
      { route: ['/person/:id', '/person/:id/summary'],  moduleId: 'person/summary',   title: 'About Me', layoutView: 'components/_shared/_layout.html'},
      { route: 'person/:id/history',  moduleId: 'person/history',   title: 'My Work History', layoutView: 'components/_shared/_layout.html' },
      { route: 'person/:id/portfolio',  moduleId: 'person/portfolio',   title: 'My Portfolio', layoutView: 'components/_shared/_layout.html' },
      { route: 'person/:id/skills',  moduleId: 'person/skill',   title: 'My Skills', layoutView: 'components/_shared/_layout.html' },
      { route: 'person/:id/contact',  moduleId: 'person/contact',   title: 'Contact Me', layoutView: 'components/_shared/_layout.html' },
      { route: 'person/:id/blog',  moduleId: 'person/blog',   title: 'Recent Posts', layoutView: 'components/_shared/_layout.html'},
      { route: 'skill/:skill',  moduleId: 'skills/detail',   title: 'Skill Details', layoutView: 'components/_shared/_layout.html'}
    ]);

    this.router = router;
  }
}
