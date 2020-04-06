$(document).ready(function () {
    refreshPage()

    $('#loginform').submit(e => {
        e.preventDefault()
        const email = $('#email').val()
        const password = $('#password').val()
        console.log(email, password)
        $.ajax({
            url: 'http://localhost:3000/login',
            type: 'POST',
            data: { email, password }
        }).done(respond => {
            localStorage.setItem('access_token', respond.access_token);
            $('#loginform')[0].reset()
            refreshPage()
        }).fail(err => {
            console.log(err)
        })
    })

    $('#logoutbutton').click(e => {
        localStorage.removeItem('access_token')
        refreshPage()
    })

    $('#addform').submit(e => {
        e.preventDefault()
        console.log('addform')
        const title = $('#title').val()
        const price = $('#price').val()
        const ingredients = $('#ingredients').val()
        const tag = $('#tag').val()
        console.log(title, price, ingredients, tag)
        $.ajax({
            url: 'http://localhost:3000/foods',
            type: 'POST',
            data: { title, price, ingredients, tag, test: 'test' },
            headers: {
                access_token: localStorage.getItem('access_token')
            }
        }).done(data => {
            $('#addform')[0].reset()
            refreshPage()
            console.log('added')
        }).fail(err => {
            //Cannot set headers after they are sent to the client
            console.log(err)
        })
    })


    $('#list').on('click', '#delete', function (e) {
        //delete berfungsi, dapatin idnya salah, sama semua
        e.preventDefault()
        let id = $('#delete').val()
        console.log(id)
        $.ajax({
            url: `http://localhost:3000/foods/${id}`,
            type: 'DELETE',
            headers: {
                access_token: localStorage.getItem('access_token')
            }
        }).done(respond => {
            console.log('deleted')
            refreshPage()

        }).fail(err => {
            console.log(err)
        })


    })













})

function showAll() {
    $.ajax({
        url: 'http://localhost:3000/foods',
        type: 'GET',
        headers: {
            access_token: localStorage.getItem('access_token')
        }
    }).done(respond => {
        console.log(respond)
        let foods = respond.data
        $('#list').html('')
        for (let i in foods) {
            $('#list').append(`<div class="card">
                <div class="card-body pb-0">
                    <div class="d-flex justify-content-between mb-0">
                        <div class="col-9">
                            <h5 class="font-weight-bold">${foods[i].title} </h5>
                            <p>${foods[i].price}</p>
                        </div>
                        <div class="col-3 d-flex align-items-baseline">
                            <i class="fas fa-tag text-grey mr-2"></i>
                            <p class="text-grey">${foods[i].tag}</p>
                            <button id="delete" class="fas fa-trash text-danger ml-auto cursor-pointer delete" value="${foods[i].id}"></button>
                        </div>
                    </div>
                    <div class="card-body border-bottom">
                    ${foods[i].ingredients}
              </div>

                </div>
            </div>`)
        }


    }).fail(err => {
        console.log(err)
    })
}

function refreshPage() {
    if (localStorage.access_token) {
        $('#app').show()
        $('#login').hide()
    } else {
        $('#login').show()
        $('#app').hide()
    }
    showAll()
}