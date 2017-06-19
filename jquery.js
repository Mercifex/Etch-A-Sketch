var gridSize = 16;

function createCanvas() {
    for (var i = 0; i < gridSize * gridSize; i++) {
        $(".canvas").append("<tr class='grid'></tr>");
    }
    
    $(".grid").css( {
       'height' : $(".canvas").height() / gridSize,
       'width' : $(".canvas").height() / gridSize,
    });
    
    $("#currentSetting").replaceWith("<p id='currentSetting'>Current Setting: " + gridSize + "</p>");
}

function newCanvas() {
    $(".canvas").empty();
    var newSize = prompt("New size?");
    for (var i = 0; i < newSize * newSize; i++) {
        $(".canvas").append("<tr class='grid'></tr>");
    }
    
    $(".grid").css( {
       'height' : $(".canvas").height() / newSize,
       'width' : $(".canvas").height() / newSize,
    });
    
    marker();
    
    $("#currentSetting").replaceWith("<p id='currentSetting'>Current Setting: " + gridSize + "</p>");

}

function marker() {
    $(".grid").hover(function() {
       $(this).css("background-color", "gray");
       }, function(){
       $(this).css("background-color", "black");
    });
}


$(document).ready(function() {
    createCanvas();
    marker();
    $("#clear").click(function() {
		$(".grid").css("background-color", "#dedede");
	});
    $("#resetbutton").click(newCanvas);
});








