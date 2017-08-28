//set variables  

var score = 0;
var wins = 0;
var losses = 0;

//make a .ready function

$(document).ready(function () {

//make it so the random number appears
    
    var randomNumber = Math.floor((Math.random()) * 101 + 19);
    $("#randomNumber").append(randomNumber);
    console.log('randomNumber ', randomNumber);

//make it so each gem generates a random number for every game
    
    function gemValue() {
        var num = Math.floor((Math.random()) * 12 + 1);
        return num
    }

    var red = gemValue();
    var blue = gemValue();
    var rainbow = gemValue();
    var yellow = gemValue();

    //make an on click event for each gem
    
    $("#redGem").on("click", function () {
        var redNum = score += red;
        $(".myscore").html(redNum);
        scoreCheck(score);
        console.log('red ', red);
    })
    $("#blueGem").on("click", function () {
        var blueNum = score += blue;
        $(".myscore").html(blueNum);
        scoreCheck(score);
        console.log('blue ', blue);
    })
    $("#rainbowGem").on("click", function () {
        var rainbowNum = score += rainbow;
        $(".myscore").html(rainbowNum);
        scoreCheck(score);
        console.log('rainbow ', rainbow);
    })
    $("#yellowGem").on("click", function () {
        var yellowNum = score += yellow;
        $(".myscore").html(yellowNum);
        scoreCheck(score);
        console.log('yellow ', yellow);
    })

//reset game 
    
    function reset() {
        randomNumber = Math.floor((Math.random()) * 101 + 19);
        $("#randomNumber").html("Random Number:" + randomNumber);
        $(".myscore").html(score = 0);
        
//console.log('randomNumber ', randomNumber);
        
    }

//if else statement
    
    function scoreCheck() {
        if (score == randomNumber) {
            wins++;
            $("#wins").html("Wins: " + wins);
            reset();
            red = gemValue();
            blue = gemValue();
            rainbow = gemValue();
            yellow = gemValue();
            
//console logged each gem
            
        };
        if (score > randomNumber) {
            losses++;
            $("#losses").html("Losses: " + losses);
            reset();
            red = gemValue();
            blue = gemValue();
            rainbow = gemValue();
            yellow = gemValue();
            
//console logged each gem
            
        };
    };

});


