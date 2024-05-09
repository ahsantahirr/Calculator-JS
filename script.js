
// var input = document.getElementById("inpt1")

// function calculate(user_Number){
//     input.innerHTML += user_Number;

// }
// function clean(){
//     input.innerHTML = " ";
// }
// function resultss(){
//     var result = user_Number.eval(user_Number);
//     input.innerHTML = user_Number;
//     alert(" jj")
// }

var input = document.getElementById("inpt1");

function calculate(userInput) {
    input.innerHTML += userInput;
}



function resultss() {
    var expression = input.innerHTML;
    var result;
    try {
        result = eval(expression);
        input.innerHTML = result;
    } catch (error) {
        input.innerHTML = "Error";
    }
}

function clean() {
    input.innerHTML = "";
}

function del() {
    let userInput = input.innerHTML;
    userInput = userInput.toString().slice(0, -1);
    input.innerHTML = userInput;
}

