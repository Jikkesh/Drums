
var numberOfButtons = document.querySelectorAll(".drum").length;

for(i=0; i<numberOfButtons ;i++){

    document.querySelectorAll("button")[i].addEventListener("click",function handleclick () 
{
    var buttoncliked = this.innerHTML;

    switch (buttoncliked) 
    {
        case "w":
            var audio = new Audio("./sounds/tom-1.mp3");
            audio.play();
            break;

        case "a":
            var audio = new Audio("./sounds/tom-2.mp3");
            audio.play();
            break;

        case "s":
                var audio = new Audio("./sounds/tom-3.mp3");
                audio.play();
                break;

        case "d":
                    var audio = new Audio("./sounds/tom-4.mp3");
                    audio.play();
                    break;

        case "j":
                        var audio = new Audio("./sounds/snare.mp3");
                        audio.play();
                        break;

        case "k":
                            var audio = new Audio("./sounds/kick-bass.mp3");
                            audio.play();
                            break;

        case "l":
                                var audio = new Audio("./sounds/crash.mp3");
                                audio.play();
                                break;


        default:
        break;
    }
        buttonAnimation(buttoncliked);
});
}
 
document.addEventListener("keydown",function(event)
{
var key = event.key;

buttonAnimation(key);
switch(key)
{
    case "w":
        var audio = new Audio("./sounds/tom-1.mp3");
        audio.play();
        break;

    case "a":
        var audio = new Audio("./sounds/tom-2.mp3");
        audio.play();
        break;

        case "s":
            var audio = new Audio("./sounds/tom-3.mp3");
            audio.play();
            break;

            case "d":
                var audio = new Audio("./sounds/tom-4.mp3");
                audio.play();
                break;

                case "j":
                    var audio = new Audio("./sounds/snare.mp3");
                    audio.play();
                    break;

                    case "k":
                        var audio = new Audio("./sounds/kick-bass.mp3");
                        audio.play();
                        break;

                        case "l":
                            var audio = new Audio("./sounds/crash.mp3");
                            audio.play();
                            break;
}
            
});
function buttonAnimation(buttonclicked){
    var currentButton = document.querySelector("."+ buttonclicked);

    currentButton.classList.add("pressed");


setTimeout(function()
    {
    currentButton.classList.remove("pressed");
    },100);
 }