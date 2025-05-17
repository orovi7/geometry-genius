/**
 *  objective : - this program will take input width and length for input and then it will calculate 
 * the area and show output
 * step 1 : first make a function in javascript
 * then add id in input fields & also set a onclick function in calculate button and inside of that set function
 * name and call it.

 */

function rectangleArea(){
    // get the width

    const getWidth = document.getElementById('width');
    const widthValue = getWidth.value;
    const width = parseFloat(widthValue);
    console.log(width);

    // get length

    const getLength = document.getElementById('length');
    const lengthValue = getLength.value;
    const length = parseFloat(lengthValue);
    console.log(length);

    // get the rectangle area
    const area = width * length;
    console.log('area of the rectangle is :', area);

    const rectangleArea = document.getElementById('rectangle-area');
    rectangleArea.innerText = area;

}