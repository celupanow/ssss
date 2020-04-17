
$('#dad-joke').click(function() {
    $('.joke-box').empty();
    var setup = {
        'url': 'https://icanhazdadjoke.com',
        'method': 'GET',
        'headers': {
            'Accept' : 'text/plain'
        }
    };

    $.ajax(setup).done(function (response) {
        console.log(response);

    $('.joke-box').append(response);
    });
});
