// cara get param id | source https://stackoverflow.com/questions/979975/how-to-get-the-value-from-the-get-parameters
var url_string = window.location.href
var url = new URL(url_string);
var quiz_id = Number(url.searchParams.get("id"));
//-------

function createGame(q_id){    
    $.ajax({
        url: `http://127.0.0.1:5000/createGame`,
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({
            quiz_id: q_id
        }),
        success: function(response){            
            window.location.href = `play.html?game_pin=${response['game-pin']}`
            var game_pin = response['game-pin']
        },
        error: function(){
            
        },
        complete: function(){

        }
    })
}


$.ajax({
    url: `http://127.0.0.1:5000/quiz/getQuiz/${quiz_id}`,
    method: 'GET',
    success: function(result){
        var quiz = `
        
        `
        $('div#quizById').append(quiz)

        for (var i = 0; i < result['question-list'].length; i++){            
            var question = `
            <li class="list-group-item d-flex flex-row align-items-center mb-3 pr-0 pt-0 pb-0">
                <span class="col-1 text-center no-gutters bg-secondary text-white"><b>${i+1}</b></span>
                <div class="col">${result['question-list'][i]['question']}</div>
                <img src="img/question.jpg" alt="" style="width: 11rem;">
            </li>
            `
            $('ul#questionList').append(question)
            
        }
        var stickyQuiz = `
        <img src="img/card_image.jpg" alt="" style="width: 27rem;">
        <h4><b>${result.title}</b></h4>
        <button type="button" class="btn btn-success" onClick="createGame(${quiz_id})">Play</button>
        `
        $('div#stickyQuiz').append(stickyQuiz)
    },
    error: function(error){
    },
    complete: function(){
        // alert('data sudah selesai')
    } 
})