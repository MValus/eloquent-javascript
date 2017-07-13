var mountains = require("./mountains");

var protoRabbit = {
    type: "proto",
    speak: function (line) {
        console.log("The " + this.type + " rabbit says '" + line + "'");
        console.log(this);
    }
};

var whiteRabbit = Object.create(protoRabbit);
whiteRabbit.type = "white";
var fatRabbit = Object.create(protoRabbit);
fatRabbit.type = "fat";
var killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "killer";

whiteRabbit.speak("Oh my ears and whiskers, how late it's getting!");
fatRabbit.speak("I could sure use a carrot right now.");
killerRabbit.speak("SKREEEE!");


function rowHeights(rows) {
    return rows.map(function (row) {
        return row.reduce(function (max, cell) {
            return Math.max(max, cell.minHeight());
        }, 0);
    });
}

function colWidths(rows) {
    return rows[0].map(function (_, i) {
        return rows.reduce(function (max, row) {
            return Math.max(max, row[i].minWidth());
        }, 0);
    });
}

function drawTable(rows) {
    var heights = rowHeights(rows);
    var widths = colWidths(rows);

    function drawLine(blocks, lineNo) {
        return blocks.map(function (block) {
            return block[lineNo];
        }).join(" ");
    }

    function drawRow(row, rowNum) {
        var blocks = row.map(function (cell, colNum) {
            return cell.draw(widths[colNum], heights[rowNum]);
        });
        return blocks[0].map(function (_, lineNo) {
            return drawLine(blocks, lineNo);
        }).join("\n");
    }

    return rows.map(drawRow).join("\n");
}

function repeat(string, times) {
    var result = "";
    for (var i = 0; i < times; i++)
        result += string;
    return result;
}

function TextCell(text) {
    this.text = text.split("\n");
}
TextCell.prototype.minWidth = function () {
    return this.text.reduce(function (width, line) {
        return Math.max(width, line.length);
    }, 0);
};
TextCell.prototype.minHeight = function () {
    return this.text.length;
};
TextCell.prototype.draw = function (width, height) {
    var result = [];
    for (var i = 0; i < height; i++) {
        var line = this.text[i] || "";
        result.push(line + repeat(" ", width - line.length));
    }
    return result;
};

function UnderlinedCell(inner) {
    this.inner = inner;
}
UnderlinedCell.prototype.minWidth = function () {
    return this.inner.minWidth();
};
UnderlinedCell.prototype.minHeight = function () {
    return this.inner.minHeight() + 1;
};
UnderlinedCell.prototype.draw = function (width, height) {
    return this.inner.draw(width, height - 1)
        .concat([repeat("-", width)]);
};

function dataTable(data) {
    var keys = Object.keys(data[0]);
    var headers = keys.map(function (name) {
        return new UnderlinedCell(new TextCell(name));
    });
    var body = data.map(function (row) {
        return keys.map(function (name) {
            return new TextCell(String(row[name]));
        });
    });
    return [headers].concat(body);
}


exports.printTable = function () {
    console.log(drawTable(dataTable(mountains)));
};