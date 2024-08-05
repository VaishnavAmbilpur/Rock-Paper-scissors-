let userScore =0;
let compScore =0;
const msg = document.querySelector("#msg");
const choices = document.querySelectorAll(".choice");
const draw =() =>{
    console.log("draw");
    msg.innerText = "Game was Draw";
    msg.style.backgroundColor = "#483d8b";
}

const usesc = document.querySelector("#user1");
const usesc2 = document.querySelector("#user2");



const winner = (w) =>{
    if(w){
        userScore++;
        usesc.innerText = userScore;
        msg.innerText = "You Win";
        msg.style.backgroundColor = "green";
    } else{
        compScore++;
        usesc2.innerText = compScore
        msg.innerText = "You lose";
        msg.style.backgroundColor = "red";
    }
}
const comchoice = () =>{
     const options = ["Rock","Paper","Scissors"];
    const ran =  Math.floor(Math.random() * 3);
    return options[ran];
}
const playgame =(choiceId) =>{
    console.log("user choice =",choiceId);
  //Generate Computer choice
    const computer = comchoice();
    console.log("com choice = ",computer);
    if(choiceId===computer){
       draw();
    } else{
        let w = true;
        if(choiceId==="Rock"){
            w = computer ==="Paper" ? false:true;
        } else if(choiceId ==="Paper"){
            w = computer === "Scissors" ? false : true;
        }
        else {
            w = computer === "rock" ? false:true;
        }
        winner(w);
    }

}
choices.forEach((choice)=>{
     choice.addEventListener("click",() => {
      const choiceId = choice.getAttribute("id");
      playgame(choiceId);
     });

});