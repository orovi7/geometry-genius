// objective : we need to take  base and height as an input and then we need to calculate and display the area


// make a function 

function parallelogramArea(){
    // get the base
const paralleloBase = document.getElementById('para-base');
const baseValue = paralleloBase.value;
const base = parseFloat(baseValue);
console.log(base);

//  get the height
const paralleloHeight = document.getElementById('para-height');
const heightValue = paralleloHeight.value;
const height = parseFloat(heightValue);
console.log(height);

// calculate area

const paralleloArea = base * height;
console.log('area of parallelogram is:', paralleloArea);
//  parallelo area
const areaPart = document.getElementById('para-area');
 areaPart.innerText = paralleloArea;

}
