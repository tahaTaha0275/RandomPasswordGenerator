const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const pass_El1 = document.querySelector("#password1")
const pass_El2 = document.querySelector("#password2")

function generatePassword(){
    let password1 = ""
    for(let i = 0; i < 15; i++){
        password1+=characters[randomIndexGenerator()]
    }
    pass_El1.textContent = password1
    
    let password2 = ""
    for(let i = 0; i < 15; i++){
        password2+=characters[randomIndexGenerator()]
    }
    pass_El2.textContent = password2
    
    pass_El1.style.color = "#10B981"
    pass_El2.style.color = "#10B981"
}

function randomIndexGenerator(){
    return Math.floor(Math.random()*characters.length)
}


