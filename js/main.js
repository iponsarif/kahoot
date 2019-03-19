var xhr = new XMLHttpRequest();

function signUpManual() {
    xhr.open("POST", "http://127.0.0.1:5000/registration");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify({
        "username": "tesjscoy1",
        "password": "tesjscoy",
        "fullname": "tes fullname",
        "email": "tesjscoy1@gmail.com"
    }));
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status < 400) {
            respons = JSON.parse(this.response);
            console.log(respons);
        }
        else if (this.readyState == 4) {
            respons = JSON.parse(this.response);
            console.log(respons);
        }
    };
}

function ngeSendParams(){
    var view = `/getAllUsers?name=${name}&email=${email}`;
    xhr.open("GET", localhost + view);
    xhr.send();
    xhr.onreadystatechange = function(){
        if(this.readyState == 4 && this.status < 400){
            var resp = JSON.parse(this.response)
            console.log(resp)
        } else if(this.readyState == 4){
            console.log(this.response)
        }
    }
}
//
function ambilUsers(){
    xhr.open("GET", "http://127.0.0.1:5000/getAllUsers");
    xhr.send();
    xhr.onreadystatechange = function(){
        if(this.readyState == 4 && this.status < 400){
            var resp = JSON.parse(this.response)
            console.log(resp)
        } else if(this.readyState == 4){
            console.log(this.response)
        }
    }
}

function signUp(){
    var username_ = $('input#signUp-username').val()
    var password_ = $('input#signUp-password').val()
    var fullname_ = $('input#signUp-fullname').val()
    var email_ = $('input#signUp-email').val()
    
    $.ajax({
        url: 'http://127.0.0.1:5000/registration',
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({
            username: username_,
            password: password_,
            fullname: fullname_,
            email: email_
        }),
        success: function(response){
            alert(response.message)
            window.location.href = 'index.html'
        },
        error: function(error){
            // alert(error.message)
            alert('Please fill the form')
        },
        complete: function(){
            // alert('data sudah selesai')
        }
    })
}


function login(){
    // var username = document.getElementById('username-form').value
    // var password = document.getElementById('password-form').value

    //jquery
    var username_ = $('input#username-form').val()
    var password_ = $('input#password-form').val()

    $.ajax({
        url: 'http://127.0.0.1:5000/login',
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({
            username: username_,
            password: password_,
        }),
        success: function(response){
            alert(response.message)
            window.location.href = 'quiz_list.html'
            document.cookie = username_
        },
        error: function(error){
            // alert(error.message)
            alert('username or password is wrong')
        },
        complete: function(){
            // alert('data sudah selesai')
        }
    })
}

function createQuiz(){    
    //jquery
    var title_ = $('input#title').val()
    var category_ = $('input#category').val()
    var creator_id_ = $('input#creator_id').val()

    $.ajax({
        url: 'http://127.0.0.1:5000/quiz/createQuiz',
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({
            creator_id: creator_id_,
            title: title_,
            category: category_
        }),
        success: function(response){
            alert(response.message)
            window.location.href = `view_quiz.html?id=${response.id}`
        },
        error: function(error){
            alert('Please add title and category')
            // alert(response.error)            
        },
        complete: function(){
            // alert('data sudah selesai')
        }
    })
}

function createQuestion(q_id){
    var q_id = q_id
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
        url: `http://127.0.0.1:5000/quiz/${q_id}/createQuestion`,
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({
            question: question_,
            number: number_,
            answer: answer_,
            options: options_
        }),
        success: function(){
            window.location.href = `view_quiz.html?id=${q_id}`
        },
        error: function(){
            alert('Please add title and category')
            // alert(response.error)            
        },
        complete: function(){
            // alert('data sudah selesai')
        }
    })
}

function question(){
    // cara get param id | source https://stackoverflow.com/questions/979975/how-to-get-the-value-from-the-get-parameters
    var url_string = window.location.href
    var url = new URL(url_string);
    var quiz_id = Number(url.searchParams.get("quiz_id"));
    //-------
    createQuestion(quiz_id);
}
// }
// signUp();
// ambilUsers();

