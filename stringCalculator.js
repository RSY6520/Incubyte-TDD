function add(numbers) {
  if (numbers === "") return 0;
  const parts = numbers.split(",");
  if (parts.length === 1) return parseInt(parts[0], 10);

  return parseInt(parts[0], 10) + parseInt(parts[1], 10);
}

module.exports = { add };
