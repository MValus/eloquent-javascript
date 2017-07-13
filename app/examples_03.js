exports.min = function (a, b) {
    return (a < b) ? a : b;
};

exports.isEven = function (n) {
    if (n == 0) {
        return true;
    } else if (n == 1) {
        return false;
    } else {
        var hint;
        if (n < 0) {
            hint = n + 2;
        } else {
            hint = n - 2;
        }
        return this.isEven(hint);
    }
};

exports.countBs = function (str) {
    return this.countChars(str, 'B');
};

exports.countChars = function (str, c) {
    var counter = 0;
    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) == c) {
            counter++;
        }
    }
    return counter;
};