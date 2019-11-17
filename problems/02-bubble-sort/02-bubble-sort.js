/* 2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array. */
function bubbleSort(numArray) {
    let input = numArray;
    //input.isArray() ? input : undefined;
    let arrLength = numArray.length; 

    /* let swap = ([x], [y]) => {
        return [[y],[x]];
        } */

    let processed = (input) => {
        for (let i = 0; i < arrLength; i++) {
            //const elementI = input[i];
            
            for (let j = 0; j < arrLength - i - 1; j++) {
                //const elementJ = input[j];
                
                if (input[j] > input[j + 1]){
                    //swap(input[j], input[j + 1]);
                    let t = input[j];
                    input[j] = input[j + 1];
                    input[j + 1] = t;
                }
            }
        }  
        return input;    
    }
    return processed(input);  
}

let array = [1,9,3,5,7,2,37,3,9];
console.log(bubbleSort(array));
