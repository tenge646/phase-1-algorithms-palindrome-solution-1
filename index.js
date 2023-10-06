function isPalindrome(word) {
  // Write your algorithm here
// Remove spaces and convert the word to lowercase
  word = word.replace(/\s/g, '').toLowerCase();

  // Initialize pointers for the start and end 
  let start = 0;
  let end = word.length - 1;

  // Check if the characters at the current positions are equal
  while (start < end) {
    if (word[start] !== word[end]) {
      return false; 
    }
    start++;
    end--;
  }

  return true; 

}

/* 
  Add your pseudocode here
*/
// Function isPalindrome(word):
//     1. Remove spaces from the input word and convert it to lowercase.
//     2. Initialize two pointers: 'start' pointing to the beginning of the word and 'end' pointing to the end of the word.
    
//     3. While 'start' is less than 'end':
//         4. If the character at 'start' position is not equal to the character at 'end' position:
//             5. Return false (it's not a palindrome).
//         6. Move 'start' one step forward.
//         7. Move 'end' one step backward.
    
//     8. If the loop completes without returning false:
//         9. Return true (it's a palindrome).
/*
  Add written explanation of your solution here
*/
//  The first step is to preprocess the input word. This involves removing spaces and converting all characters to lowercase. 
 
//  Initialization: Two pointers, start and end, are initialized. start points to the beginning of the word, and end points to the end of the word.

// Loop: The algorithm uses a while loop that continues until start is less than end. Inside the loop, it compares the characters at the start and end positions in the word.

// If the characters are not equal, the function immediately returns false. This is because if any pair of characters does not match, the word cannot be a palindrome.

// If the characters are equal, it moves start one step forward and end one step backward to continue checking the next pair of characters.

// Palindrome Check: If the loop completes without ever returning false, it means that all character pairs in the word matched, and the word is a palindrome. In this case, the function returns true.
// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log(isPalindrome("racecar")); 
console.log(isPalindrome("hello"));  
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
