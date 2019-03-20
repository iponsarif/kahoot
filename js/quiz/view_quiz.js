// cara get param id | source https://stackoverflow.com/questions/979975/how-to-get-the-value-from-the-get-parameters
var url_string = window.location.href
var url = new URL(url_string);
var quiz_id = Number(url.searchParams.get("id"));
//-------

function deleteQuestion(qs_id){
    var id = qs_id
    $.ajax({
        url: `http://127.0.0.1:5000/deleteQuestion/${id}`,
        method: 'DELETE',
        success: function(){
            window.location.href = `view_quiz.html?id=${quiz_id}`
        },
        error: function(){
            // alert(error)
        },
        complete: function(){
            // alert('data sudah selesai')
        }
    })
}

$.ajax({
    url: `http://127.0.0.1:5000/quiz/getQuiz/${quiz_id}`,
    method: 'GET',
    success: function(result){
        var quiz = `
            <h4><b>${result.title}</b></h4> 
            <div class="row">
                <div class="col-3">
                    <img src="img/card_image.jpg" alt="" style="width: 15rem;">
                </div>
                <div class="col">
                    <button type="button" class="btn btn-info float-right" onclick="location.href='edit_quiz.html?id=${result.id}'">Edit Quiz</button>
                </div>
            </div>
            <hr class="mb-4">
            <h4>Questions</h4>
            <div class="row pb-4">
                <div class="col">
                    <ul class="list-group" id="questionList">          
                    <!-- data question -->
                                        
                    </ul>
                </div>
            </div>
        `
        $('div#quizById').append(quiz)

        for (var i = 0; i < result['question-list'].length; i++){            
            var question = `
            <li class="list-group-item d-flex flex-row align-items-center mb-3">
                <span class="col-1 text-center no-gutters bg-dark text-white"><b>${i+1}</b></span>
                <div class="col">${result['question-list'][i]['question']}</div>
                <div class="col-2 text-right">
                    <button class="btn btn-warning rounded-pill mr-2" style="color:white;" onclick="location.href='edit_question.html?quiz_id=${quiz_id}&qs_id=${result['question-list'][i]['qs_id']}'">Edit</a>
                    <button class="btn btn-secondary rounded-pill" data-toggle="modal" data-target="#deleteModal-${result['question-list'][i]['qs_id']}" id="${result['question-list'][i]['qs_id']}">Delete</a>
                </div>
            </li>
            `
            $('ul#questionList').append(question)

            var deleteModal = `
            <div class="modal fade" id="deleteModal-${result['question-list'][i]['qs_id']}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Delete confirmation</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                            <button type="button" class="btn btn-primary" onclick="deleteQuestion(${result['question-list'][i]['qs_id']})">Yes</button>
                        </div>
                    </div>
                </div>
            </div>
            `
            $('span#modalList').append(deleteModal)
        }
        var addQuestion = `
        <li class="list-group-item center border-dashed-3 text-center p-0" href="#">
            <button type="button" class="btn btn-light btn-lg w-100" onclick="location.href='question.html?quiz_id=${quiz_id}'">Add question</button>
        </li>
        `
        $('ul#questionList').append(addQuestion)
    },
    error: function(error){
    },
    complete: function(){
        // alert('data sudah selesai')
    } 
})