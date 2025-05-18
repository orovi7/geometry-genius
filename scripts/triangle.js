/**
 * objective : get base, height of a triangle . calculate the area using the given formula and then show the
 * area.
 * step 1 : - get base value of triangle
 * step 2 : - added id on input field 
 * step 3 : - create function and get the id but document .get elementbyId 
 * step 4 : - we connected the function in calculate button with function parameter.
 * step 5 : - we took the base value and console it
 * step 6 : - we convert the vlaue to number and used parseFloat function for it
 * 
 */

function triangleCalculate(){
   // base part
   const getTriangleBase = document.getElementById('trianlge-base');
   const baseText = getTriangleBase.value;
   const base = parseFloat(baseText);
   console.log(base);

   // height part
   const getTriangleHeight = document.getElementById('triangle-height');
   const heightText = getTriangleHeight.value;
   const height = parseFloat(heightText);
   console.log(height);

   // area part

   const area = 0.5 * base * height;
   console.log('area of the triangle is :', area);

   // display triangle area
   const triangleArea = document.getElementById('triangle-area');
   triangleArea.innerText = area;

   // document.getElementById('tri-card').addEventListener('mouseover', function(){
   //    style.backgroundColor = 'pink';
   // })

}

document.getElementById('tri-card').addEventListener('mouseover', function(){
      style.backgroundColor = 'pink';
   })

