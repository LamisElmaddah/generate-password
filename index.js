const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const generateBtn = document.getElementById("generate-btn")
let randomPasswordOneEl = document.getElementById("randomPasswordOne")
let randomPasswordTwoEl = document.getElementById("randomPasswordTwo")
let randomPasswordOne = " "
let randomPasswordTwo = " "
let passwordLength = 15
generateBtn.addEventListener("click", generateRandomPassword)
generateBtn.addEventListener("click", generateRandomPasswordTwo)

function getRandomCharacter() {
    let randomChar = Math.floor(Math.random() * characters.length)
    return characters[randomChar]
}
function generateRandomPassword() {
    let randomPasswordOne = ""
    for (let i = 0; i < passwordLength; i++) {
        randomPasswordOne += getRandomCharacter()  
        randomPasswordOneEl.textContent = randomPasswordOne       
    }
    return randomPasswordOne
}


function generateRandomPasswordTwo() {
    let randomPasswordTwo = " "
    for (let i = 0; i < passwordLength; i++) {
        randomPasswordTwo += getRandomCharacter()  
        randomPasswordTwoEl.textContent = randomPasswordTwo       
    }
    return randomPasswordTwo
}



