var url_string = window.location.href
var url = new URL(url_string);
var game_pin_ = Number(url.searchParams.get("game_pin"));

$.ajax({
    url: `http://127.0.0.1:5000/game/${game_pin_}/getQuestions`,
    method: 'GET',
    success: function(result){
        console.log(result[0])
        for (var i = 0; i < result.length; i++){
            if (i == 0){
                var indicator = `<li data-target="#carouselQuestion" data-slide-to="${i}" class="active"></li>`
                var item = `<div class="carousel-item active" id="question-${i}"></div>`
            } else {
                var indicator = `<li data-target="#carouselQuestion" data-slide-to="${i}"></li>`
                var item = `<div class="carousel-item" id="question-${i}"></div>`                
            }
            $('ol#question-indicator').append(indicator)
            $('#question-list').append(item)

            var title = `
                <nav class="fixed-top navbar navbar-expand-lg bg-white d-flex justify-content-center" style="border-bottom:3px #dee2e6 solid">
                    <p class="text-center mb-0" style="font-size:45px;">
                    ${result[i].question}
                    </p>
                </nav>
                <div class="row ml-0 mr-0 mt-5 pt-5 font-weight-bold">${i+1} of ${result.length}</div>
                <div class="row justify-content-center">
                    <img src="img/question.jpg" class="d-block w-30 pb-2" alt="question-image">
                </div>
                <div class="row">
                    <div class="col pl-1 pr-1">
                        <button type="button" class="btn btn-danger mb-2 d-flex w-100" style="height: 80px;">
                        <div class="col-2 shad"><b>A</b></div>
                        <div class="col shad text-left">${result[i].options[0].a}</div>
                        </button>
                    </div>
                    <div class="col pl-1 pr-1">
                        <button type="button" class="btn btn-primary d-flex w-100" style="height: 80px;">
                        <div class="col-2 shad"><b>B</b></div>
                        <div class="col shad text-left">${result[i].options[0].b}</div>
                        </button>
                    </div>
                </div>
                <div class="row">
                    <div class="col pl-1 pr-1">
                        <button type="button" class="btn btn-warning mb-2 d-flex w-100" style="height: 80px;">
                        <div class="col-2 shad"><b>C</b></div>
                        <div class="col shad text-left">${result[i].options[0].c}</div>
                        </button>
                    </div>
                    <div class="col pl-1 pr-1">
                        <button type="button" class="btn btn-success d-flex w-100" style="height: 80px;">
                        <div class="col-2 shad"><b>D</b></div>
                        <div class="col shad text-left">${result[i].options[0].d}</div>
                        </button>
                    </div>
                </div>
            `
            $(`div#question-${i}`).append(title)

        }

    },
    error: function(){
        alert('Game not found. Try again')
    },
    complete: function(){

    }
})