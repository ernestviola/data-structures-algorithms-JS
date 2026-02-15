function stringToNumber(string) {
  let hashCode = 0;

  const primeNumber = 31;
  for (let i = 0; i < string.length; i++) {
    hashCode = primeNumber * hashCode + string.charCodeAt(i);
  }

  return hashCode;
}

function hash(value, m) {
  value = String(value);
  let hashCode = 0;

  const primeNumber = 31;
  for (let i = 0; i < value.length; i++) {
    hashCode = (primeNumber * hashCode + value.charCodeAt(i)) % m;
  }

  return hashCode;
}
export { stringToNumber, hash };
