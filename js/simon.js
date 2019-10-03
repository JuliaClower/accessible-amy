console.log("hi amy")

//Token Click Events (sound and highlight)

//click events for each button to show that shadow and then turn off
const token1Button = document.querySelector('#token1')

token1Button.addEventListener('click', function () {
    $('#token1').css('box-shadow', '0px 0px 83px 3px rgba(30,30,189,1)')
    setTimeout(turnOffShadow, 200)
})
const token2Button = document.querySelector('#token2')

token2Button.addEventListener('click', function () {
    $('#token2').css('box-shadow', '0px 0px 83px 3px rgba(30,30,189,1)')
    setTimeout(turnOffShadow, 200)
})
const token3Button = document.querySelector('#token3')

token3Button.addEventListener('click', function () {
    $('#token3').css('box-shadow', '0px 0px 83px 3px rgba(30,30,189,1)')
    setTimeout(turnOffShadow, 200)
})
const token4Button = document.querySelector('#token4')

token4Button.addEventListener('click', function () {
    $('#token4').css('box-shadow', '0px 0px 83px 3px rgba(30,30,189,1)')
    setTimeout(turnOffShadow, 200)
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
let getRandom = function() {
    const min = 1
    const max = 5
    let random = Math.floor(Math.random() * (+max - +min)) + +min
    console.log(random)
    if (random === 1) {
        console.log('button1')
    }
    if (random === 2) {
        console.log('button2')
    }
    if (random === 3) {
        console.log('button3')
    }
    if (random === 4) {
        console.log('button4')
    }
    return random
}

let randomArray = function () {
    console.log('getRandom', getRandom)
    let numArray = []
    for (i = 0; i < 6; i++) {
        numArray.push(getRandom())
        console.log(numArray)
    }
    return numArray;
}

randomArray()
