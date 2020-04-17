
$('#cat-button').click(function() {
    console.log('Meow');
    var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=HGGUKhCqJLUaynNgUthjLF3bAZZ12EuT&tag=cats";
    $.ajax({
        url: queryURL,
        method: 'GET'
    }).then(function(response) {

        var imageURL = response.data.images.downsized_large.url;

        var catImage = $('<img>');
        catImage.attr('src', imageURL);

        $('#cats').prepend(catImage);
    });
});