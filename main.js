
//variabes(they are containers for storing data)
//They can be declared in four ways 
//Using var,let and const

//var(is deprecated or old fashioned)
var name = "john";
console.log(name);
var x = 5;
var y = 6;
var z = x + y;

//let(allows reassigning or dynamic or changing)
let age = 54;
age = 30;
console.log(age);

let a = 10;
let b = 27;
let c = a + b ;
console.log(c);


//const(for constant variables eg gender ,pi)
const pi = 3.14;
console.log(pi);
const myName = "Trinah";
console.log(myName);

const herName = "Jane";
const herAge = 41;
console.log(herName,herAge);

const price1 = 5;
const price2 = 6;
let total = price1 + price2;
console.log(total);

//two variable price1 and price2 are declared with the const keyword .
//they are constant values and cannot be changed.

//the variable total is declared with the let keyword.
//the total value can be changed.


//Data Types
//string,number,boolean,null,undefined,symbol,object,array

//string(text should be wrapped in quotes , double or single quotes)
let greeting = "How are you ?";
console.log(greeting);
let asking = "How much is the book ?"
console.log(asking);

//Number(any numeric value ie float or integer)
//integer(whole number ie without points)
let score = 100;
console.log(score);
let year = 2024;
console.log(year);
//float(numeric value with decimal points or fractions)
let price = 19.98;
console.log(price);

//Boolean(true or false ie yes or no logic)
let isLoggedIn = true;
console.log(isLoggedIn);

//Undefined(is a variable declared but not assigned)
let notAssigned ;
console.log(notAssigned);
let email ;
console.log(email);

//Null(a variable intentionally set to nothing or explicity no value)
let emptyValue = null;
console.log(emptyValue);
let profilePicture = null;
console.log(profilePicture);

//Object(key-value pairs or structured data or several data types within )
//placed in {}
let obj = {};
console.log(obj);
let person = {firstName : "Jackie",
              lastName : "Chan",
              age : age,
              isStudent : true,

};
console.log(person)
let user = {userName : "Juliet",
            age : age,
            isMember : true,
            email : email,
            profilePicture :profilePicture,
};
console.log(user);

//Array(list of items . Items are placed in [])
let fruits = ["mango","orange" ,"apple","guava","cherry","ovacado"];
console.log(fruits);
let domesticanimals =["cow","goat","sheep","rabbit",];
console.log(domesticanimals);

//Concatenation(joining variables)
let surName = "Smith";
let givenName = "Ssemwanga";
const fullName = surName + " " + givenName ;
console.log(fullName);
let firstName = "Mark";
let lastName = "Doe";
const nameStatement = "His name is " + " " + firstName + " " + lastName;
console.log(nameStatement) 