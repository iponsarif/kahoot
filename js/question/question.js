// cara get param id | source https://stackoverflow.com/questions/979975/how-to-get-the-value-from-the-get-parameters
var url_string = window.location.href
var url = new URL(url_string);
var id = Number(url.searchParams.get("qs_id"));
//-------

$.ajax({
    url: `http://127.0.0.1:5000/getQuestion/${id}`,
    method: 'GET',
    success: function(result){
        var question = `
            <div class="row" style="margin:20px;">
                <div class="col">
                    <form>
                    <div class="form-group">
                        <label id="form_">Question</label>
                        <input type="text" class="form-control form-control-lg" id="question" value="${result.question}">
                        <label id="form_">Right Answer</label>
                        <input type="text" class="form-control form-control-lg" id="answer" value="${result.answer}">
                    </div>
                    </form>
                </div>
                <div class="col">
                    <label id="form_">Media</label>
                    <div class="custom-file">
                    <input type="file" class="custom-file-input" id="customFile">
                    <label class="custom-file-label custom-file-label-lg" for="customFile">Choose file</label>
                    </div>
                </div>
                </div>
                <div class="row" style="margin:20px;">
                <div class="col">
                    <div class="form-group">
                    <label id="form_">Answer A</label>
                    <input type="text" class="form-control form-control-lg" id="a" value="${result.options[0]['a']}">
                    <label id="form_">Answer B</label>
                    <input type="text" class="form-control form-control-lg" id="b" value="${result.options[0]['b']}">
                    </div>
                </div>
                <div class="col">
                    <div class="form-group">
                    <label id="form_">Answer C</label>
                    <input type="text" class="form-control form-control-lg" id="c" value="${result.options[0]['c']}">
                    <label id="form_">Answer D</label>
                    <input type="text" class="form-control form-control-lg" id="d" value="${result.options[0]['d']}">
                    </div>
                </div>
            </div>
        `
        $('div#editQuestion').append(question)
            
    },
    error: function(error){
    },
    complete: function(){
        // alert('data sudah selesai')
    } 
})

function updateQuestion(qs_id){
    // ambil quiz_id
    var url_string = window.location.href
    var url = new URL(url_string);
    var quiz_id = Number(url.searchParams.get("quiz_id"));

    var qs_id = qs_id
    var question_ = $('input#question').val()
    var number_ = 1 // sementara, todo DELETE COLUMN
    var answer_ = $('input#answer').val()
    var options_ = {
        a: $('input#a').val(),
        b: $('input#b').val(),
        c: $('input#c').val(),
        d: $('input#d').val()
    }
    
    $.ajax({
        url: `http://127.0.0.1:5000/quiz/updateQuestion/${qs_id}`,
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({
            question: question_,
            number: number_,
            answer: answer_,
            options: options_
        }),
        success: function(){
            window.location.href = `view_quiz.html?id=${quiz_id}`
        },
        error: function(){
            alert('Please add question form')
            // alert(response.error)            
        },
        complete: function(){
            // alert('data sudah selesai')
        }
    })
}

function question(){        
    updateQuestion(id);
}