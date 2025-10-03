function escapeRegExp(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function add(numbers) {
  if (numbers === "") return 0;

  let input = numbers;
  let delimiters = [",", "\n"];

  if (input.startsWith("//")) {
    const newlineIdx = input.indexOf("\n");
    let header = input.slice(2, newlineIdx);
    delimiters = [header, "\n"];
    input = input.slice(newlineIdx + 1);
  }

  const pattern = new RegExp(delimiters.map(d => escapeRegExp(d)).join("|"), "g");
  const parts = input.split(pattern);

  return parts.map(n => parseInt(n, 10)).reduce((a, b) => a + b, 0);
}
