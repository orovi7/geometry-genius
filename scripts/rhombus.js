// objective : - in this we need to take two values d1 and d2 and calculate the area with 0.5*d1*d2

function rhombusArea(){
    // get the d1 first

    const getFirstD = document.getElementById('rhom-d1');
    const valueOfFirstD = getFirstD.value;
    const d1 = parseFloat(valueOfFirstD);
    console.log(d1);

    // get the d2 then
    
    const getSecondD = document.getElementById('rhom-d1');
    const valueOfSecondD = getSecondD.value;
    const d2 = parseFloat(valueOfSecondD);
    console.log(d2);

    // get the area 

    const getArea = 0.5 * d1 * d2;
    console.log('area of rhombus is:', getArea);

    const areaShow = document.getElementById('rhom-area');
    areaShow.innerText = getArea;


}