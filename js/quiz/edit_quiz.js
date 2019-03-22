var url_string = window.location.href
var url = new URL(url_string);
var quiz_id = Number(url.searchParams.get("id"));

function updateQuiz(q_id){
    var title_ = $('input#title').val()
    var category_ = $('input#category').val()
    var creator_id_ = $('input#creator_id').val()

    $.ajax({
        url: `http://127.0.0.1:5000/quiz/updateQuiz/${q_id}`,
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({
            title: title_,
            category: category_,
            creator_id: creator_id_
        }),
        success: function(){
            window.location.href = `view_quiz.html?id=${q_id}`
        },
        error: function(){
            alert('Please add quiz form')
            // alert(response.error)            
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
        <div class="row" style="margin:20px;">
            <div class="col">
                <form>
                <div class="form-group">
                    <label id="form_">Title</label>
                    <input type="text" class="form-control form-control-lg" id="title" value="${result.title}">
                </div>
                <div class="form-group">
                    <label id="form_">Category</label>
                    <input type="text" class="form-control form-control-lg" id="category" value="${result.category}">
                </div>
                <div class="form-group">
                    <label id="form_">Creator id (nanti pake cookies)</label>
                    <input type="text" class="form-control form-control-lg" id="creator_id" value="${result.creator_id}">
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
        
        </div>
        `
        $('div#quiz').append(quiz)

        var saveButton =`<button type="button" class="btn btn-success" onclick="updateQuiz(${quiz_id})">Save</button>`
        $('div#saveButton').append(saveButton)
    },
    error: function(){
    },
    complete: function(){
    } 
})