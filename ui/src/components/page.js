import pageModel from '../models/page';
//import navigationLinkModel from '../models/navgation-link';
import {inject} from 'aurelia-framework';

@inject(pageModel)
export default class Page {
  constructor(api) {
    this.page = api.getPage(0);
  }

  async created() {
    this.page = await this.api.getPage(0);
    //.then(contacts => this.contacts = contacts);
  }

  /*select(contact) {
    this.selectedId = contact.id;
    return true;
  }*/
}