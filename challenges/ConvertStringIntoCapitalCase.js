const capitalCaseStr = (str) => str.split(' ').map(s => s[0].toUpperCase() + s.substring(1)).join(' ')

console.log(capitalCaseStr('the quick brown fox'))