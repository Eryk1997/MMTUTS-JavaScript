function testExample(){
    var greeting = "HI! My name is Eryk";
    //console.log(greeting);
    return greeting;
}

// var text = testExample();
// console.log(text);

function add(a,b){
    return a+b;
}

var add = add(2,3);
console.log(add);

var test = function(){
    var text = "eryyk";
    return text;
}

console.log(test());

(function(){
    console.log("xxxx");
}())