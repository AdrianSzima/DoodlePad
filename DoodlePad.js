$(document).ready(function() {
	generateGrid(40, 1);

	$(".button:first").click(function() {
		newGrid(1);
	});

	$(".button:nth-child(2)").click(function() {
		newGrid(2);
	});


	$(".button:nth-child(3)").click(function() {
		if ( background ) {
			$("#container > div > div").css("opacity", "0");
		}
		else {
			$("#container > div > div").css("background-color", "white");
		}
	});
});
var background = false;

// produces grids that match with the users input in the prompt

function generateGrid(size, mode) {
	var grid = 600 / size;
	for ( i = 0; i < size; i++) {
		$("#container").append("<div></div>");
	}
	$("#container > div").css({"height": grid});
	for ( j = 0; j < size; j++) {
		$("#container > div").append("<div></div>");
	}
	$("#container > div > div").css({"height": grid, "width": grid, "display": "inline-block",
		"vertical-align": "top"});
	colorMode(mode);
}

// different styles depending on what mode was chosen
function colorMode(mode) {
	
	$("#container > div > div").mouseenter(function() {
	if ( mode === 1 ) {
		background = false;
		$(this).css("background-color", "black");
	}
	else if ( mode === 2) {
		background = false;
		var random = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
		$(this).css("background-color", random);
		$("#b2").css("color", random);
	}

	});
}

// causes the prompt to come up from the screen and attack the user with an 11th century mace.  No mercy
function newGrid(mode) {
	$("#container").empty();
		var gridsize = +prompt("How many rows would you like to generate?");
		generateGrid(gridsize, mode);
}
