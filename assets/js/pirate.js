
$('#translate-button').click(function(event) {
	event.preventDefault();

	var piratePhrase = $('#pirate-phrase').val().trim();
	console.log(piratePhrase)

var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://piratespeak.p.rapidapi.com/pirate.json?text=" + piratePhrase,
	"method": "POST",
	"headers": {
		"x-rapidapi-host": "piratespeak.p.rapidapi.com",
		"x-rapidapi-key": "f5d076b858mshde2fcf9c44c6e23p152976jsn090f07077fae",
		"content-type": "application/x-www-form-urlencoded"
	},
	"data": {}
}

$.ajax(settings).done(function (response) {
	console.log(response.contents.translated);
});
});
