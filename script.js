/* const name = 'John';
const age = 35;
const hello = `My name is ${name} and I am ${age}.`;

console.log(hello);

const s = 'Hello world';
console.log(s.length)

const numbers = new Array(1,2,3,4,5);
console.log(numbers);

const fruits = ['apples', 'oranges', 'pears'];
console.log(fruits);
console.log(fruits[0]);
fruits[3] = 'grapes' ;
console.log(fruits);

const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
    }
}

const { firstName, lasatName, address: {city}} = person;


person.email = 'blabla@gmail.com';

const todos = [
    {
    id: 1,
    text: 'Take out trash',
    isCompleted: true
    },
    {
    id: 2,
    text: 'Meeting with boss',
    isCompleted: true
    },
    {
    id: 3,
    text: 'Take out trash',
    isCompleted: false
    }
]

console.log(todos[1].text);

const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

for (let i = 0; i < 10; i++) {
    console.log(i);
}

let i = 0;
while(i < 10) {
    console.log(`While Loop Number: ${i}`);
    i++;
    
}

for(let i = 0; i < todos.length; i++) {
    console.log(todos[i].text);
}

todos.forEach(function(todo) {
    console.log(todo.text);
})

const todoText = todos.map(function(argument) {
    return argument.text;
});


const todoCompleted = todos.filter(function(argument) {
    return argument.isCompleted === true;
}).map(function(argument) {
    return argument.text;
});  

let a = 5 > 4 // true
let b = "ppple" > "aineapple" // fasle
let c = "2" > "12" // false
let d = undefined == null // true
let e = undefined === null // false
let f = null == "\n0\n" 
let g = null === +"\n0\n"



let userName = prompt('Who is there?', '');

if (userName === 'Admin') {

    let pass = prompt('Password?', '');

    if (pass === 'The master') {
        alert('Welcome');
    } else if (pass === '' || pass === null) {
        alert('Canceled');
    } else {
        alert('Wrong password');
    }

}   else if (userName === '' || userName === null) {
    alert('Canceled')
} else {
    alert('I dont know you');
} */



