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
        $.ajax({
            url: 'http://localhost:3000/foods',
            type: 'POST',
            body: { title, price, ingredients, tag },
            headers: {
                access_token: localStorage.access_token
            }
        }).done(data => {
            refreshPage()
            console.log('added')
        }).fail(err => {
            console.log(err)
        })
    })













})

function refreshPage() {
    if (localStorage.access_token) {
        $('#app').show()
        $('#login').hide()
    } else {
        $('#login').show()
        $('#app').hide()
    }
}