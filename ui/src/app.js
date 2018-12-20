import { PLATFORM } from 'aurelia-framework';

export class App {
  configureRouter(config, router) {
    config.addPipelineStep('postcomplete', PostCompleteStep);
    config.map([
      //NOTE: must navigate to localhost:9000/#/person/1 to see home page
      { route: '/', name: 'home',  moduleId: PLATFORM.moduleName('person/summary'),   title: 'About Me', layoutView: PLATFORM.moduleName('components/_shared/_layout.html') },
      { route: ['/person/:id', '/person/:id/summary'],  moduleId: PLATFORM.moduleName('person/summary'),   title: 'About Me', layoutView: PLATFORM.moduleName('components/_shared/_layout.html')},
      { route: 'person/:id/history',  moduleId: PLATFORM.moduleName('person/history'),   title: 'My Work History', layoutView: PLATFORM.moduleName('components/_shared/_layout.html') },
      { route: 'person/:id/portfolio',  moduleId: PLATFORM.moduleName('person/portfolio'),   title: 'My Portfolio', layoutView: PLATFORM.moduleName('components/_shared/_layout.html') },
      { route: 'person/:id/skills',  moduleId: PLATFORM.moduleName('person/skill'),   title: 'My Skills', layoutView: PLATFORM.moduleName('components/_shared/_layout.html') },
      { route: 'person/:id/contact',  moduleId: PLATFORM.moduleName('person/contact'),   title: 'Contact Me', layoutView: PLATFORM.moduleName('components/_shared/_layout.html') },
      { route: 'person/:id/blog',  moduleId: PLATFORM.moduleName('person/blog'),   title: 'Recent Posts', layoutView: PLATFORM.moduleName('components/_shared/_layout.html')}//,
      //TODO: skill route { route: 'skill/:skill',  moduleId: PLATFORM.moduleName('skills/detail'),   title: 'Skill Details', layoutView: PLATFORM.moduleName('components/_shared/_layout.html')}
      //TODO: portfolio-entry route
      //TODO: resume entry route
    ]);

    this.router = router;
  }

  attached() {
    //enable all animations
    let app = this;
    $(document).ready(() => {
      $(window).scroll(() => { app.runAnimations(app); });
      app.runOnceAnimations(app);
      app.runAnimations(app);
    });
    let script = document.createElement('script');
    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag() { dataLayer.push(arguments); }
      gtag('js', new Date());
      gtag('config', 'UA-5893708-8');
    };
    script.src = 'https://www.googletagmanager.com/gtag/js?id=UA-5893708-8';
    document.getElementsByTagName('body')[0].appendChild(script);
  }

  isScrolledIntoView(el) {
    const rect = el.getBoundingClientRect();
    const vWidth = window.innerWidth || doc.documentElement.clientWidth;
    const vHeight = window.innerHeight || doc.documentElement.clientHeight;
    const efp = (x, y) => { return document.elementFromPoint(x, y); };

    // Return false if it's not in the viewport
    if (rect.right < 0 || rect.bottom < 0 || rect.left > vWidth || rect.top > vHeight) {
      return false;
    }

    // Return true if any of its four corners are visible
    return (
      el.contains(efp(rect.left,  rect.top))
      ||  el.contains(efp(rect.right, rect.top))
      ||  el.contains(efp(rect.right, rect.bottom))
      ||  el.contains(efp(rect.left,  rect.bottom))
    );
  }

  //run once animations by runnning on app.attached()
  runOnceAnimations(app) {
    $('.animated-once:not(.animated-complete)').addClass('animated');
  }

  runAnimations(app) {
    $('.animated:not(.animated-complete)').each(function() {
      if (app.isScrolledIntoView(this)) {
        let attrAnimationType = $(this).attr('data-animation-name');
        if (attrAnimationType) {
          $(this).addClass(attrAnimationType);
          $(this).addClass('animated-complete');
        }
        //BACKLOG: get this working properly:
        /*else {
          const params = {};
          params[$(this).data('animation-origin')] = $(this).data('animation-distance');
          $(this)
            .delay($(this).data('animation-delay'))
            .animate(
              params,
              $(this).data('animation-duration')
            );
          $(this).css('display', 'block');
        }*/
      }
    });
  }
}

class PostCompleteStep {
  run(routingContext, next, prev) {
    $(document).scrollTop(0);
    return next();
  }
}
