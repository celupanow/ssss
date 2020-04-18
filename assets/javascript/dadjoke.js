

function dadJoke() {
    $('#question').empty();
    var setup = {
        'url': 'https://icanhazdadjoke.com',
        'method': 'GET',
        'headers': {
            'Accept' : 'text/plain'
        }
    };

    $.ajax(setup).done(function (response) {
        console.log(response);

    $('#question').append(response);
    });
}