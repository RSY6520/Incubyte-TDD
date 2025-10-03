function add(numbers) {
  if (numbers === "") return 0;
  const parts = numbers.split(",");
  return parts.map(n => parseInt(n, 10)).reduce((a, b) => a + b, 0);
}

module.exports = { add };
