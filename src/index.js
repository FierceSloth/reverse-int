module.exports = function reverse(n) {
  const str = String(n).split('').reverse().join('');
  return parseInt(str, 10);
};
