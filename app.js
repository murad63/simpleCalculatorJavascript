
// function two() {
//     let number = document.getElementById('number').value;
//     let heading = document.getElementById("heading");
    
//   if(number == 2){
//     heading.innerHTML = "it is Two";
// }else{
//   heading.innerHTML = "it is not Two";
// }  
// } 
let displayNum = document.getElementById('displayNum');

function number(btnVal){
  displayNum.value += btnVal;
}

function equal() {
  displayNum.value = eval(displayNum.value);
}

function C() {
  displayNum.value = '';
}
