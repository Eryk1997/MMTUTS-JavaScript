function calc(){
   /*var numers = array['number1', 'number2', 'number3', 'number4', 'number5', 'number6', 'number7', 'number8', 'number9'];
    for (let index = 0; index <= 9; index++) {
        const element = array[index];
        numers[index] = parseInt(document.querySelector('#number' + index).value);
    }*/
    var a = parseInt(document.querySelector('#number1').value);
    var b = parseInt(document.querySelector('#number2').value);
    var op = document.querySelector('#operator').value;
    var calculate = 0;

    if (op == 'add') {
        calculate += a + b;
    } else if (op == 'min') {
        calculate += a - b;
    } else if (op == 'div') {
        calculate += a / b;
    } else if (op == 'mul') {
        calculate += a * b;
    }

    //console.log(calculate);
    document.querySelector('#result').innerHTML = calculate;
}

