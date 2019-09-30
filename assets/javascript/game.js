$(document).ready(function () {
    var goalNum = Math.floor(Math.random() * 101 + 19);
    var score = 0;
    var wins = 0;
    var losses = 0;
    var rubyNum = Math.floor(Math.random() * 11) + 1;
    var diamondNum = Math.floor(Math.random() * 11) + 1;
    var emeraldNum = Math.floor(Math.random() * 11) + 1;
    var topazNum = Math.floor(Math.random() * 11) + 1;
    $("#goal").text("Target: " + goalNum);
    $("#score").text("Score: " + score);
    $("#wins").text("Wins: " + wins);
    $("#losses").text("Losses: " + losses);

    score = parseInt(score);
    rubyNum = parseInt(rubyNum);
    diamondNum = parseInt(diamondNum);
    topazNum = parseInt(topazNum);
    emeraldNum = parseInt(emeraldNum);
    // restart game function
    function restartGame() {
        score = 0;
        $("#score").text("Score: " + score);
        goalNum = Math.floor(Math.random() * 101) + 19;
        $("#goal").text("Target: " + goalNum);
        rubyNum = Math.floor(Math.random() * 11) + 1;
        diamondNum = Math.floor(Math.random() * 11) + 1;
        emeraldNum = Math.floor(Math.random() * 11) + 1;
        topazNum = Math.floor(Math.random() * 11) + 1;
        
        score = parseInt(score);
        rubyNum = parseInt(rubyNum);
        diamondNum = parseInt(diamondNum);
        topazNum = parseInt(topazNum);
        emeraldNum = parseInt(emeraldNum);


        console.log("Ruby: " + rubyNum);
        console.log("Diamond: " + diamondNum);
        console.log("Topaz: " + topazNum);
        console.log("Emerald: " + emeraldNum);
        console.log("Target: " + goalNum);

    };

    function won() {
        wins++;
        $("#wins").text("Wins: " + wins);
        $("#goal").empty();
        $("#score").empty();
        restartGame();
    };

    function lost() {
        losses++;
        $("#losses").text("Losses: " + losses);
        $("#goal").empty();
        $("#score").empty();
        restartGame();
    };

    //click on ruby when clicked reveal random score that gets added to players total score 
    $("#red").click(function () {
        score = score + rubyNum;
        $("#score").text("Score: " + score);
        if (score === goalNum) {
            won();
            // restartGame();
        }
        if (score > goalNum) {
            lost();
            // restartGame();
        }
    });

    //click on diamond when clicked reveal random score that gets added to players total score 
    $("#blue").click(function () {
        score = score + diamondNum;
        $("#score").text("Score: " + score);
        if (score === goalNum) {
            won();
            // restartGame();
        }
        if (score > goalNum) {
            lost();
            // restartGame();
        }
    });
    //click on topaz when clicked reveal random score that gets added to players total score 
    $("#yellow").click(function () {
        score = score + topazNum;
        $("#score").text("Score: " + score);
        if (score === goalNum) {
            won();
            // restartGame();
        }
        if (score > goalNum) {
            lost();
            // restartGame();
        }
    });
    //click on emerald when clicked reveal random score that gets added to players total score 

    $("#green").click(function () {
        score = score + emeraldNum;
        $("#score").text("Score: " + score);
        if (score === goalNum) {
            won();
            // restartGame();
        }
        if (score > goalNum) {
            lost();
            // restartGame();
        }
    });
    console.log("Ruby: " + rubyNum);
    console.log("Diamond: " + diamondNum);
    console.log("Topaz: " + topazNum);
    console.log("Emerald: " + emeraldNum);
    console.log("Target: " + goalNum);
});