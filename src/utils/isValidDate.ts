export default (d: Date) => d instanceof Date && !isNaN(d.getTime());
