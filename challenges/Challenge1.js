// Solution 1
const reverseNumber = (num) => {
  return parseInt(num.toString().split("").reverse().join(""));
};
console.log(reverseNumber(34223)); // 32243

// Solution 2
const reverseNumber1 = (num) => {
  let reverseNum = 0;
  while (num > 0) {
    let digit = num % 10;
    reverseNum = reverseNum * 10 + digit;
    num = Math.floor(num / 10);
  }
  return reverseNum;
};

console.log(reverseNumber1(678)); // 876
