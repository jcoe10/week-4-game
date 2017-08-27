
            //set variables  
            //var score = 0;
            //var wins = 0;
            //var losses = 0;
            //$('#wins').text(wins);
            //$('#losses').text(losses);
            //});

    //make a .ready function
    $(document).ready(function () {
        //make it so the random number appears
        var randomNumber = Math.floor((Math.random()) * 101 + 19);             
        $("#randomNumber").append(randomNumber);
        console.log(randomNumber);               
});
        