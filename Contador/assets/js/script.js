var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;

function increment(){
    if(currentNumber < 10 ){
        currentNumber = currentNumber +1;
        currentNumberWrapper.innerHTML = currentNumber;
    }else{
        alert("O limite para o incremento é o numéro DEZ!");
    }
}


function decrement(){
    if(currentNumber > 0){
        currentNumber = currentNumber -1;
        currentNumberWrapper.innerHTML = currentNumber;
    }else{
        alert("O limite para o decremento é o numéro ZERO!");
    }
}

function reset(){
    currentNumberWrapper.innerHTML = 0;
    currentNumber = 0;
}