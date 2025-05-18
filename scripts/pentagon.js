// // objective : - 

// function pentagonArea(){
//     // get the p
//     const getPentaP = document.getElementById('p-of-pen');
//     const pValue = getPentaP.value;
//     const p = parseFloat(pValue);
//     console.log(p);

//     // get the b

//     const getPentaB = document.getElementById('b-of-pen');
//     const bValue = getPentaB.value;
//     const b = parseFloat(bValue);
//     console.log(b);
//     console.log(b);

//     // get the area

//     const getArea = 0.5 * p * b;
//     console.log(getArea);

//     // 

//     const area = document.getElementById('penta-area');
//     area.innerText = getArea;
// }

function pentagonArea(){
    const p = getInputValue('p-of-pen');
    const b = getInputValue('b-of-pen');
    const area = 0.5 * p * b;
    console.log('area of pentagon is:', area);

    setInnerText('penta-area', area);
    
}

function getInputValue(inputFieldId){
   const getInput = document.getElementById(inputFieldId);
   const makeValue = getInput.value;
   const makeFloat = parseFloat(makeValue);
//    console.log(makeFloat);
 return makeFloat;

}

function setInnerText(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}