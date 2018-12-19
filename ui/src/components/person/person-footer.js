import personContext from 'models/person';
import navigationLinkContext from 'models/navigation-link';
import _ from 'lodash';

export class PersonFooter {
  constructor() {
    this.personContext = personContext;
    this.navigationLinkContext = navigationLinkContext;
    this.person = {};
    this.resumeLink = {};
    this.socialLinks = [];
    this.linkedin = {};
  }

  created() {
    this.person = this.personContext.getPerson(0);
    this.navigationLinks = this.navigationLinkContext.getNavigationLinks(this.person.id);
    this.resumeLink = _(this.navigationLinks).find(n => n.type === 'resume');
    const socLinks = _(this.navigationLinks).filter(n => n.type === 'social').value();
    this.socialLinks = socLinks; // _(socLinks).keyBy('subtype');
  }

  signUp() {
    let formData = {
      FormName: '[SSI Design] Newsletter Signup Form',
      FormID: 1,
      FormDownloadUrl: 'https://www.blabberjax.com/thank-you.aspx',
      FormFields: [
        { FieldName: 'EmailAddress', FieldValue: document.getElementById('newsl_form_email').value }
      ]
    };

    //TODO: set up result messages, not an alert
    let request = $.ajax({
      url: 'https://www.blabberjax.com/bjx_code/plugins/bjxEngage/Services/FormHandler.asmx/SubmitForm',
      type: 'POST',
      dataType: 'json',
      crossDomain: true,
      cache: false,
      global: true,
      data: '{ "form" : ' + JSON.stringify(formData) + ' }',
      contentType: 'application/json; charset=utf-8'
    });
    request.done(function(n) {
      if (n.d.RedirectUrl) {
        window.location.href = n.d.RedirectUrl;
      } else {
        alert(n.d);
      }
      //BlabberJax.Engage.DisplayMessage(n.d, t);
      //$(".bjx-engage-processing").css("display", "none")
    });
    request.fail(function(n) {
      console.log(n);
      alert(n.statusText);
      //BlabberJax.Engage.DisplayMessage(n.responseJSON.d, t);
      //$(".bjx-engage-processing").css("display", "none")
    });
  }
}
