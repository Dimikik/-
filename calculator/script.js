'use strict' 
function Add(val){
    wind.value += val;
}
let text = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', '-', '*', '/', '.']
for (let btn of text){
    let button = document.getElementById(btn).onclick = () => Add(btn);
}
let wind = document.getElementById('window');
let rez = document.getElementById('=').onclick = () => {
    let result = eval(wind.value);
    wind.value = result;
}
let clear = document.getElementById('C').onclick = () => wind.value = '';