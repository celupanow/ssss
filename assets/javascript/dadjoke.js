
//dadJoke function calls the dad joke API and displays the results to the DOM

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

    //displaying results beside the wheel
    $('#question h1').append(response);
    //displaying results beneath the wheel
    $('.dadjoke').append(response);
    });
}