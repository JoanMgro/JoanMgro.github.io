const ladoInput = document.querySelector('#lado');
const resultSquare = document.querySelector('#out_field');

const buttonCuadrado = document.querySelector('#form1');


buttonCuadrado.addEventListener('click', () => {
   
    let ladoValue = ladoInput.value;
    let areaCuadrado = (ladoValue*ladoValue);
    resultSquare.innerText = Math.round(areaCuadrado*100)/100;
    

} 

);

const radioInput = document.querySelector('#radio');
const resultCircle = document.querySelector('#out_circ');

const buttonCircle = document.querySelector('#form2');


buttonCircle.addEventListener('click', () => {
   
    let radioValue = radioInput.value;
    let areaCirculo = Math.PI * (radioValue*radioValue);
    resultCircle.innerText = Math.round(areaCirculo*100)/100;
    

} 

);

const baseInput = document.querySelector('#base');
const alturaInput = document.querySelector('#altura');
const resultTriangle = document.querySelector('#out_triangle');

const buttonTriangle = document.querySelector('#form3');


buttonTriangle.addEventListener('click', () => {
   
    let baseValue = baseInput.value;
    let alturaValue = alturaInput.value;
    let areaTriangle = baseValue * alturaValue / 2
    resultTriangle.innerText = Math.round(areaTriangle*100)/100;
    

} 

);