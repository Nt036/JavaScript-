
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
//Mixed array
let mixedarray = [1,"June",true,null];
console.log(mixedarray);


//Concatenation(joining variables)
//let surName = "Smith";
//let givenName = "Ssemwanga";
//const fullName = surName + " " + givenName ;
//console.log(fullName);
//let firstName = "Mark";
//let lastName = "Doe";
//const nameStatement = "His name is " + " " + firstName + " " + lastName;
//console.log(nameStatement) 
let surName = "Jane";
let givenName = "Kimuli";
const fullName = surName + " " + givenName ;
const nameStatement = "Her name is" + " " + surName + " " + givenName ;
console.log(fullName);
console.log(nameStatement);

//Operators
//arithmetic operators(they let us do math with numbers whether they are variables literals or expressions)
//Basic Operators
//Addition(+),Subtraction(-),multiplication(*),division(/),modulus(%),increment(++), decrement(--),exponentiation(**)
//Addition(adds numbers together , using (+))
let t = 5 + 2;
console.log(t);

//Subtraction(subtract numbers from each other, using (-))
let r = 5 - 2;
console.log(r);

//Multiplication(scales numbers , using(*))
let j = 5 * 2;
console.log(j);

//Division(splits numbers into equal parts , using(/))
let w = 5 / 2;
console.log(w);

//Modulus(finds the remainder after division , using(%))
//Useful for checking even or odd numbers.
//Widely used in gaming logic and loop conditions.
let q = 5 % 2;
console.log(q);

//Increment(increases a number by 1 , using(++))
//Great for counters and loops.
let h = 5;
console.log(h);

//Decrement(decreases a number by 1 , using(--))
let m = 5;
console.log(m);

//exponentiation(raise a number by a power , using(**))
let g = 5**2;
console.log(g);

//Parentheses() overrides Precedence
let v = (100+50)*3;
console.log(v);

//CONDITIONAL STATEMENTS
let mark ;
mark = 50;
//let condition = mark > 50;
//If (condition)
if (score => 50) {
    //code to be executed if condition is true
    console.log("You Passed");
} else {
    //code to be executed if condition is false    
}
//Comparison Operators
//Equal to (==) and strict Equal to (===)
let value ;
value = "10"
if (value === 10){
    console.log("True,they are equal"); //this will not execute
}
if (value !== "20"){
    console.log("True, they are not equal");
}
//more than two conditions
let nun ;
nun = 75;
if (nun >= 95){
    console.log("Grade A");

}else if (nun >=85) {
    console.log("Grade B");

}else if (nun >=75){
    console.log("Grade C");

}else {
    console.log("You have failed");
}
//Functions
//Function Declarations
function functionName(paramas){
    console.log("This is a function declaration");
}

//Call a function
functionName();

//Function with parameters
function greet(name,age) {
    console.log("Hello , my name is" + name + "and Iam" + age + "years old.");
}

greet("Brenda", 11);
greet("Jane" , 22);
greet("Isma");

//Functions with return valu
function add(a,b) {
    return a+b
}
console.log(add(2,3));
console.log(add(378,678));
console.log(add(99,7));

//Arrow Function
const multiply = function (x,y) {
    return x*y;
}
//or using ES6 arrow function syntax
const arrowfunc = () => {
    console.log("This is an arrow function");
}

const multiplyArrow = (x,y) => x*y;

console.log(multiply(3,4));
console.log("This is the result of arrow function: " + multiplyArrow(3,4));

//Arrow function with multiple lines
const complexFunc = (a,b) => {
    let sum = a+b;
    let product = a*b;
    let diff = a-b;
    return { sum:sum , product, difference:diff};
}
console.log(complexFunc(5,6));


//Loops
//For loop
const colors = ["Red" , "Green" , "Blue" , "Yellow"]
console.log(colors);

//Methods under arrays ie Push, Pop, Shift, Unshift, Length, LengthOf, Includes, Slice, Join, Concat
//Length
console.log(colors.length)  //4
console.log(colors[1])  //Green
console.log(colors[3])  //Yellow

//Push
colors.push ("purple");
console.log(colors);  //["Red", "Green", "Blue", "Yellow"]

//Push
//colors.push ("purple");


//Using a loop to iterate through an array
for (let i = 0; i < colors.length; i++){
    console.log("This is from the loop" , colors);
}

