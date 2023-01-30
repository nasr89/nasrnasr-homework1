function helloWord(){
    let a=6;
    return "Hello from techlarious fullstack bootcamp";
}

const a =10;


// function return any
//-----------------------
function addNumbers(a,b){
    return a+b ;
}

//return number
//---------------
function addNumbers(){
    return 3+4
}

console.log(helloWord());

console.log(addNumbers(4,3));


// void function
//--------------------
function printData(){
    console.log("Techlarious provide fullstack, qa, blockchain, cloud bootcamp");
}
printData();

//arrow function
//----------------------
const addition = (a,b) => {
    return a+b;
}

const multiplication = (a,b) => a*b;

console.log(addition(5,3));
console.log(multiplication(5,6));

//anonymous arrow function , mnesta3mela ma3 ltimer , ma3 lself execute
//ex----------------------------------------------------

setTimeout(()=> {
    console.log("printing after the timer is done")
},100)


// object
//------------
const person = {};
person.firstname = "john";
person.lastname = "Doe";

const car = { model: "Nissan", color: "black", price: 4000 };

console.log(car.model);
console.log(car["price"]);

/////

const personn = {
    firstName: "nasr",
    lastName: "nasr",
    age: 25,
    major: "CS",

    showFullName: function(){
        return this.firstName + " " + this.lastName
    }
};

console.log(personn.showFullName());

/// string
//----------------

let name = 'elie';
let fullname = "nasr nasr";
let namee = new String("nasr nasr");

console.log(namee == fullname); // true
console.log(namee === fullname);// false
console.log(typeof(namee));//object
console.log(typeof(fullname));//string


console.log(fullname.length);//9


//slice: this function extract a part of a string and extract this part to a new variable
//------------------------ex

let fruits = "Apple, Banana, orange";
let partofFruits = fruits.slice(7,13);
console.log(partofFruits);// Banana
let partofFruit = fruits.slice(-14);
console.log(partofFruit);// Banana, orange


//substring , the diff between slice and substring ,iza 7attayna lstart wel end negative bte3tebera mnel 0

let s = fruits.substring(7,13);
console.log(s); // Banana
let s1 = fruits.substring(-13);
console.log(s1);// Apple, Banana, orange

//substr another method for slice, start index wkam character mn3edd ba3d menno
let s2 = fruits.substr(0,6);
console.log(s2); // Banana
let s3 = fruits.substr(-14,10);
console.log(s3);// Banana, or

//replace : bet8ayyera awwal marra 
// replaceAll: bet8ayyera kel marra
let text = "techlarious is hosting a fullstack mern bootcamp";
let newText = text.replace("mern","mean");
console.log(newText);//techlarious is hosting a fullstack mean bootcamp


//uppercase, lowercase
let x = "Hello World";
console.log(x.toUpperCase());//HELLO WORLD
console.log(x.toLowerCase());//hello world

//concat
let part1 = "naser";
let part2 = "naser";

let fullnamee = part1.concat(" ", part2);
console.log(fullnamee);//naser naser

 
//1: create a function that act as the built in replaceAll function?





//2: Create a function that act as the built in concat function


function concact(){
    let firstname ="nasr";
    let lastname ="nasr";
    const fullname = firstname +" "+ lastname;
    return fullname;
}
console.log(concact());

"// Create a function that act as the built in concat function without using built in function? /"








