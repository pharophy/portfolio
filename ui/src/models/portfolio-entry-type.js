
export default class PortfolioEntryType {
  constructor(name, key, title, shortDescription, id = 0) {
    this.id = id;
    this.key = key;
    this.name = name;
    this.title = title;
    this.shortDescription = shortDescription;
  }

  static async getPortfolioEntryTypes(personId) {
    return [
      new PortfolioEntryType('Client Samples', 'clients', null, null, 3),
      new PortfolioEntryType('BlabberJax Marketing Platform', 'blabberjax', null, null, 1),
      new PortfolioEntryType('App Development', 'app-development', null, null, 2),
      new PortfolioEntryType('Other Works', 'other-works', null, null, 4)
    ];
  }
}
