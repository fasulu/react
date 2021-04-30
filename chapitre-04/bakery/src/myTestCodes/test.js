
/***********convert object into an array */

var numbers = {
    one: 1,
    two: 2,
};

//   ES5 and before

//   var keys = [];

//   for (var number in numbers) {
//     if (numbers.hasOwnProperty(number)) {
//       keys.push(number);
//     }
//   }
//  console.log(keys);

//   keys; // [ 'one', 'two' ]

// ES6 format

console.table(Object.entries(numbers));

var numbersArry = Object.entries(numbers)

console.table(numbersArry)
console.log(numbersArry)


/*******************list array using map()********************** */

const myUsers = [
    { name: 'shark', likes: 'ocean' },
    { name: 'turtle', likes: 'pond' },
    { name: 'otter', likes: 'fish biscuits' }
]

const usersByLikes = myUsers.map(item => {
    const container = {};

    container[item.name] = item.likes;
    container.age = item.name.length * 10;

    return container;
})

console.log(usersByLikes);

//output
// [
//     { shark: 'ocean', age: 50 },
//     { turtle: 'pond', age: 60 },
//     { otter: 'fish biscuits', age: 50 }
//   ]

/*************************************************** */

const names = ["whale", "squid", "turtle", "coral", "starfish"];

console.log(names.map(name => key = { name }));

// const NamesList = () => (
//   <div>
//     <ul>{names.map(name => <li key={name}> {name} </li>)}</ul>
//   </div>

// );

//**************************filter()************************ */


// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// const result = words.filter(word => word.length > 6);

// console.log(result);
// // expected output: Array ["exuberant", "destruction", "present"]

// /***** */

// // String.prototype.indexOf:
// var PATTERN = 'bedroom',
//     filtered = myArray.filter(function (str) { return str.indexOf(PATTERN) === -1; });

// /***** */

// // Regexp:
// var PATTERN = /bedroom/,
//     filtered = myArray.filter(function (str) { return PATTERN.test(str); });


// // Using String.prototype.includes (only in moderm browsers):
// var PATTERN = 'bedroom',
//     filtered = myArray.filter(function (str) { return str.includes(PATTERN); });



/***************** */


const list = [
    croissantToPay= [1, 2],   // [prix, qty]
    cafeToPay= [3, 4],
    gateauToPay= [5, 6],
    eauToPay= [7, 8],
    boissonToPay= [9, 10],

]

// console.log(list[0][1])     // 2
// console.log(list[0][0])     // 1
// console.log(list[2][1])     // 6
// console.log(list[4][0])     // 9
// console.log(list[3][1])     // 8
// console.log(list[2][0])     // 5


for(i=0;i<=list.length-1;i++) {
    console.log("im i",i)
    for(j=0;j<=list[i].length-1;j++){
        console.log("im i, y",i,j, list[i][j])
        // console.log(list[i][y])
    }
}
