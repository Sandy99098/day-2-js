// var isRaining = true;
// if(isRaining=true)
// {
//     alert("take your umberalla");
// }
// alert("hello");

// var age=parseInt(prompt("enter your age "));

// if (age< 18 )
// {
//     alert("your are child ");

// }
// else if (age>18){
// alert("you are adult");
// }
// var fruit  = prompt("enter the fruit to be selected")

// switch (fruit) {
//     case "apple":
//         alert("you selected apple");
//         console.log("you selected apple");
//         break;
//     case "orange":
//         alert("you selected orange");
//         console.log("you selected orange");
//         break;
// }


//Use a for loop to call a function multiple times that calculates the square of a number and prints the result.(ask input in prompt and show result in alert)

var multipleTimes = parseInt(prompt("How many times do you want to calculate the square of a number ?"));

function square(length) {
    var square = length * length;
    alert(`The square of  ${length} is  ${square}`);
}


for (var i = 0; i < multipleTimes; i++) {
    var inputlength = parseFloat(prompt("Enter a length:"));
    square(inputlength);
}
