/* eslint-disable */
// global variables
const MAX_NUMBER = 10;
const MIN_NUMBER = -10;

const number = document.querySelector('[data-key="number"]')
const subtract = document.querySelector('[data-key="subtract"]')
const add = document.querySelector('[data-key="add"]')
const resetValue = document.querySelector('[data-key="resetButton"]')

const subtractHandler = () =>{ 
    const newValue = parseInt(number.value)-1;
    number.value = newValue;
    
    if(add.disabled===true){
        add.disabled=false;
    }
    if(newValue <= MIN_NUMBER){
        subtract.disabled=true;
    }
}
const addHandler = () =>{
    const newValue = parseInt(number.value)+1;
    number.value = newValue;

    if(subtract.disabled === true){
        subtract.disabled=false;
    }
    if(newValue >= MAX_NUMBER){
        add.disabled=true;
    }
}

const resetHandler = () => {
    console.log('Hi there!')
    number.value = 0;
    if(add.disabled) add.disabled = false;
    if(subtract.disabled) subtract.disabled = false;
    alert('The tally counter value has been reset')
}

subtract.addEventListener('click', subtractHandler)
add.addEventListener('click', addHandler)
resetValue.addEventListener('click', resetHandler)
