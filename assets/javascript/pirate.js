
//pirateTranslation function asks for user input, calls the pirate translator API and displays the results to the DOM

function pirateTranslation() {
	$('#question h1').empty();

	//displays the pirate input form that is normally hidden in the html
	$("#pirate-form").show();
	$("#capn").show();

	$("#button").on("click", function(event) {
		event.preventDefault();

		//variable to hold the input from the input box
		var piratePhrase = $("#pirate-phrase").val().trim();
		console.log(piratePhrase)

		//if statement to validate that the input is not empty
		if (piratePhrase === "") {
			//if input field is empty, error message displays above the form
			$("#error").html("Yarr ye can't leave it blank, ye scurvy dog!");
		} else {
			//otherwise, the form is hidden again
			$("#pirate-form").hide();
			//and the error disappears
			$("#error").empty();

		//the API is called
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
			//displays the results next to the wheel
			$('#question h1').append(response.contents.translated);
			//displays the results below the wheel
			$('.piratephrase').append(response.contents.translated);
		});
	}

	});

}
