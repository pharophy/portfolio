
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
      new PortfolioEntryType('BlabberJax Marketing Platform', 'blabberjax', null, null, 1),
      new PortfolioEntryType('App Development', 'app-development', null, null, 2),
      new PortfolioEntryType('Client Samples', 'client', null, null, 3),
      new PortfolioEntryType('Web Design', 'web-design', null, null, 4),
      new PortfolioEntryType('Internet Marketing', 'internet-marketing', null, null, 5)
    ];
  }
}
