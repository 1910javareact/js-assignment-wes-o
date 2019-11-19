/* 1. Fibonacci
Define function: fib(n) 
Return the nth number in the fibonacci sequence. */
// Fibonacci 2.0
let fibonacci = {   
    getFib : function fib(n) {
    let inp = n;
    let output;
        if (isNaN(inp) ) throw new Error("Error. Enter a number.") ;

        if (inp === 0 || inp === 1){
            output = inp;
            return output;
        }
        
        if (inp >= 1){
            let process = this.getFib(inp - 1) + this.getFib(inp - 2);
            output = process;
            return output;
        } 
    }
}
console.log(fibonacci.getFib(6)); // output is 8
