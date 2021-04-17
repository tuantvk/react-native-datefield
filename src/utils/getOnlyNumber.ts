export default (value: string | number) =>
  String(value).replace(/[^\d]*/gi, '');
