var currentNumberWrapper = document.getElementById('currentNumber'); //armazenando aquele valor
var currentNumber = 0;
function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber; // precisei colocar o inner.html, para alterar dentro do HTML, se não, não teriamos como visualizar na index
}

function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;

}