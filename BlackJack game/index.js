
    let cardEl = document.getElementById("cards-el");
    let sumEl = document.getElementById("sum-el");
    let messageEl = document.getElementById("message-el");
    let sum =0;

let isAlive = false;
let hasWon = false;

function getRandomCard(){
    let randomNumber =  Math.floor(Math.random() * 13) + 1  

    if(randomNumber > 10) return 10;
    else if(randomNumber===1) return 11;
    else return randomNumber;
}



function startGame() {

    isAlive= true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards= [firstCard, secondCard]
    sum = firstCard + secondCard;
    


  renderGame();
}



function renderGame() {
   
    cardEl.textContent = "Cards: " ;
    for(let i = 0; i< cards.length; i++){
        cardEl.textContent+= cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum;

  if (sum < 21) {
    message= "Draw the new Card!";
    isAlive = true;
  } 
  
  else if (sum === 21) {
    message= "Woohoo! You have got the BlackJack.";
    document.getElementById("sound2").play();
    hasWon = true;
  }
  
  else {
    message= "You are out of the game :(";
    isAlive = false;
    document.getElementById("sound3").play();
  }

  messageEl.textContent= message;
}

function drawCard() {

  if (isAlive && !hasWon) {
    let newCard = getRandomCard();
    sum += newCard;
    cards.push(newCard)
    renderGame();
  }
}


function playMusic() {
    if(isAlive && !hasWon){
    let playEl = document.getElementById('sound1')
    playEl.play();
    }
}

