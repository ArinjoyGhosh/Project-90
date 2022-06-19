var player_1_score = 0;
var player_2_score = 0;

function alert() {
    var Player_1 = document.getElementById("user1_input").value;
    var Player_2 = document.getElementById("user2_input").value;

    localStorage.setItem("Player 1: ", Player_1);
    localStorage.setItem("Player 2: ", Player_2);

    window.location = "play_page.html";
}
function play_game_load() {
    document.getElementById("player_1").innerHTML = Player_1 + ": ";
    document.getElementById("player_2").innerHTML = Player_2 + ": ";
    document.getElementById("player_1_score").innerHTML = player_1_score;
    document.getElementById("player_2_score").innerHTML = player_2_score;
}