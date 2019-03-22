$.ajax({
    url: `http://127.0.0.1:5000/quiz/getQuizByCreatorId/1`,
    method: 'GET',
    success: function(result){
        for (var i = 0; i < result.length; i++){
            var card = `
            <li class="list-group-item border-0">
                <a href="view_quiz.html?id=${result[i].id}" style="text-decoration:none; color:black" >
                    <div class="card" style="width: 15rem;">
                        <img src="img/card_image.jpg" class="card-img-top" alt="quiz image">
                        
                        <div class="card-body">
                        <h5 class="card-title" id="title">${result[i].title}</h5>
                        <p class="card-text">${result[i]['question-list'].length} Questions</p>
                        <a href="#" style="font-size: .75rem;">Created by ${result[i].creator_id}</a>
                        </div>
                    </div>  
                </a>
            </li>
            `
            $('ul#quizList').append(card)
        }
        
    },
    error: function(error){
    },
    complete: function(){
        // alert('data sudah selesai')
    } 
})