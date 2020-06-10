var suspects = [
    {
        name: "Rusty",
        color: "Orange"
    },
    {
        name: "Buster",
        color: "Red"
    }
];

//The excercise requires you to loop through 'suspects' and then pick out the colors into two variables. This is called destructuring.

const firstColor = suspects[0].color;
const secondColor = suspects[1].color;
console.log(firstColor);
console.log(secondColor);

//Second way to do this

var [color1, color2] = [suspects[0].color, suspects[1].color];
console.log(color1);
console.log(color2);

//some more destructuring examples
let a, b, c;
[a=5, b=7] = [1,2];
console.log(`${a} , ${b}`);
[a,b,c] = [1,2];
console.log(`${a} ${b} ${c}`);