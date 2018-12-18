import personContext from 'models/person';
import portfolioContext from 'models/portfolio-entry';
let Isotope = require('isotope-layout');
//import PortfolioCollection from 'models/portfolio-collection';

export default class Portfolio {
  constructor() {
    this.personContext = personContext;
    this.portfolioContext = portfolioContext;
    //this.portfolioCollection = new PortfolioCollection();
    this.person = {};
    this.portfolioEntries = [];
    //this.$grid = {};
  }

  //TODO: make categories on portfolio page dynamic (All, Custom Software Platforms, Internet Marketing)
  //TODO: make filtering by category work
  async created() {
    this.person = this.personContext.getPerson(0);
    this.portfolioEntries = await this.portfolioContext.getPortfolioEntries(this.person.id);
    //this.portfolioEntries = await this.portfolioCollection.load();
  }

  async attached() {
    $(document).ready(() => {
      window.$grid  = new Isotope(document.getElementById('portfolio-grid'), {
        itemSelector: '.grid-item',
        layoutMode: 'masonry'
      });
      /*$grid = $('#portfolio-grid').isotope({
        itemSelector: '.grid-item',
        layoutMode: 'masonry'
      });*/
      $('#isotope-filters').on( 'click', 'a', function(e) {
        //this.$grid.isotope({ filter: $(this).attr('data-filter') });
        $('.iso-filter').removeClass("active");
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
    });
  }
}
