const prompt=require('prompt-sync')();
// let tipPercentage=prompt("tip %?")/100;
// let food=prompt("Enter food price");
// tip=food*tipPercentage;
// console.log(tip);

//ternary Operartor
// let age=6;
// let drink=age>=5 ? "Coffee" : "Milk";
// console.log(drink);

//and or operator

// let firstName="Ram";
// let age=12;

// if(firstName[0]==="R" && age>=18){
//     console.log("Name is start with R and age is above 18")
// }else{
//     console.log("condition is false")
// }


// oroperartor ifany one istrue then over all will be true
// let firstName="Ram";
// let age=12;

// if(firstName[0]==="R" || age>=18){
//     console.log("Name is start with R and age is above 18")
// }else{
//     console.log("condition is false")
// }



// nested if else
// let winningNumber=19;
// let userGuess= +prompt("Guess a number :  ");
// if(userGuess===winningNumber){
//     console.log("You are a Winner");
// }else if(userGuess<winningNumber){
//     console.log("Youare down to winning number");
// }else if(userGuess>winningNumber){
//     console.log("You are far away to winning number")
// }
// console.log(typeof userGuess,userGuess);


//while loop

// let i=0;
// while(i<=9){
//     console.log(i);
//     i++;
// }


//problem

// let i=1;
// let sum=0;
// while(i<=100){
//     sum+=i;
//     i++
// }
// console.log(sum);

// let num=100;
// let total=(num*(num+1))/2;
// console.log(total);

//for loop
// for(let i=0;i<=9;i++){
//     console.log(i);
// }


//Arrays --> oredered collectionof items

// let fruits=["apple","mango","grapes"];
// console.log(fruits[2]);
// console.log(Array.isArray(fruits));
// console.log(typeof fruits);


//how to clone an array

let array1=["item1","item2"];

// let array2=array1.slice(0);   // firstmethod

// console.log( array2);

// let array2=[].concat(array1);   //second ,method
// console.log(array2);

// let array2=[...array1];   //spread operartor
// console.log(array2);


//loop on an array
// let fruits=["mango","banana","apple","pineapple"];

// let newArray=[];

// for(let i=0;i<fruits.length;i++){
//     // console.log(fruits[i].toUpperCase());

//     newArray.push(fruits[i].toUpperCase());
// }
// console.log(newArray);



//array using const--> this isusedby maximum developer

// const arr=["mango","banana","grapes"];

// const arr1=[];

// let i=0;
// while(i<arr.length){
//     arr1.push(arr[i].toUpperCase());
//     i++;
// }

// console.log(arr1);

//for of loop

// const fruits=["mango","apple","banana"];

// for(let fruit of fruits){
//     console.log(fruit);
// }


////forin loop

// const fruits=["mango","apple","banana"];
// const fruit=[];
// for(let index in fruits){     //this will give you an index
//     console.log(fruits[index]);
// }



//array destructureing
// const myarray=["Value1", " Value2"];

// let [myarray1,myarray2]=myarray;

// console.log(myarray1);
// console.log(myarray2);


// const myarray=["Value1", " Value2", "value3","value4","value5"];

// let [myarray1,myarray2, ...myNewArray]=myarray;

// console.log(myarray1);
// console.log(myarray2);
// console.log(myNewArray);


//objects 
//create an objects
let person={Name:"Ram Maurya",Age:19};
console.log(person);
console.log(typeof person);

console.log(person.Name);
