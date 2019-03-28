var url_string = window.location.href
var url = new URL(url_string);
var game_pin_ = Number(url.searchParams.get("game_pin"));
var username_ = url.searchParams.get("username");
var no = Number(url.searchParams.get("no"))


$.ajax({
    url: `http://127.0.0.1:5000/game/${game_pin_}/getQuestions`,
    method: 'GET',
    success: function(result){
        // add PIN on left-top
        $('#game-pin').append(" " + game_pin_)
        
        for (var i = 0; i < result.length; i++){
            var idList = `${result[i].id},`
            // add question id hidden on footer
            $('#hidden_question_id').append(idList)
        }
        // add username on left-bottom
        $('#username').append(username_)
        var list_id = document.getElementById("hidden_question_id").innerHTML.split(",")        
        console.log(list_id)
        
        // add counter on right-top
        var totalQuestions = list_id.length -1
        var count = `${no} of ${totalQuestions}`
        $('#counter').append(count)
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
                // add score on right-bottom
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

function submitAnswer(answer_){
    // var answer_ = document.getElementById("answer_").value
    // var answer_ = value
    var list_id = document.getElementById("hidden_question_id").innerHTML.split(",")
    
    $.ajax({
        url: `http://127.0.0.1:5000/answerGame/${game_pin_}`,
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({
            answer: answer_,
            qs_id: list_id[no-1],
            username: username_
        }),
        success: function(response){
            if (no < list_id.length-1){
                alert(response.message)
                window.location.href = `play_game.html?game_pin=${game_pin_}&username=${username_}&no=${no+1}`
                console.log(no)
                console.log(list_id)
            } else {
                alert(response.message)
                window.location.href = 'leaderboard.html'
                console.log(no)
                console.log(list_id)
            }
            
        },
        error: function(){
            
        },
        complete: function(){

        }
    })
}