// var num1 = 50;
// var num2 = 60;
// console.log(num1 + num2);                                                            
// console.log("Don dfyaddfnsd dfaeerhdfbb dfggafneern wryqf sddgdfneryqw fger ergvsjqetr ")
// console.warn("This is warning");
console.error("i am just checking it can be run rn  ")
// alert("Temperature is high");

///////string
// str1 ="This is the string 1";
// str2 ="This is the string 2";

//////object
// var lang={
//     cpp:60,
//     python:50,
//     HTML:80

// };

//////Boolean

////////undefined
// var groot;
// console.log(groot);

///////////////function

// function marks_avg(a,b,c,d)
// {
//     avg=(a+b+c+d)/4;
//     return avg;
// }

// c1=marks_avg(80,60,80,60);
// console.log(c1);

// let mydate= new Date();
// console.log(mydate.getDay())





////////////DOM manipulation
// let elemclass=document.getElementsByTagName(body)
// consol.log(elemclass)
// elemclass[1].style.background='aqua'
// document.getElementById('click').style.border='2px solid aqua'

// let elem=document.getElementById('click')
// console.log(elem.innerHTML)
// elem.style.borderColor="aqua";
// elem.style.background="yellow";



// *************************Ternery Opreator 

// let a=20;
// let result= a < 10 ? "Its Greater" : "Its Smaller";
// console.log(result)





// ************************* prompt **************
 // same as a alert but take a input message from user

// let a= prompt("Enter a number");
// // console.log(a);

// if(a%5==0){
//     console.log("Its Multiple of 5");
    
// }
// else{
//     console.log("Its Not Multiple of 5");
// }

//******************practice set question***********************

// let score = 43;

// if(score>=80 && score<=100){
//     console.log("A grade")
// }
// else if(score>=70 && score<=79){
//     console.log("B grade")
// }
// else if(score>=60 && score<=69){
//     console.log("C grade")
// }
// else if(score>=50 && score<=59){
//     console.log("D grade")
// }
// else if(score>=0 && score<=49){
//     console.log("F grade")
// }




//**************************** LOOP ****************************/

//************* For Loop */
// for(let i=1;i<=10;i++){
//     console.log("I am Groot");
// }


//*************8 While and Do-while loop are same as a cpp */


//******************************* For of & in */
//For of loop use for the string and array

// let i= "I am Groot";
// for(let key of i){
//     console.log("key =",key);
// }

// //For in loop use for object and array not for strings

// let student={
//     Name:"Abhijit",
//     Rollno:58,
//     contact:8767608157
// };

// for(let key in student){
//     console.log("key =",key," values =",student[key]);
// }


//*****************Practice set Problem */
//1
// for(let i=0;i<=100;i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }

// //2
//  let gesnum=70;
//  let usernum=prompt("Guess the number");

// while(gesnum != usernum){
//     usernum=prompt("You can guess wrong number");
// }
// console.log("Congratulation you can guess right number")





//************************** Template literals *****************/



// console.log("The price of",item," is ",50);

// let obj={
//     item:"pencil",
//     price: 10
// };
// let output=`The cost of ${obj.item} is ${obj.price}`;
// console.log(output+" its working");

// #overcome the problem of wrighting a "" , use the template literal 
// it same only `(backtick) are use 






//*************************************** string method ******************************/
//--------practice set question -----------
// let uname=prompt("Enter your Username");
// let Fchar="@";

// let str1=Fchar.concat(uname);
// let ulen=str1.length;

// let str2=str1.concat(ulen);
// console.log(str2);





//***************************************Array****************************/
// let age=[10,20,30,40,50];
// console.log(age);

// //looping in array

// let arrayele=["one","two","three","four","five","six","seven","eight","nine","ten"];

// for(let i=0;i<=9;i++){
//     console.log(i,' = ',arrayele[i]);
// }


// let i=0;
// while(i<=9){
//      console.log(i,' = ',arrayele[i]);
//      i++
// }


// let i=0;
// do{
//     console.log(i,' = ',arrayele[i]);
//     i++;
// }while(i!=9)


//-------------Practice set question--------------
// //1)
// let marks=[85,97,44,37,76,60];
// let result=0;
// for(let i=0;i<marks.length;i++){
//     result=result+marks[i];
// };
// average=result/6;
// console.log("Total Marks = ",result,"\nAverage Marks = ",average)

// //2)
// let price=[250,645,300,900,50];
// let offer;
// let offerprice;
// for(let i=0;i<price.length;i++){
//     offer=(price[i]/100)*10;
//     offerprice=price[i]-offer;
//     console.log(offerprice)
// };



//***********************************Array Methods**********************/

//PQ1)

let company=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];

// let a1=company.splice(0,1);
// console.log("a1 -> ",company);

let b1=company.splice(2,1,"Ola");
console.log("b1 -> ",company);

let c1=company.push("Amazon");
console.log("c1 -> ",company);



// ******************************** Function *****************************

// //PQ1)

// function vowel(msg){
//     let count=0;
//     for(let i=0; i<msg.length; i++){
//         if(msg[i]=="a" || msg[i]=="e" || msg[i]=="i" || msg[i]=="o" || msg[i]=="u" || msg[i]=="A" || msg[i]=="E" || msg[i]=="I" || msg[i]=="O" || msg[i]=="U"){
//             count=count+1;
//             console.log("Vovel =",msg[i]);
//         }
//     }
//     console.log("Count of vowel :- ",count);
// }
// vowel("Abhijit");


//************************ forEach function ***********************/

// let lang=["c++","js","html","css","mysql","python","pascal"];

// lang.forEach((val) => {
//     console.log(val);
// });


//*************************** Practice set question*********************/

//PQ1)
// let marks=[80,99,97,45,35,92,68];

// let toppers=marks.filter((val) =>{
//     return val>90;
// })

// console.log(toppers);


//PQ2)

// let num=prompt("Enter the n Numbers");
// let arr = []

// for(let i=1 ;i<=num;i++)
// {
//     arr[i-1]=i;
// }
// console.log(arr);

// let sumcalc=arr.reduce((pre,curr)=>{
//     pre=pre+curr;
//     return pre;
// })
// console.log(sumcalc);




//****************************Document Object Model***************************/

// let groot=document.getElementsByTagName("h2");
// console.log(groot);

// let groot1=document.querySelectorAll(".container2");
// console.dir(groot1);



// let selector=document.querySelectorAll(".container");
// console.dir(selector);

// let idx=1;
// for(sel of selector){
//     sel.innerText=`Container Value ${idx}`;
//     idx++;
// }


//************************  */


// let groot=document.querySelectorAll(".container");
// // console.log(groot);
// for(sel of groot){
//     groot.style.backgroundColor="green";
// }


//******************* Create Element ******************/

// let create=document.createElement("Button")
// create.innerText="I Am Groot";
// console.log(create);

// let part=document.querySelector(".part"); 
// part.append(create);

// // part.prepend(create)

// part.after(create)

// // part.before(create)




//**********************************Prectice Question *****************************/

// let cbtn=document.createElement("button");
// cbtn.innerText="Click me...";
// console.log(cbtn);

// cbtn.style.backgroundColor="red";
// cbtn.style.color="white";

// document.querySelector(".part").prepend(cbtn)  //if you cant write this property it cant add at html code and cant show in browser 



//*************************************** Event ******************************************* */


// let btn1=document.querySelector("#btn1")

// //node  event   arrowfunction
// btn1.onclick = () =>{
//     console.log("Button Was clicked");
//     alert("Fuck off");
// }

// btn1.onclick(console.log("Buttton was clicked"));



//****************** Event Listener************************* */

// let btn=document.querySelector('#btn1')
// btn.addEventListener("click",()=>{
//     console.log("Button is clicked of Event 1")
// })

// btn.addEventListener("click",()=>{
//     console.log("Button is clicked of Event 2")
// })


//PQ1******************************************

// let btn=document.querySelector('#btn1')
// let body=document.querySelector('body')
// let curcolor="white";
// btn.addEventListener("click",()=>{
//     if(curcolor=="white"){
//         body.style.backgroundColor="black";
//         curcolor="black";
//     }
//     else if(curcolor=="black"){
//         body.style.backgroundColor="white";
//         curcolor="white";
//     }
// })