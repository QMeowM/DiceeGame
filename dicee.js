function play() {
    var player1Dice = Math.floor(Math.random() * 6) + 1;
    var player2Dice = player1Dice;

    while (player2Dice === player1Dice) {
        player2Dice = (Math.floor(Math.random() * 6) + 1);
    };

    document.querySelector(".img1").setAttribute("src", "images/dice" + player1Dice.toString() + ".png");
    document.querySelector(".img2").setAttribute("src", "images/dice" + player2Dice.toString() + ".png");

    if (player1Dice > player2Dice) {
        document.querySelector("h1").innerHTML = "🏆 Player 1 Wins!";
    } else {
        document.querySelector("h1").innerHTML = "Player 2 Wins! 🏆";
    };
}

