$(document).ready(function() {
    var randomNumber
    var imgValue
    var gameState = true
    resetGameState()

    var total
    var wins = 0;
    var loss = 0;
    
    $(".img1").on("click", function() {
        if (gameState) {
            total += (imgValue[0])
            checkTotal()
        }
    })
    $(".img2").on("click", function() {
        if (gameState) {
            total += (imgValue[1])
            checkTotal()
        }
    })
    $(".img3").on("click", function() {
        if (gameState) {
            total += (imgValue[2])
            checkTotal()
        }
    })
    $(".img4").on("click", function() {
        if (gameState) {
            total += (imgValue[3])
            checkTotal()
        }
    })
    function checkTotal() {
        console.log(total)
        if (total==randomNumber) {
            wins++
            gameState=false
            displayWinLoss(true)
            resetGameState()
        }
        else if (total > randomNumber) {
            loss++
            gameState=false
            displayWinLoss(false)
            resetGameState()
        }
        changeScoreBoard()
    }

    function resetGameState() {
        total = 0;
        randomNumber = Math.floor((Math.random()*101)+19)
        console.log(randomNumber)
        imgValue = []
        while(imgValue.length!=4) {
            var crystalValue = Math.floor(Math.random()*11) + 1
            if (imgValue.includes(crystalValue)) {
                continue
            }
            imgValue.push(crystalValue)
        }
        console.log(imgValue)
        $(".winloss").css("display", "")
    }

    function changeScoreBoard() {
        $(".wins").html(wins)
        $(".losses").html(loss)
        $(".value").html(randomNumber)
        $("#score").html(total)
    }

    function displayWinLoss(boolean) {
        setTimeout(function() {gameState=true}, 3000)
        var winScreen = "Winner Winner Chicken Dinner!"
        var lossScreen = "Take an L!"
        if (boolean) {
            $(".winloss").text(winScreen)
            $(".winloss").css("background-color", "green")
        }
        else {
            $(".winloss").text(lossScreen)
            $(".winloss").css("background-color", "red")
        }
        $(".winloss").css("color", "white")
        $(".winloss").delay(3000).fadeOut()
    }
})