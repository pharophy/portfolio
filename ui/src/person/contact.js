import personContext from 'models/person';

export default class Contact {
  constructor() {
    this.personContext = personContext;
    this.person = {};
  }

  created() {
    this.person = this.personContext.getPerson(0);
  }

  sendMessage() {
    let formData = {
      FormName: '[SSI Design] Person Contact Form',
      FormID: 1,
      FormDownloadUrl: 'https://www.blabberjax.com/thank-you.aspx',
      FormFields: {
        FirstName: document.getElementById('form_name').value,
        LastName: document.getElementById('form_lastname').value,
        EmailAddress: document.getElementById('form_email').value,
        PhoneNumber: document.getElementById('form_phone').value,
        CommentNotes: document.getElementById('form_message').value
      }
    };

    //TODO: need to allow CORS for domain [svr side on blabberjax.com]
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
