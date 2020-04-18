// animalBlep function calls the animal blep API and displays the image to the DOM

function animalBlep() {
  $('#question h1').empty();
  var originalURL = "https://mlem.tech/api/randommlem";
  var queryURL = "https://cors-anywhere.herokuapp.com/" + originalURL

  $.ajax({
    url: queryURL,
    method: "GET",
    dataType: "json",
    // this headers section is necessary for CORS-anywhere
    headers: {
      "x-requested-with": "xhr",
      "x-rapidapi-host": "mlemapi.p.rapidapi.com",
      "x-rapidapi-key": "27adf78284mshc7c79769720b212p1855e4jsn34c40ae604b1"
    }
  }).done(function (response) {
    console.log('CORS anywhere response', response);

    var imageURL = response.url;

    var animalImage = $('<img>');
    animalImage.attr('src', imageURL);

    //resizing image so it fits in the space beneath the wheel
    animalImage.attr('height', 300);
    animalImage.attr('width', 300);

    //appending the image to the area beside the wheel and also to the space beneath the wheel
    animalImage.appendTo('#question h1, .animalblep');

  }).fail(function (jqXHR, textStatus) {
    console.error(textStatus)
  });
}
