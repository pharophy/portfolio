import $ from 'jquery';
import _ from 'lodash';

export default class BlogEntry {
  constructor(title, url = '#',  imageUrl, shortDescription, pubDate, id = 0) {
    this.id = id;
    this.title = title;
    this.url = url;
    this.imageUrl = imageUrl;
    this.shortDescription = shortDescription;
    this.id = id;
    this.publishDate = pubDate;
  }

  static async getBlogEntries(personId) {
    let feed = 'https://www.blabberjax.com/rss.xml';

    this.blogEntries = [];
    let rssItemsResult = await $.ajax(feed, {
      accepts: {
        xml: 'application/rss+xml'
      },
      dataType: 'xml',
      crossDomain: true
    });
    let rssItems = $(rssItemsResult).find('item');
    for (const item of rssItems) {
      const el = $(item);
      this.blogEntries.push(
        new BlogEntry(
          el.find('title').text(),
          el.find('link').text(),
          el.find('enclosure').attr('url'),
          el.find('description').text(),
          new Date(el.find('pubDateParsed').text())
        )
      );
    }
    this.blogEntries = _(this.blogEntries).orderBy(['publishDate'], ['desc']).take(12).value();

    return this.blogEntries;
  }
}
