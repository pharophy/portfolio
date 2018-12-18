export class ArrayToStringValueConverter {
  toView(array, property, separator, appendText) {
    return `${array.map(e => e[property]).join(separator)} ${appendText}`;
  }
}
