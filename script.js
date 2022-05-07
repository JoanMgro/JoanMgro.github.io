const ladoInput = document.querySelector('#lado');
const resultField = document.querySelector('#out_field');

const buttonCuadrado = document.querySelector('#form1');


buttonCuadrado.addEventListener('click', () => {
   
    let ladoValue = ladoInput.value;
    let areaCuadrado = (ladoValue*ladoValue);
    resultField.innerText = Math.round(areaCuadrado*100)/100;
    

} 

);