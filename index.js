function isPalindrome(word) {
  // Write your algorithm here
  let splitString = word.split("");
  let reverseArray = splitString.reverse();
  let joinArray = reverseArray.join("")
   return (joinArray === word ? 
   true :  false )
}

/* 
  Add your pseudocode here
  //the function should reverse the string, then use a  === to check to see if the result matches the inputted string
*/

/*
  Add written explanation of your solution here
  // isPalindrome takes in a string. the string is then split into an array. the array of individual letters is reversed. then the reversed array is joined back together into a string. the string is now compared using a strict equals operator to the oringal inputted word. then it is put through a ternary, returning true when it is an exact match and false when it is not. 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;


