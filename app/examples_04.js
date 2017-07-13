exports.sum = function (arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
};

exports.range = function (start, end, step) {
    if (step == 0) {
        throw new Error("zero-value step is prohibited");
    }
    step = (step === undefined) ? 1 : step;
    var arr = [];
    if (start < end) {
        if (step < 0) return arr;
        for (; start <= end; start += step) {
            arr.push(start);
        }
    } else {
        if (step > 0) return arr;
        for (; start >= end; start += step) {
            arr.push(start);
        }
    }
    return arr;
};

exports.reverseArrayInPlace = function (arr) {
    var temp;
    for (var i = 0, inv_i = arr.length - 1; i < Math.floor(arr.length / 2); i++, inv_i--) {
        temp = arr[i];
        arr[i] = arr[inv_i];
        arr[inv_i] = temp;
    }
};

exports.reverseArray = function (arr) {
    var rev_arr = [];
    for (var i = 0; i < arr.length; i++) {
        rev_arr.unshift(arr[i]);
    }
    return rev_arr;
};

exports.arrayToList = function (arr) {
    if (arr.length == 0) {
        return null;
    } else if (arr.length == 1) {
        return {
            value: arr.shift(),
            rest: null
        }
    } else {
        return {
            value: arr.shift(),
            rest: this.arrayToList(arr)
        }
    }
};

exports.listToArray = function (list) {
    arr = [];
    if (list != null) {
        arr.push(list.value);
        while (list.rest != null) {
            list = list.rest;
            arr.push(list.value);
        }

    }
    return arr;
};

exports.prepend = function (element, list) {
    return {
        value: element,
        rest: list
    }
};

exports.nth = function (list, index) {
    if (index == 0) {
        return list.value;
    } else {
        if (list.rest == null) {
            return undefined;
        }
        return this.nth(list.rest, index - 1)
    }
};

exports.deepEquals = function(a, b) {
    if(typeof a == "object" && typeof b == "object") {
        var aNumOfFields = Object.keys(a).length;
        var bNumOfFields = Object.keys(b).length;
        if(aNumOfFields == 0 && bNumOfFields == 0) {
            return true;
        } else if(aNumOfFields != bNumOfFields) {
            return false;
        } else {
            for(var field in a) {
                if(b.hasOwnProperty(field)) {
                    return this.deepEquals(a[field], b[field]);
                } else {
                    return false;
                }
            }
        }
    }
    return a === b;
};