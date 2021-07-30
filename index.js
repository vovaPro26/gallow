'use strict'


let enteredWord;
let randomWord;
let errorCounter = 0;



const sayHello = function(){
    const name = getUserName();
    if (!name.length) {
        alert(`Привіт, незнайомцю`);
    }
    else {
        alert(`Привіт ${name}`);
    }
}


const chooseRandomWord = function() {
    let words = ["ТРИКУТНИК","КВАДРАТ","КОЛО","РОМБ","ОВАЛ","ПАРАЛЕЛЕПІПЕД","ПРЯМОКУТНИК","СЕРЦЕ","ПЛЮС","МІНУС","ДОРІВНЮЄ"];
    let randNumber = randNum(0,words.length);
    return words[randNumber];
}

const startGame = function() {
    // alert(`ГРА ПОЧИНАЄТЬСЯ!!!`);
    errorCounter = 0;
    refreshHeart()
    changeImg(errorCounter);
    let allInput = document.getElementById("texteAndButomn")
    randomWord = chooseRandomWord();
    console.log(randomWord);
    enteredWord = getWordTemplate(randomWord);
    console.log(enteredWord);
    showWord(enteredWord);
    allInput.classList.remove("hiden");
}
    
const showWord = function(arra) {
    let word = document.getElementById("letters");
    word.innerText = arra.join(" ");
    
}

const errorHeart = function(errorCount) {
    for (let i = 1;i <= 6; i++ ) {
        if (errorCount >= i) {
            let className = "heart" + i;
            let heart1 = document.getElementById(className);
            heart1.classList.add("hiden");
        }
    }
}

const refreshHeart = function() {
    for (let i = 1;i <= 6 ; i++) {
        let className = "heart" + i
        let heart1 = document.getElementById(className);
        heart1.classList.remove("hiden")
    }
}

const askUserForLetter = function () {
    let letter = prompt("Яка буква?");
    if(letter===null) {
        return null;
    }
    else if(letter.length !== 1) {
        ("Введи один символ :D");
    }
    else {
        return letter.toUpperCase();
    }
}

const isWordGuessed = function(arr) {
    return !arr.includes("_");
}

const getWordTemplate = function(word) {
    let lowDashes = [];
    for(let i = 0; i < word.length; i++) {
        lowDashes.push("_");
    };
    return lowDashes;
}

const randNum = function(minNumber,maxNumber) {
    var numberUn = maxNumber - minNumber;
    var randomNumber = Math.floor(Math.random() * numberUn + minNumber );
    return randomNumber;
}

const getUserName = function() {
    if(userName === "") {
        return `незнайомець`;
    }
    else {
        return userName;
    }
}

const userLoginName = function() {
    let GuesedWord1 = document.getElementById("GuesedWord1")
    let loginContainer = document.getElementById("loginContainer");
    let allInput = document.getElementById("gameHost")
    let inputNameElement = document.getElementById("userName");
    let inputName = inputNameElement.value;
    if (inputName === "") {
        showFirstMessage("Введи своє ім'я!!!");
    }
    else {
        GuesedWord1.classList.remove("hiden")
        loginContainer.classList.add("hiden");
        allInput.classList.remove("hiden");
        startGame()
    }
}

const restartClick = function() {
    startGame()
    errorCounter = 0
    let restartDiv = document.getElementById("RestartButton");
    restartDiv.classList.add("hiden");
    restartDiv.classList.remove("refresh-button")
    showMessage("Починаємо знову☺");
}

const changeImg = function(errorCount) {
    let imageGallowsElement = document.getElementById("gallowsImage");
    let imageGallows = "Gallow" + errorCount + ".png";
    imageGallowsElement.src=imageGallows;
    if (errorCounter === 0) {
        imageGallows = "Gallow0.png"
    }
}

const enterPress = (e) => {
    console.log(e.keyCode);

    if (e.keyCode == 13) {
        console.log("Enter pressed");
        checkUserInput()
    }
}

const buttonClick = function() {
    checkUserInput()
}

const checkUserInput = () => {
    let restartDiv = document.getElementById("RestartButton")
    let inputLetterElement = document.getElementById("inputText");
    let inputLetter = inputLetterElement.value.toUpperCase();
    let allInput = document.getElementById("texteAndButomn");

    if(inputLetter==="") {
        showMessage("Ну ти введеш щось, чи ні!?");
    }
    else if (inputLetter.length>=2) {
        showMessage("введи один символ");
        inputLetterElement.focus();
        inputLetterElement.value="";
        return;
    }
    let checking = randomWord.includes(inputLetter);
    if (checking) {
        for(let i = 0; i <= randomWord.length; i++) {
            if (inputLetter===randomWord[i]) {
                enteredWord[i] = inputLetter;
            }
        }
    }
    else if (!checking) {
        errorCounter += 1;
    }
    showWord(enteredWord);
    inputLetterElement.value="";
    inputLetterElement.focus();
    errorHeart(errorCounter);
    changeImg(errorCounter);
    isWordGuessed(enteredWord)
    if (isWordGuessed(enteredWord)) {
        showMessage("Ти виграв." + " Ти вгадав слово " + randomWord);
        allInput.classList.add("hiden");
        restartDiv.classList.remove("hiden");
        restartDiv.classList.add("refresh-button")
    }
    if (errorCounter > 5) {
        showMessage("Ти програв." + " Ти не вгадав слово " + randomWord);
        allInput.classList.add("hiden");
        restartDiv.classList.remove("hiden");
        restartDiv.classList.add("refresh-button");
    }
}

const butomnOn = function() {
    let btn = document.getElementById("button");
    btn.className = "buton2";
}

const butomnOff = function() {
    let btn = document.getElementById("button");
    btn.className = "buton1";
}

const showMessage = function(message) {
    let descriptionText = document.getElementById("description");
    descriptionText.innerText = message;
}

const showFirstMessage = function(message) {
    let descriptionText = document.getElementById("firstMassage");
    descriptionText.innerText = message;
}


// // var h = document.createElement('h1');
// // let hh = document.createTextNode("hello");
// // h.appendChild(hh);
// // newDiv.appendChild(h);


