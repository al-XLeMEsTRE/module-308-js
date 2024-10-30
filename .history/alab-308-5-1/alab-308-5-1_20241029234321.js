/*  ======          PART 1      =======
Take an array of numbers and return the sum.
Take an array of numbers and return the average.
Take an array of strings and return the longest string.
Take an array of strings, and a number and return an array of the strings that are longer than the given number. 
For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].
Take a number, n, and print every number between 1 and n without using loops. Use recursion.
*/
const arrOfNum = [7, 3, 9, 21];
//const arr1 = arrOfNum;
//console.log(arr1);
function sumOfNums(arr1) {
  let sum = 0;
  for (i = 0; i < arr1.length; i++) {
    sum += arr1[i];
    //console.log(`The sum of ${arr1}  is ${sum}`);
  }
  return sum;
  //console.log(`The sum of ${arr1}  is ${sum}`);
}
const sum = sumOfNums(arrOfNum);
console.log("The sum of numbers is: " + sum);

// ******* Take an array of numbers and return the average ******
function aveOfNum(aveNum) {
  let average;
  let sum = 0;
  for (i = 0; i < aveNum.length; i++) {
    sum += aveNum[i];
    //console.log(`The sum of ${arr1}  is ${sum}`);
  }
  average = sum / aveNum.length;
  return average;
}
console.log(`The average of ${arrOfNum} is ${aveOfNum(arrOfNum)}`);

// ****** Take an array of strings and return the longest string. *******
const arrStrings = ["Adam", "Gregory", "Marcus", "Yan"];
function longestStr(str) {
  let longestStr = "";
  for (let name of str) {
    if (longestStr.length < name.length) {
      longestStr = name;
    }
  }
  return longestStr;
}

console.log(`The longest string in the array is ${longestStr(arrStrings)}`);
