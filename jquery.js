$(document).ready(function() {
	for (var i = 0; i < 17; i++) {
		$(".row").append("<div class='grid'></div>");
		i++;
	}
});

$(document).ready(function() {
		$(".grid").hover(function() {
		$(this).css("background-color", "gray");
		}, function(){
		$(this).css("background-color", "black");
	});

});



$(document).ready(function() {
	$("#resetbutton").click(function() {
		$(".grid").css("background-color", "#dedede");
		var newSize = prompt("How many squares per side would you like the new grid? (Enter 1 number between 1-100)");
	})
});



$(document).ready(function() {
	$("#clear").click(function() {
		$(".grid").css("background-color", "#dedede");
	})
});





