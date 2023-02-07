const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


let generateEl = document.getElementById("gen-button")
let passOne= document.getElementById("pass1")
let passTwo= document.getElementById("pass2")

let gnt = false



// generateEl.addEventListener("click", 
function generate(){
    
    
  
   if(gnt===false){ 
   for(let i=0; i< 8; i++){
    let randomPass1=  Math.floor( Math.random() * characters.length )
   
    passOne.textContent+= characters[randomPass1];
  
   }
   
   for(let i=0; i< 10; i++){
     let randomPass2=  Math.floor( Math.random() * characters.length )
       passTwo.textContent+= characters[randomPass2];
   }
   gnt= true;

   }
   
    
   
    
}

function playTune(){

    document.getElementById("audioPlay").play();
        
    }
    

