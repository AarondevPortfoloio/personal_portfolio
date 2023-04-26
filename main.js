
let button = document.getElementById('button');
let hidden = document.getElementById('hiddenElement');
let hidden2 = document.getElementById('hiddenElement2');
let count =0
function btnFunction(){
hidden.style.display='block';
hidden2.style.display='block';
button.innerHTML='Bye Flower'
count++
if (count==2){
hidden.style.display='none';
hidden2.style.display='none';
}
}

function btnFunction2(){
    button.innerHTML='Bye Flower'
    button.onclick = function(){
       hidden.style.display='none';
       hidden2.style.display='none';
       button.style.display='none';
    }
}
button.addEventListener('dblclick',btnFunction2)
button.addEventListener('click',btnFunction)

/*let button = document.getElementById('button');
let hidden = document.getElementById('hiddenElement');
let hidden2 = document.getElementById('hiddenElement2');
function btnFunction(){
hidden.style.display='block';
hidden2.style.display='block';

}





button.addEventListener('click',btnFunction)
*/





/*
let button = document.getElementById('button');
let hidden = document.getElementById('hiddenElement');
let hidden2 = document.getElementById('hiddenElement2');
function btnFunction(){
hidden.style.display='block';
hidden2.style.display='block';

}

function btnFunction2(){
    button.innerHTML='Bye Flower'
    button.onclick = function(){
       hidden.style.display='none';
       hidden2.style.display='none';
       button.style.display='none';
    }
}
button.addEventListener('dblclick',btnFunction2)
button.addEventListener('click',btnFunction)
*/
