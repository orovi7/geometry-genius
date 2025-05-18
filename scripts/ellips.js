

function ellipsArea(){
    const a = getInputValue('ellips-a');
    const b = getInputValue('ellips-b');
    const area = 3.14 * a * b;
    console.log(area);
    
    setInnerText('ellips-area', area);
}