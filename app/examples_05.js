var ancestry = require("./ancestry");

function foreach(array, action) {
    for (var i = 0; i < array.length; i++)
        action(array[i]);
}

function filter(array, test) {
    var passed = [];
    foreach(array, function (item) {
        if (test(item))
            passed.push(item);
    });
    return passed;
}

function map(array, transform) {
    var mapped = [];
    foreach(array, function (item) {
        mapped.push(transform(item));
    });
    return mapped;
}

function reduce(array, combine, start) {
    var current = start;
    foreach(array, function (item) {
        current = combine(current, item);
    });
    return current;
}

function olderThan(age) {
    return function (item) {
        return (item.died - item.born) > age;
    }
}

var getName = function () {
    return function (item) {
        return item.name;
    }
};

var getAge = function (person) {
    return person.died - person.born;
};

function plus(a, b) {
    return a + b;
}

function average(array) {
    return reduce(array, plus, 0) / array.length;
}

function male(person) {
    return person.sex == "m";
}

function female(person) {
    return person.sex == "f";
}

exports.sharedDNA = function () {
    var ancestors = JSON.parse(ancestry);
    var byName = {};
    ancestors.forEach(function (person) {
        byName[person.name] = person;
    });

    function reduceAncestors(person, f, defaultValue) {
        function valueFor(person) {
            if(person == null) {
                return defaultValue;
            } else {
                return f(person, valueFor(byName[person.mother]), valueFor(byName[person.father]));
            }
        }
        return valueFor(person);
    }
    
    function sharedDNA(person, fromMother, fromFather) {
        if(person.name === "Pauwels van Haverbeke") {
            return 1;
        } else {
            return (fromMother + fromFather) / 2;
        }
    }

    var ph = byName["Philibert Haverbeke"];
    return reduceAncestors(ph, sharedDNA, 0) / 4;
};

exports.flatten = function(arrayOfArray) {
  return arrayOfArray.reduce(function (acc, curVal) {
      return acc.concat((curVal instanceof Array) ? exports.flatten(curVal) : curVal);
  }, []);
};