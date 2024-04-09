console.log("Its Run");


// /////////////   finding the largestnumber from array using the function
// x = marks(87, 57, 48, 92, 39, 99, 56, 76);

// function marks() {
//     let max = -Infinity;
//     for (let i = 0; i < arguments.length; i++) {
//         if (arguments[i] > max) {
//             max = arguments[i];
//         }
//     }
//     return max;
// }
// document.getElementById("demo").innerHTML = marks(87, 57, 48, 92, 39, 99, 56, 76);


// x = findMax(1, 123, 500, 115, 44, 88);

// function findMax() {
//   let max = -Infinity;
//   for (let i = 0; i < arguments.length; i++) {
//     if (arguments[i] > max) {
//       max = arguments[i];
//     }
//   }
//   return max;
// }
// findMax(1, 123, 500, 115, 44, 88);

// document.getElementById("demo").innerhtml=findMax;



// /////////////////////// callback function
// ///one function pass to another function as a argument or This technique allows a function to call another function  

// function display(some){
//     document.getElementById("demo").innerHTML=some;      // some is any string only need to update the value  after calculatin
// }                                                              

// function addition(num1,num2){
//     let sum= num1+num2;
//     display(sum);
// }

// addition(10,20);
myTitle = document.getElementById("demo").firstChild.nodeValue;


// //////////////////////Arrow function

// const sum=addition=(num1,num2)=>{
//     let sum=num1+num2;
//     console.log(sum);
// }

// sum(10,20);




// ************************************** JSON ********************************************

// // obj inside the curley bracket and this is in single quote ( ' ) 
// // array inside  the square bracket and attribute is in curley brackets and key value pair is in double quote
// // ( + ) sign is also in single quote

// let info = '{"employee":[' +
//     '{"Fname":"Abhijit","Lname":"Gaikwad"},' +
//     '{"Fname":"Akshat","Lname":"Tated"},' +
//     '{"Fname":"Sujal","Lname":"Lodha"}]}'

// const obj = JSON.parse(info);
// let fullname = "<h1>" + obj.employee[0].Fname + " " + obj.employee[0].Lname+ "</h1>";

// document.getElementById("demo").innerHTML = fullname;