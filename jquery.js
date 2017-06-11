$(document).ready(function() {
	for (var i = 0; i < 17; i++) {
		$("#row1, #row2, #row3, #row4, #row5, #row6, #row7, #row8, #row9, #row10, #row11, #row12, #row13, #row14, #row15, #row16").append("<div class='grid'></div>");
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





