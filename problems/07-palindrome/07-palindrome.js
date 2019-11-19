/* 7. Palindrome
Define function isPalindrome(someStr)
Return true if someStr is a palindrome, otherwise return false */
function isPalindrome(someStr) {
    let input = someStr.replace(/[.,^A-Z0-9]/ig, "").toLowerCase(); //JS regex patterns 
    let length = input.length;

    for (let i = 0; i < (length / 2); i++) {
        if (input.charAt(i) !== input.charAt(length - 1 - i)) {
            return false;
        }
    }
    return true;
}   

console.log(isPalindrome("A man, a plan, a canal... 87654321 Panama.")); // Canal it be true?
console.log(isPalindrome("racecar"));