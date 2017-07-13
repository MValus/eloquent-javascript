exports.triangles = function(nRows) {
    for(var i = 0; i < nRows; i++) {
        var row = "";
        for(var j = 0; j < i + 1; j++) {
            row += "#";
        }
        console.log(row);
    }
};

exports.fizzBuzz = function(start, end) {
    var output;
    for(var i = start; i <= end; i++) {
        output = "";
        if(i % 3 == 0) {
            output += "Fizz";
        }
        if(i % 5 == 0) {
            output += "Buzz";
        }
        output = (output.length == 0) ? i : output;
        console.log(output);
    }
};

exports.drawChessboard = function(size) {
    for(var i = 0; i < size; i++) {
        var row = "";
        for (var j = 0; j < size; j++) {
            row += ((i + j) % 2 == 0) ? " " : "#";
        }
        console.log(row);
    }
};