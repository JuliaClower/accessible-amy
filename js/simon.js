console.log("hi amy")

//Token Click Events (sound and highlight)

var synth = new Tone.Synth().toMaster()

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

let button1 = token1Button.addEventListener('click', function () {
    userArray.push(1)
    toggle1()
})
const token2Button = document.querySelector('#token2')

let button2 = token2Button.addEventListener('click', function () {
    userArray.push(2)
    toggle2()
})
const token3Button = document.querySelector('#token3')

let button3 = token3Button.addEventListener('click', function () {
    userArray.push(3)
    toggle3()
})
const token4Button = document.querySelector('#token4')

let button4 = token4Button.addEventListener('click', function () {
    userArray.push(4)
    toggle4()
})

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
    $('#token1').css("background-color", "black")
    $('#token2').css("background-color", "gray")
    $('#token3').css("background-color", "darkblue")
    $('#token4').css("background-color", "darkgray")
    console.log("banana")
}

monoButton.addEventListener('click', changeToMono)

const triDiButton = document.querySelector('.tri-di-chromatic')

triDiButton.addEventListener('click', function () {
    removeImages()
    $('#token1').css("background-color", "palevioletred")
    $('#token2').css("background-color", "palegreen")
    $('#token3').css("background-color", "lightblue")
    $('#token4').css("background-color", "palegoldenrod")
})

const physicalButton = document.querySelector('.physical')

physicalButton.addEventListener('click', function () {
    $('#token1').css("background-color", "purple")
    $('#token2').css("background-color", "pink")
    $('#token3').css("background-color", "salmon")
    $('#token4').css("background-color", "cyan")
    $('#token1').html('<img id="number1" src="css/pictures/number1.png" />')
    $('#token2').html('<img id="number1" src="css/pictures/number2.png" />')
    $('#token3').html('<img id="number1" src="css/pictures/number3.png" />')
    $('#token4').html('<img id="number1" src="css/pictures/number4.png" />')
})

const removeImages = () => {
    $('#token1').html('')
    $('#token2').html('')
    $('#token3').html('')
    $('#token4').html('')
}

//game logic below
let getRandom = function () {
    const min = 1
    const max = 5
    let random = Math.floor(Math.random() * (+max - +min)) + +min
    console.log(random)
    numArray.push(random)
    return random
}

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

let startAmy = function () {
    getRandom()
    runSequence()
    setTimeout(isEqual, ((numArray.length) * 1800))
    userArray = []
}

startButton.addEventListener('click', startAmy)

//user + CPU input
let userArray = []
let numArray = []

//compare the user input to the numArray
function isEqual() {
    console.log('userArray', userArray)
    console.log('numArray', numArray)
    if (userArray.length !== numArray.length) {
        console.log("you lost :[ ");
        numArray = []
    }
    else {
        for (var i = 0; i < userArray.length; i++) {
            if (userArray[i] != numArray[i]) {
                console.log("you lost :[ ");
                return numArray = []
            }
        }
        startAmy()
        console.log('you won')
    }
}

