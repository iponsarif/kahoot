var xhr = new XMLHttpRequest();

function ambilUsers(){
    //open (method, url, async)
    xhr.open("GET", "http://127.0.0.1:5000/getAllUsers", true);
    xhr.send();
    // when get data is done
    xhr.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            var dataUser = JSON.parse(this.response)
            // console.log(resp)

            for (var i = 0; i < dataUser.length; i++) {
                // vanilla javascrpit
                // tampilUser(dataUser[i].username)
                
                // jQuery
                // jQuery -> $()
                // selector DOM -> $('ol#namaUser')
                // function -> append()
                // elemen yg diolah -> '<li>' + dataUser[i].username + '</li>'
                // masukin elemen yang diolah ke function
                $('ul#namaUser').append('<li>' + dataUser[i].username + '</li>')
            }
        } else if(this.readyState == 4){
            console.log(this.response)
        }
    }
}

// vanilla javascrpit
function tampilUser(username){
    var node = document.createElement("LI");
    var textnode = document.createTextNode(username);
    node.appendChild(textnode);
    // bikin element dulu, baru bisa ditambahin classnya
    node.classList.add("list-group-item");
    document.getElementById('namaUser').appendChild(node)
}



// jQuery ajax
// sama seperti xmlHTTPRequest
$.ajax({
    url: 'http://127.0.0.1:5000/getAllUsers',
    // type: 'GET
    method: 'GET',    
    // data: typeData, JSON.stringify([{}]) --> kalo misalnya API membutuhkan data dari frontEnd

    //ngolah data di success
    success: function(result){
        for (var i = 0; i < result.length; i++){
            $('ul#namaUser').append('<li class="list-group-item">' + result[i].username + '</li>')
            $('ul#fullnameUser').append('<li class="list-group-item">' + result[i].fullname + '</li>')
        }
    },
    //      parameter error = string nya
    error: function(error){
        //error handling
    },
    complete: function(){
        alert('data sudah selesai')
    }
})


// PANGGIL FUNGSI
// ambilUsers();