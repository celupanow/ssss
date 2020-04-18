

function dadJoke() {
    $('#question h1').empty();
    var setup = {
        'url': 'https://icanhazdadjoke.com',
        'method': 'GET',
        'headers': {
            'Accept' : 'text/plain'
        }
    };

    $.ajax(setup).done(function (response) {
        console.log(response);

    $('#question h1').append(response);
    $('.dadjoke').append(response);
    });
}