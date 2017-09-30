import personModel from '../models/person';
//import navigationLinkModel from '../models/navgation-link';
import {inject} from 'aurelia-framework';

@inject(personModel)
export default class Person {
  constructor(api) {
    this.api = api.getPerson(0);
    this.person = {};
    this.navigationLinks = [];
  }

  async created() {
    this.person = await this.api.getPerson(0);
    //.then(contacts => this.contacts = contacts);
  }

  /*select(contact) {
    this.selectedId = contact.id;
    return true;
  }*/
}