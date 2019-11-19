/* 9. Object Properties
Define function objectProperties(someObj)
Print every property and it's value. */
let objectProperties = (someObj) => {
    let keys = Object.keys( someObj );
    let values = Object.values( someObj );
    
    for(let i = 0; i < keys.length; i++){
        keys[i] = values[i];    
    }
    return someObj;
}
let anObject = {
    name: 'name',
    hair_color: 'hair color',
    human: true,
    klingon: false
}
console.log( objectProperties(anObject) );