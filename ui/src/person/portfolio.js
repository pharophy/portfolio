import personContext from 'models/person';
import portfolioContext from 'models/portfolio-entry';
export default class Portfolio {
  constructor() {
    this.personContext = personContext;
    this.portfolioContext = portfolioContext;
    this.person = {};
    this.portfolioEntries = [];
  }

  //TODO: make categories on portfolio page dynamic (All, Custom Software Platforms, Internet Marketing)
  //TODO: make filtering by category work
  created() {
    this.person = this.personContext.getPerson(0);
    this.portfolioEntries = this.portfolioContext.getPortfolioEntries(this.person.id);
  }
}
