import _ from 'lodash';

export class ArrayTopFilterValueConverter {
  toView(array, topNumber) {
    return _(array).take(topNumber).value();
  }
}
