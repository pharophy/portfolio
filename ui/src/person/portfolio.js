import personContext from 'models/person';
import portfolioContext from 'models/portfolio-entry';
import portfolioEntryTypeContext from 'models/portfolio-entry-type';
let Isotope = require('isotope-layout');
let imagesLoaded = require('imagesloaded');

export default class Portfolio {
  constructor() {
    this.personContext = personContext;
    this.portfolioContext = portfolioContext;
    this.portfolioEntryTypeContext = portfolioEntryTypeContext;
    this.person = {};
    this.portfolioEntries = [];
    this.portfolioEntryTypes = [];
    this.navModel = {};
  }

  async bind(bindingContext, overrideContext) {
    this.person = this.personContext.getPerson(0);
    this.portfolioEntries = await this.portfolioContext.getPortfolioEntries(this.person.id);
    this.portfolioEntryTypes = await this.portfolioEntryTypeContext.getPortfolioEntryTypes(this.person.id);
    this.navModel.setTitle(`${this.person.firstName} ${this.person.lastName}'s Recent Work | ${this.person.companyName}`);
  }

  async attached() {
    $(document).ready(() => {
      window.$grid = new Isotope(document.getElementById('portfolio-grid'), {
        itemSelector: '.grid-item',
        layoutMode: 'masonry'
      });
      $('#isotope-filters').on( 'click', 'a', function(e) {
        $('.iso-filter').removeClass('active');
        $(this).addClass('active');

        const filterText = $(this).attr('data-filter');
        if (filterText === '*') {
          window.$grid.arrange({
            filter: (idx, itemElem) => {
              return true;
            }
          });
        } else {
          window.$grid.arrange({
            filter: (idx, itemElem) => {
              return $(itemElem).hasClass(filterText);
            }
          });
        }
        e.preventDefault();
      });
      //layout after all images have loaded, fixes https://isotope.metafizzy.co/layout.html#imagesloaded
      imagesLoaded($grid.element).on('done', function() {
        window.$grid.layout();
      });
    });
  }

  activate(params, routeConfig) {
    this.navModel = routeConfig.navModel;
  }
}
