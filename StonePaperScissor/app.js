let userscore=0;
let compscore=0;
console.log("its runable")

const choices=document.querySelectorAll("#img1");
const result=document.querySelector(".result");

const userpara=document.querySelector(".you");
const comppara=document.querySelector(".comp");

const drawgame=()=>{
    console.log("Match was Draw");
    result.innerText="Game was Draw";
}



const gencompchs =()=>{
    const option=["Rock","Paper","Scissor"];
    const chsno=Math.floor(Math.random()*3);
    return option[chsno];
}

const playgame=(userchs)=>{
    console.log("user choice :- ",userchs);

    const compchs=gencompchs();
    console.log("comp choice :- ",compchs)

    if(userchs===compchs){
        drawgame();
        result.style.color="Black";
        
    }
    else if(userchs=="Paper"){
        if(compchs=="Rock"){
            console.log("You win");
            result.innerText="You Won";
            result.style.color="green";
            userscore++;
            userpara.innerText=userscore;
        }
        else if(compchs=="Scissor" ){
            console.log("comp win")
            result.innerText="Comp Won";
            result.style.color="Red";
            compscore++;
            comppara.innerText=compscore;
        } 
    }

    else if(userchs=="Scissor"){
        if(compchs=="Paper"){
            console.log("You win");
            result.innerText="You Won";
            result.style.color="green";
            userscore++;
            userpara.innerText=userscore;
        }
        else if(compchs=="Rock"){
            console.log("comp win")
            result.innerText="Comp Won";
            result.style.color="Red";
            compscore++;
            comppara.innerText=compscore;
        } 
    }

    else if(userchs=="Rock"){
        if(compchs=="Scissor"){
            console.log("You win")
            result.innerText="You Won";
            result.style.color="green";
            userscore++;
            userpara.innerText=userscore;
        }
        else if(compchs=="Paper"){
            console.log("comp win")
            result.innerText="Comp Won";
            result.style.color="Red";
            compscore++;
            comppara.innerText=compscore;
        } 
    }
}

choices.forEach((choice)=>{
    console.log(choice);
    const userchs=choice.getAttribute("class");
    choice.addEventListener("click",()=>{
        playgame(userchs);
    })
})