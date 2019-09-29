$(document).ready(function() {
    var goalNum = Math.floor(Math.random() * 101 + 19);
    var score = 0;
    var wins = 0;
    var losses = 0;
    var rubyNum = Math.floor(Math.random() * 11 + 1);
    var diamondNum = Math.floor(Math.random() * 11 + 1);
    var emeraldNum = Math.floor(Math.random() * 11 + 1);
    var topazNum = Math.floor(Math.random() * 11 + 1);
    $("#goal").text("Target: " + goalNum);
    $("#wins").text("Wins: " + wins);
    $("#losses").text("Losses: " + losses);
    //click on ruby when clicked reveal random score that gets added to players total score
    $("#red").click(function() {
        score = score + rubyNum;
        $("#score").text(score);
        if (score === goalNum) {
            wins++;
        }
        else if (score > goalNum) {
            losses++;
        }
    });
    
    //click on diamond when clicked reveal random score that gets added to players total  score
    $("#blue").click(function() {
        score = score + diamondNum;
        $("#score").text(score);
        if (score === goalNum) {
            wins++;
        }
        else if (score > goalNum) {
            losses++;
        }
    });
    _
    //click on topaz when clicked reveal random score that gets added to players total score
    $("#yellow").click(function() {
        score = score + topazNum;
        $("#score").text(score);
        if (score === goalNum) {
            wins++;
        }
        else if (score > goalNum) {
            losses++;
        }
    });
    
    //click on emerald when clicked reveal random score that gets added to players total score    $(".red").click(function() {
        $("#green").click(function() {
            score = score + emeraldNum;
            $("#score").text(score);
            if (score === goalNum) {
                wins++;
            }
            else if (score > goalNum) {
                losses++;
            }
        });
        //check to see if players total score has gone over or matched the beginning number if so game over add to wins or losses depending on outcome and reset game
});