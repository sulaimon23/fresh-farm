const username = document.getElementById('username');
const password = document.getElementById('password');
const fill = document.getElementById('fill');
const enter = document.getElementById('enter');
const button = document.getElementById('button');

button.addEventListener('click', collect);

// function fill() {
//  const display = document.querySelector('#fill');
//  display.value = collect.displayValue;
// }
function collect(){
 if(username === isNaN){
  return fill.innerHTML = ('Input can not be a number');
 }
 
 else {
  return fill.innerHTML = ('done')
 }
}
