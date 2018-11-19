import moment from 'moment';

export class DateFormatValueConverter {
  toView(value, formatString, nullValueText) {
    return value ? moment(value).format(formatString) : nullValueText;
  }
}
