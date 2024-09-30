const counter  = document.getElementById("counter")
const increase  = document.getElementById("increase")
const decrease  = document.getElementById("decrease")
const reset  = document.getElementById("reset")

let number = 0;

increase.addEventListener("click", () => {
    number++;
    counter.innerHTML = number;
});

decrease.addEventListener("click", () => {
    if(number==0){}
    else{
        number--;
        counter.innerHTML = number;
    }
});

reset.addEventListener("click", () => {
    number = 0;
    counter.innerHTML = number;
});
