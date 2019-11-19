/* 11. Splice Element
Define function spliceElement(someArr, index)
Splice the element at the provided index in the array.
*/
let spliceElement = (someArr, index) => {
  
    for (let i = index; i < someArr.length; i++) {
        if (someArr.hasOwnProperty(i)) {
            //const element = object[i];
            someArr[i] = someArr[i + 1];
        }
    }
    someArr.pop();

    return someArr;
}

let arr = [1,2,3,4,5];
console.log(spliceElement(arr, 4)); // Arr
//let arrgh = {first: 1, second: 3, third: 5, fourth: 7, fifth: 9, sixth: [11]};
//console.log(spliceElement(arrgh.fifth, 4)); // Arrgh