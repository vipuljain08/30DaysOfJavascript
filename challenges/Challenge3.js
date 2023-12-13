// Solution 

const checkIfValid = (num1, num2) => {
    if((num1>= 50 && num1<= 99) || (num2>=50 && num2<=99)) {
        return true
    } else {
        return false
    }
}
console.log(checkIfValid(56, 78)) // true
console.log(checkIfValid(46, 78)) // true
console.log(checkIfValid(46, 45)) // false