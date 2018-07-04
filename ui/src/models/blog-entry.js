export default class BlogEntry {
  constructor(title, url = '#',  imageUrl, shortDescription, id = 0) {
    this.id = id;
    this.title = title;
    this.url = url;
    this.imageUrl = imageUrl;
    this.shortDescription = shortDescription;
    this.id = id;
  }

  static getBlogEntries(personId) {
    return [
      new BlogEntry(
        'How to Create Effective Content for Inbound Marketing',
        'https://www.blabberjax.com/content-marketing/how-to-create-effective-content-for-inbound-marketing/',
        'https://www.blabberjax.com/uploads/inbound-marketing-content-creation-90-a.jpg',
        'If only you knew how to generate content for inbound marketing, your website could be working harder, driving more traffic, and converting more sales. But how do you generate a never-ending stream of content ideas?'
      ),
      new BlogEntry(
        'How to Market to Influencers on Instagram',
        'https://www.blabberjax.com/social-media-marketing/how-to-market-to-influencers-on-instagram/',
        'https://www.blabberjax.com/uploads/instagram-influencer-marketing-89-a.jpg',
        'Did you know that instagram influencer marketing can bring you up to 11x return on investment?'
      )
    ];
  }
}
