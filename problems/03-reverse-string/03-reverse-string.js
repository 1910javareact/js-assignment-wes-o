/* 3. Reverse String
Define function: reverseStr(someStr)
Reverse and return the String. */
function reverseStr(someStr) {
  
    let input = String(someStr); 
    const length = input.length;
    let process = String(input.substring(0));
     
    let processed = (function() {
        for (let i = length - 1; i >= 0; i--) {
            process += input[i];
        } 
            return process;     
    })();       
    let outputToString = processed.toString();
        
    return outputToString;          
}
console.log(reverseStr("this is a test |") ); 