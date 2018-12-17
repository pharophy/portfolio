import { customElement, bindable, bindingMode } from 'aurelia-framework';

@customElement('spinner-modal')
export class SpinnerModal {
  @bindable({ defaultBindingMode: bindingMode.twoWay }) loading;

  constructor(loading) {
    this.loading = loading;
  }

  loadingChanged(newStatus) {
    this.loading = newStatus;
    this.bind();
  }

  attached() {
    $(document).ready(() => {
      this.bind();
    });
  }

  bind() {
    if (this.loading) {
      $('#busySpinner').modal('show');
    } else {
      $('#busySpinner').modal('hide');
    }
  }
}
