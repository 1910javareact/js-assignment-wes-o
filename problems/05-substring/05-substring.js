/* 5. Substring
Define function substring(someStr, startIndex, endIndex)
Return the substring contained between startIndex (inclusive) and endIndex (exclusive).
If incorrect input is entered, throw an exception stating the input was incorrect.
For example substring('hello', 0, 3) should give 'hel' */
function substring(someStr, startIndex, endIndex) {

    let input = String(someStr), inpStartIndex = Number(startIndex), inpEndIndex = Number(endIndex); 
    const length = input.length;
    //let process = String(input.substring(0));
     
    let processed = (function() {
        let process = input.substring(inpStartIndex, inpEndIndex);
        return process;     
    })();  

    let outputToString = processed.toString();
        
    return outputToString;
}
console.log(substring('hello', 0, 3)); // output is 'hel'