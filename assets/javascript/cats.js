
// catGif function calls the cat gif API and displays the results to the DOM

function catGif() {
    $('#question h1').empty();
    console.log('Meow');
    var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=HGGUKhCqJLUaynNgUthjLF3bAZZ12EuT&tag=cats";
    $.ajax({
        url: queryURL,
        method: 'GET'
    }).then(function(response) {

        var imageURL = response.data.images.downsized_large.url;

        var catImage = $('<img>');
        catImage.attr('src', imageURL);

        //resizing image so it fits in the space beneath the wheel
        catImage.attr('height', 300);
        catImage.attr('width', 300);

        //appending the image to the area beside the wheel and also to the space beneath the wheel
        catImage.appendTo('#question h1, .catgif');

    });
}
