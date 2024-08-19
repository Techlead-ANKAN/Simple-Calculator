let display = document.getElementById("display")

function appendToDisplay(input){
    display.value += input;
}

function allClear() {
    display.value = "";
}

function calculate() {
    display.value = eval(display.value);
}

function cutLast(){
    let str = display.value;
    display.value = str.slice(0, ((str.length) - 1));
}