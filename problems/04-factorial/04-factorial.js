/* 4. Factorial
Define function: factorial(someNum)
Use recursion to compute and return the factorial of someNum.  */
function factorial(sumNum) {
    let input = sumNum;
        
    let calc = ((input === 1) ? 1 : ((input) * factorial(input - 1) ));

    return calc;
}

console.log(factorial(4) ); // output is 24

