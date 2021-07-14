module.exports = function reverse (n) {
  let str = n.toString();
  let arr = Array.from(str).reverse().join('');
  return parseInt(arr);
}
