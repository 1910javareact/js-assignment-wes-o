/* 8. Shapes
Define function: printShape(shape, height, character)
shape is a String and is either "Square", "Triangle", "Diamond".
height is a Number and is the height of the shape. Assume the number is odd.
character is a String that represents the contents of the shape. Assume this String contains just one character.
Use a switch statement to determine which shape was passed in.
Use the console.log function to print the desired shape.
Example for printShape("Square", 3, "%");
%%%
%%%
%%%
Example for printShape("Triangle", 3, "$");
$
$$
$$$
Example for printShape("Diamond", 5, "*");
  *
 ***
*****
 ***
  * 
*/
// Disclaimer: the switch component can be used as a flow control statement in Javascript

let shapeType = {
  shape:[
        { square : '%'},
        { triangle : '$'},
        { diamond : '*'}
  ],
  height: [
    //{height : `${height}`}
    { height : 3}
  ],
  character: [
    //{character : `${character}`}
    { character : " \n %%% \n %%% \n %%% "},
    { character :" $ \n $$ \n $$$ "},
    { character :"  * \n *** \n***** \n *** \n  * "},
  ]     
};  

let squareKey = Object.keys(shapeType.shape[0]);
let squareH = Object.values(shapeType.height[0]);
let squareC = Object.values(shapeType.character[0]);

let triangleKey = Object.keys(shapeType.shape[1]);
let triangleH = Object.values(shapeType.height[0]);
let triangleC = Object.values(shapeType.character[1]);

let diamondKey = Object.keys(shapeType.shape[2]);
let diamondH = Object.values(shapeType.height[0]);
let diamondC = Object.values(shapeType.character[2]);


function printShape(shape) {
  let switchShape = shape;
    switchShape = ['square','triangle','diamond'];

  if (shape == 'square'){
    switchShape = switchShape[0];
  }
  if (shape == 'triangle'){
    switchShape = switchShape[1];
  }
  if (shape == 'diamond'){
    switchShape = switchShape[2];
  }

  switch (switchShape) {
    case 'square' :
        console.log(squareC.toString() );
    break;

    case 'triangle' :
        console.log(triangleC.toString() );
    break;

    case 'diamond' :
        console.log(diamondC.toString() );
    break;

  }  

}  

console.log(squareKey + "- square key");
console.log(printShape("square") +" output" + "\n" );

console.log(triangleKey + "- triangle key");
console.log(printShape("triangle") + " output" + "\n" );

console.log(diamondKey + "- diamond key");
console.log(printShape("diamond") + " output" + "\n");
