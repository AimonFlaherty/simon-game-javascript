
var playing = false;
var gameOver = false;
var btnPressed;

const btnSound = function(btn){
    let snd = new Audio("sounds/"+btn+".mp3")
    snd.play();
}

const btnPressed = function(btn){
    let idTag = '#'+btn;
    $(idTag).addClass('pressed');
    setTimeout(function(){
        $(idTag).removeClass('pressed');
    }, 100);
}

function rndBtn(){
    let btn;
    switch(Math.floor(Math.random()*4)){
        case 0:
            btn = "green";
            break;
        case 1:
            btn = "red";
            break;
        case 2:
            btn = "yellow";
            break;
        case 3:
            btn = "blue";
            break;
    }
    btnSound(btn);
    btnPressed(btn);
    return btn;
}

function playGame(){
    let series = [];
    let counter = 1;
    while(playing){
        $("h1").text("Level " + counter);
        series.push(rndBtn());

    }
}

$('.btn').click(function(){
    let id = $(this).attr('id');
    btnSound(id);
    btnPressed(id);
    btnPressed = id;
});

$(document).keydown(function(){
    if(!playing){
        playing = true;
        playGame();
    } 
});
