let currentNumberWrapper = document.getElementById("currentNumber")
const increment =  document.getElementById("increment")
const decrement =  document.getElementById("decrement")
let count = 0;

increment.addEventListener("click",
    function increment() {
        count++;
        if(count <=10){
            currentNumberWrapper.innerHTML = count;
        }

        if (count >= 0){
            currentNumberWrapper.classList.remove("negative")
        }
    }
)

decrement.addEventListener("click",
    function decrement() {
        count--;
        if(count >= 10){
            currentNumberWrapper.innerHTML = count;
        }

        if(count < 0){
            currentNumberWrapper.classList.add("negative")
        }
    }
)    