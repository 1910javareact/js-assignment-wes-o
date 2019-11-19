/* 6. Even Number
Define function: isEven(someNum)
Return true if even, false if odd.
Do not use % operator. */
function isEven(someNum) {
  let input = someNum;
  
  let process = ((input/ 2) - Math.floor(input/ 2) === 0) ? true : false ;

    return process;
}

let output = isEven(2000009); // output is false
console.log( output );

/* function isEve(someNum) {
  let input = someNum;
  
  let process = ((input/ 2) - Math.floor(input/ 2) === 0) ? true : false ;

    return process;
}

let out = isEve(9);
console.log( out ); */