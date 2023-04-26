
let button = document.getElementById('button');
let hidden = document.getElementById('hiddenElement');
let hidden2 = document.getElementById('hiddenElement2');
let count =0
function btnFunction(){
hidden.style.display='block';
hidden2.style.display='block';
button.innerHTML='Bye Flower!'
count++
if (count==2){
hidden.style.display='none';
hidden2.style.display='none';
button.style.display ='none';
}
}
button.addEventListener('click',btnFunction)

