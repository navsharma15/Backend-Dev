function capitalize(str) {
  return str ? str[0].toUpperCase() + str.slice(1) : "";
}

function reverseString(str) {
  return str.split("").reverse().join("");
}

function countVowels(str) {
  let count = 0;
  for (let ch of str) {
    if ("aeiouAEIOU".includes(ch)) count++;
  }
  return count;
}

module.exports = {
  capitalize,
  reverseString,
  countVowels
};
