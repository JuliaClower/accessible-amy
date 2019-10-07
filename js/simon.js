console.log("hi amy")

//Token Click Events (sound and highlight)

var synth = new Tone.Synth().toMaster()
//synth code from https://jsfiddle.net/yotammann/uLkcsrxn/?utm_source=website&utm_medium=embed&utm_campaign=uLkcsrxn


//load the page with the "you lost" div invisible - this will become visible on the lose event
document.onload = document.querySelector('#youLost').style.opacity = "0.0";

//user toggle buttons showing purple background and playing sound
let toggle1 = function () {
    synth.triggerAttackRelease('C4', '8n')
    $('#token1').css('box-shadow', '0px 0px 83px 3px rgba(30,30,189,1)')
    setTimeout(turnOffShadow, 200)
}
let toggle2 = function () {
    synth.triggerAttackRelease('B4', '8n')
    $('#token2').css('box-shadow', '0px 0px 83px 3px rgba(30,30,189,1)')
    setTimeout(turnOffShadow, 200)
}
let toggle3 = function () {
    synth.triggerAttackRelease('G4', '8n')
    $('#token3').css('box-shadow', '0px 0px 83px 3px rgba(30,30,189,1)')
    setTimeout(turnOffShadow, 200)
}
let toggle4 = function () {
    synth.triggerAttackRelease('A4', '8n')
    $('#token4').css('box-shadow', '0px 0px 83px 3px rgba(30,30,189,1)')
    setTimeout(turnOffShadow, 200)
}

//CPU toggle buttons showing Red background and playing sound
let CPUtoggle1 = function () {
    synth.triggerAttackRelease('C4', '8n')
    $('#token1').css('box-shadow', '0px 0px 83px 3px rgba(255,0,0,1)')
    setTimeout(turnOffShadow, 200)
}
let CPUtoggle2 = function () {
    synth.triggerAttackRelease('B4', '8n')
    $('#token2').css('box-shadow', '0px 0px 83px 3px rgba(255,0,0,1)')
    setTimeout(turnOffShadow, 200)
}
let CPUtoggle3 = function () {
    synth.triggerAttackRelease('G4', '8n')
    $('#token3').css('box-shadow', '0px 0px 83px 3px rgba(255,0,0,1)')
    setTimeout(turnOffShadow, 200)
}
let CPUtoggle4 = function () {
    synth.triggerAttackRelease('A4', '8n')
    $('#token4').css('box-shadow', '0px 0px 83px 3px rgba(255,0,0,1)')
    setTimeout(turnOffShadow, 200)
}


//click events for each button to show that shadow and then turn off
const token1Button = document.querySelector('#token1')
token1Button.addEventListener('click', function () {
    userArray.push(1)
    toggle1()
})
document.addEventListener('keydown', function (event) {
    if (event.which === 49) {
        userArray.push(1)
        toggle1()
    }
})

const token2Button = document.querySelector('#token2')
token2Button.addEventListener('click', function () {
    userArray.push(2)
    toggle2()
})
document.addEventListener('keydown', function (event) {
    if (event.which === 50) {
        userArray.push(2)
        toggle2()
    }
})

const token3Button = document.querySelector('#token3')
token3Button.addEventListener('click', function () {
    userArray.push(3)
    toggle3()
})
document.addEventListener('keydown', function (event) {
    if (event.which === 51) {
        userArray.push(3)
        toggle3()
    }
})

const token4Button = document.querySelector('#token4')
token4Button.addEventListener('click', function () {
    userArray.push(4)
    toggle4()
})
document.addEventListener('keydown', function (event) {
    if (event.which === 52) {
        userArray.push(4)
        toggle4()
    }
})

//function to turn the shadowbox off of each button
const turnOffShadow = () => {
    $('#token1').css('box-shadow', 'none')
    $('#token2').css('box-shadow', 'none')
    $('#token3').css('box-shadow', 'none')
    $('#token4').css('box-shadow', 'none')
}

//Accessibility buttons below
const monoButton = document.querySelector('.monochromatic')

changeToMono = () => {
    removeImages()
    $('#token1').css('background-image', 'radial-gradient(black 30%, transparent 0), radial-gradient(gray 30%, transparent 0)')
    $('#token1').css('background-size', '30px 30px')
    $('#token1').css('background-color', 'white')
    $('#token1').css('background-position', '0 0, 15px 15px')
    //polkadot code from https://codepen.io/danichk/pen/YyVeXa
    $('#token2').css('background-image', 'repeating-linear-gradient(180deg, black, black 10px, white 10px, white 20px)')
    $('#token3').css('background-image', 'repeating-linear-gradient(90deg, black, black 20px, white 20px, white 40px)')
    //adapted stripes from https://css-tricks.com/stripes-css/
    $('#token4').css("background-color", "black")
    console.log("banana")
}

monoButton.addEventListener('click', changeToMono)

const triDiButton = document.querySelector('.tri-di-chromatic')

triDiButton.addEventListener('click', function () {
    removeImages()
    $('#token1').css('background-image', '')
    $('#token1').css('background-size', '')
    $('#token1').css('background-position', '')
    $('#token1').css("background-color", "palevioletred")
    $('#token2').css('background-image', '')
    $('#token2').css('border', '3px solid black')
    $('#token2').css("background-color", "palegreen")
    $('#token3').css('background-image', '')
    $('#token3').css('border', '3px solid black')
    $('#token3').css("background-color", "lightblue")
    $('#token4').css("background-color", "palegoldenrod")
})

const physicalButton = document.querySelector('.physical')

physicalButton.addEventListener('click', function () {
    $('#token1').css('background-image', '')
    $('#token1').css('background-size', '')
    $('#token1').css('background-position', '')
    $('#token1').css("background-color", "palevioletred")
    $('#token2').css('background-image', '')
    $('#token2').css('border', '3px solid black')
    $('#token2').css("background-color", "palegreen")
    $('#token3').css('background-image', '')
    $('#token3').css('border', '3px solid black')
    $('#token3').css("background-color", "lightblue")
    $('#token4').css("background-color", "palegoldenrod")
    $('#token1').html('1')
    $('#token2').html('<img id="number1" src="css/pictures/number2.png" />')
    $('#token3').html('<img id="number1" src="css/pictures/number3.png" />')
    $('#token4').html('<img id="number1" src="css/pictures/number4.png" />')
    // $('#token1').html('<img id="number1" src="css/pictures/number1.png" />')
    // $('#token2').html('<img id="number1" src="css/pictures/number2.png" />')
    // $('#token3').html('<img id="number1" src="css/pictures/number3.png" />')
    // $('#token4').html('<img id="number1" src="css/pictures/number4.png" />')
})

const removeImages = () => {
    $('#token1').html('')
    $('#token2').html('')
    $('#token3').html('')
    $('#token4').html('')
}

//game logic below

//when run, this function will pull a random number between 1 and 4. 
let getRandom = function () {
    const min = 1
    const max = 5
    let random = Math.floor(Math.random() * (+max - +min)) + +min
    console.log(random)
    numArray.push(random)
    return random
}


//when run, this function will go thru the current random number array and light-up the buttons
let runSequence = function () {
    for (let i = 0; i < numArray.length; i++) {
        setTimeout(function () {
            console.log(numArray[i])
            if (numArray[i] === 1) {
                CPUtoggle1()
            }
            if (numArray[i] === 2) {
                CPUtoggle2()
            }
            if (numArray[i] === 3) {
                CPUtoggle3()
            }
            if (numArray[i] === 4) {
                CPUtoggle4()
            }
        }, 500 * i
        )
    }
}

let startButton = document.querySelector('#start-button')

//this is the main game function. when the start button is clicked, it will run the main game. 
let startAmy = function () {
    document.querySelector('#youLost').style.opacity = "0.0";
    getRandom();
    runSequence();
    setTimeout(isEqual, ((numArray.length * 1000) + 1500))
    userArray = []
}

//score variables
let currentScore = 0
let scoreDisplay = document.querySelector('#score')
scoreDisplay.textContent = 'SCORE : ' + currentScore++

startButton.addEventListener('click', function() {
    startAmy()
    document.getElementById('score').style.WebkitAnimationPlayState = 'paused';
    document.getElementById('start-button').style.WebkitAnimationPlayState = 'paused';
    currentScore = 0
    scoreDisplay.textContent = 'SCORE : ' + currentScore++
})

//user + CPU input
let userArray = []
let numArray = []

//compare the user input to the numArray
function isEqual() {
    console.log('userArray', userArray)
    console.log('numArray', numArray)
    if (userArray.length !== numArray.length) {
        console.log("you lost :[ ");
        document.getElementById('score').style.WebkitAnimationPlayState = 'running';
        document.getElementById('start-button').style.WebkitAnimationPlayState = 'running';
        document.querySelector('#youLost').style.opacity = "100";
        numArray = []
    }
    else {
        for (var i = 0; i < userArray.length; i++) {
            if (userArray[i] != numArray[i]) {
                console.log("you lost :[ ");
                document.getElementById('score').style.WebkitAnimationPlayState = 'running';
                document.getElementById('start-button').style.WebkitAnimationPlayState = 'running';
                document.querySelector('#youLost').style.opacity = "100";
                return numArray = []
            }
        }
        startAmy()
        scoreDisplay.textContent = 'SCORE : ' + currentScore++
        console.log('you won')
    }
}

