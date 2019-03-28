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