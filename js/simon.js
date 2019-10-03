console.log("hi amy")

const monoButton = document.querySelector('.monochromatic')
var divClone = $("#game-wrapper").clone();

// remvoeImages = () =>{

// }

// var image_x = document.getElementById('image_X');
// image_x.parentNode.removeChild(image_x);

changeToMono = () =>{
    $('#token1').css("background-color", "black")
    $('#token2').css("background-color", "gray")
    $('#token3').css("background-color", "darkblue")
    $('#token4').css("background-color", "darkgray")
    console.log("banana")
}
monoButton.addEventListener('click', function(){
    $("#game-wrapper").replaceWith(divClone);
    setTimeout(changeToMono, 50)
})

const triDiButton = document.querySelector('.tri-di-chromatic')

triDiButton.addEventListener('click', function(){
    location.reload(true)
    $('#token1').css("background-color", "palevioletred")
    $('#token2').css("background-color", "palegreen")
    $('#token3').css("background-color", "lightblue")
    $('#token4').css("background-color", "palegoldenrod")
})

const physicalButton = document.querySelector('.physical')

physicalButton.addEventListener('click', function(){
    $('#token1').prepend('<img id="number1" src="css/pictures/number1.png" />')
    $('#token2').prepend('<img id="number1" src="css/pictures/number2.png" />')
    $('#token3').prepend('<img id="number1" src="css/pictures/number3.png" />')
    $('#token4').prepend('<img id="number1" src="css/pictures/number4.png" />')
})


