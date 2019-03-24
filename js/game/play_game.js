var url_string = window.location.href
var url = new URL(url_string);
var game_pin_ = Number(url.searchParams.get("game_pin"));

function joinGamePIN(){
    var username_ = $('input#username').val()

    $.ajax({
        url: `http://127.0.0.1:5000/joinGame`,
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({
            game_pin: game_pin_,
            username: username_            
        }),
        success: function(){            
            window.location.href = `play_game.html?game_pin=${game_pin_}&username=${username_}`
        },
        error: function(error){
            alert(error)
        },
        complete: function(){

        }
    })
}