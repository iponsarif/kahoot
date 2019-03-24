var url_string = window.location.href
var url = new URL(url_string);
var game_pin_ = Number(url.searchParams.get("game_pin"));
var username_ = url.searchParams.get("username");

$.ajax({
    url: `http://127.0.0.1:5000/game/${game_pin_}/getQuestions`,
    method: 'GET',
    success: function(result){
        $('#game-pin').append(" " + game_pin_)
        
        for (var i = 0; i < result.length; i++){            
            var idList = `${result[i].id},`
            $('#hidden_question_id').append(idList)
        }
        $('#username').append(username_)
        var list_id = document.getElementById("hidden_question_id").innerHTML.split(",")
        console.log(list_id)
    },
    error: function(){
        alert('Game not found. Try again')
    },
    complete: function(){

    }
})


$.ajax({
    url: `http://127.0.0.1:5000/leaderboard/${game_pin_}`,
    method: 'GET',
    success: function(result){
        for (var i = 0; i < result.length; i++){
            if (result[i].username == username_){
                $('#score').append(result[i].score)    
            }                        
        }
    },
    error: function(){
        alert('Game not found. Try again')
    },
    complete: function(){

    }
})

function answer(){
    var answer_ = document.getElementById("answer_").innerHTML

    $.ajax({
        url: `http://127.0.0.1:5000/joinGame`,
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({
            answer: answer_,
            username: username_            
        }),
        success: function(){            
            window.location.href = `play_game.html?game_pin=${game_pin_}&username=${username_}`
            // console.log(username_)
        },
        error: function(){
            
        },
        complete: function(){

        }
    })
}