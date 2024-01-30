
// var shadowedVar = "I am gloabal";
// function exampleFunction(){
  
//         let shadowedVar  = "I am function-scoped";
//         // console.log(shadowedVar);
//         }
//         console.log(shadowedVar);


// console.log(functions  copedVar);


// console.log(x);//undefined
// let x=5;
// console.log(x);//5

// let count = 0;
// while(count<5){
//     console.log(count);
//     count++;
// }

// let person ={name:"John",age:30,occupation:"Developer"};
// for(let key in person){
//     console.log(key + ":"+person[key]);
// }


// let car = {
//     make:"Toyota",
//     model:"Camry",
//     year:2022,
//     isElectric:false,
//     start:function(){
//         console.log("Engine started!");
//     }
// };

// console.log(car.make);
// console.log(car.year);

// car.start();




// OBJECT CONSTRUCTOR

// function Book(title,author,year){
//     this.title=title;
//     this.author=author;
//     this.year=year;
// }

// let book1 = new Book("The catcher in the Rye","J.D.Salinger",1951);
// let book2 = new Book ("To kill a Mockingbird","Harper Lee",1960);

// console.log(book1.author);

// ARRAYS

// let fruits = ["apple","banana","orange","grape"];

// console.log(fruits[0]);
// console.log(fruits[2]);

// fruits.push("kiwi");
// console.log(fruits);

// fruits.unshift("mango");
// console.log(fruits);

// let removedLast = fruits.pop();

// let removedFirst = fruits.shift();


// FINDING INDEX OF AN Element

// let indexOfrange = fruits.indexOf("orange");

//Iteration using a for loop
// for(let i =0; i < fruits.length;i++){
//     console.log(fruits[i]);

// }

// SLICING IN ARRAY

// let citrus = fruits.slice(1,3);
// console.log(citrus);


// splice (adding element at specific index)

// let removed = fruits.splice(1,2,"pear","melon");

//Concatenating arrays

// let moreFruits = ["grapefruits","pineapple"];
// let allFruits  = fruits.concat(moreFruits); 


// Function EXPRESSION
// const product = multiply(4,6);
// const multiply = function(a,b){
//     return a*b;
// };

// INVOCATION

// const product = multiply(4,6);
//console.log("Function Expression - Product:",product);

// Arrow Function

// const subtract = (a,b) => a-b;

// const difference = subtract(8,3);
// console.log('Arrow Function - Difference:',difference);


// try{
//     throw new Error("An error");
// }catch (error){
//     console.error(error.message);
// }finally{
//     console.log("Cleanup code");
// }
// const delayedFunction = () => {
//     console.log('Delayed function executed!');

// };
// setTimeout(delayedFunction,2000);

// const delayedFunction = () => {
//     console.log('Repeated function executed!');

// };
// const intervalId = setInterval(repeatedFunction,1000);

// function repeatedFunction() {
//     console.log('Executing repeated function...');

// }
// const intervalId = setInterval(repeatedFunction,1000);

// setTimeout(() => {
//     clearInterval(intervalId);
//     console.log('Interval stopped.');
// },5000);


//SYNCHRONOUS CALLBACK Function

// function parentFunction(name,callback){
// callback();
// console.log("Hey "+ name);
// }
// function randomFunction(){
//     console.log("Hey I am callbackfunction");
// }

// parentFunction("Random String",randomFunction);


// ASYNCHRONOUS CALLBACK Function

function parentFunction(name,callback){
    setTimeout(callback,1000);
    console.log("Hey "+ name);
    }
    function randomFunction(){
        console.log("Hey I am callbackfunction");
    }
    
    parentFunction("Random String",randomFunction);
