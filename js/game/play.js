var url_string = window.location.href
var url = new URL(url_string);
var game_pin_ = Number(url.searchParams.get("game_pin"));

function enterGamePIN(){
    var game_pin_ = $('input#game-pin').val()
    window.location.href=`play_enter_username.html?game_pin=${game_pin_}`
}

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
            window.location.href = `play_game.html?game_pin=${game_pin_}&username=${username_}&no=1`
            // console.log(username_)
        },
        error: function(){
            
        },
        complete: function(){

        }
    })
}

function playQuestions(){
    $.ajax({
        url: `http://127.0.0.1:5000/game/${game_pin_}/getQuestions`,
        method: 'GET',
        success: function(){            
            window.location.href = `play_questions.html?game_pin=${game_pin_}`
        },
        error: function(){
            alert('Game not found. Try again')
        },
        complete: function(){

        }
    })
}