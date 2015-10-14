var d = ("<div class='square'></div>");

//this creates the grid, adding the number of specified divs to the container
function createGrid(numSquares) {
    var area = $('#g_area');
    var squareSize = (area.innerWidth() / numSquares);
    for (var i = 0, len = (numSquares * numSquares); i < len; i++) {
        area.append(d);
    }

//this defines the div used to populate the grid, and binds certain attributes to it
    $('.square')
        .height(squareSize)
        .width(squareSize)
        .hover(

    function() {
        if ($(this).data("clicked")) return;
        $(this).css({
            'background-color': '#FFFFFF'
        });
    },

    function() {
        if ($(this).data("clicked")) return;
        $(this).css({
            'background-color': '#C653FF'
        });
    })
        .click(

    function() {
        $(this).data("clicked", true);
        $(this).css({
            'background-color': '#C8C8C8'
        });
    });

}

// this resets the grid, removing all of the divs from the container
function resetGrid() {
    $(".square").remove();

}

// the grid is created when the page loads, using a predefined number of divsls
$(document).ready(function() {
    createGrid(8);

//this calls the function to reset the grid, allowing the user to specify the number of divs
    $("#button").click(function () {
        var numSquares = prompt("Please enter the desired grid size");
        resetGrid(numSquares);
        createGrid(numSquares);
    });

});