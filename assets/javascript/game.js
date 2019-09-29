$(document).ready(function () {
    var goalNum = Math.floor(Math.random() * 101 + 19);
    var score = 0;
    var wins = 0;
    var losses = 0;
    var rubyNum = Math.floor(Math.random() * 11 + 1);
    var diamondNum = Math.floor(Math.random() * 11 + 1);
    var emeraldNum = Math.floor(Math.random() * 11 + 1);
    var topazNum = Math.floor(Math.random() * 11 + 1);
    $("#goal").text("Target: " + goalNum);


    $("#score").text("Score: " + score);

    score = parseInt(score);
    rubyNum = parseInt(rubyNum);
    diamondNum = parseInt(diamondNum);
    topazNum = parseInt(topazNum);
    emeraldNum = parseInt(emeraldNum);
    // restart game function
    function restartGame() {
        $("#goal").empty();
        $("#score").empty();
        score = 0;
        var goalNum = Math.floor(Math.random() * 101 + 19);
        var rubyNum = Math.floor(Math.random() * 11 + 1);
        var diamondNum = Math.floor(Math.random() * 11 + 1);
        var emeraldNum = Math.floor(Math.random() * 11 + 1);
        var topazNum = Math.floor(Math.random() * 11 + 1);
        $("#goal").text("Target: " + goalNum);
        console.log("Ruby: " + rubyNum);
        console.log("Diamond: " + diamondNum);
        console.log("Topaz: " + topazNum);
        console.log("Emerald: " + emeraldNum);

    };

    // check to see if players total score has matched the beginning number if so game over add to wins
    function won() {
        wins++;
        $("#wins").text("Wins: " + wins);
        restartGame();
    };

    function lost() {
        losses++;
        $("#losses").text("Losses: " + losses);
        restartGame();
    };

    //click on ruby when clicked reveal random score that gets added to players total score 
    $("#red").click(function () {
        score = score + rubyNum;
        $("#score").text(score);
        if (score === goalNum) {
            won();
        }
        else if (score > goalNum) {
            lost();
        }
    });

    //click on diamond when clicked reveal random score that gets added to players total score 
    $("#blue").click(function () {
        score = score + diamondNum;
        $("#score").text(score);
        if (score === goalNum) {
            won();
        }
        else if (score > goalNum) {
            lost();
        }
    });
    //click on topaz when clicked reveal random score that gets added to players total score 
    $("#yellow").click(function () {
        score = score + topazNum;
        $("#score").text(score);
        if (score === goalNum) {
            won();
        }
        else if (score > goalNum) {
            lost();
        }
    });
    //click on emerald when clicked reveal random score that gets added to players total score 

    $("#green").click(function () {
        score = score + emeraldNum;
        $("#score").text(score);
        if (score === goalNum) {
            won();
        }
        else if (score > goalNum) {
            lost();
        }
    });
    console.log("Ruby: " + rubyNum);
    console.log("Diamond: " + diamondNum);
    console.log("Topaz: " + topazNum);
    console.log("Emerald: " + emeraldNum);
});