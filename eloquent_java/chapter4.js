//The Sum of a Range

function range(start, end) {
    //intialize array
    let array = [];
    for (i = start; i <= end; i++) {
        array.push(i);
    }
    return array;
}

function sum(anArray) {
    let total = 0;
    for (i = 0; i < anArray.length; i++) {
        total += anArray[i];
    }
    return total;
}

console.log(sum(range(1, 10)));

//Reversing An Array

function reverseArray(array) {
    //initialize array
    let newArray = [];

    //loop through array, start with last to make it the first

    for (let i = array.length - 1; i >= 0; i--) {
        newArray.push(array[i]);
    }
    return newArray;
}

function reverseArrayInPlace(array) {
    for (let i = 0; i < Math.floor(array.length / 2); i++) {

        let currValue = array[i];

        array[i] = array[array.length - 1 - i];

        array[array.length - 1 - i] = currValue;
    }
    return array;
}
console.log(reverseArray(["K", "I", "A"]));
console.log(reverseArrayInPlace(["5", "4", "3"]));

//A List

function arrayToList(array) {
    let list = null;

    //create a list starting with the inside
    for (i = array.length - 1; i >= 0; i--) {
        list = {
            value: array[i],
            rest: list
        };
    }
    return list;
}

function listToArray(list) {

    let array = [];

    //create array from list inside 

    for (i = list; i; i = i.rest) {
        array.push(i.value);
    }
    return array;
}

function prepend(element, list) {
    return {
        value: element,
        rest: list
    }
}

function nth(list, number) {
    if (!list) {
        return undefined
    } else if (number === 0) {
        return list.value;
    } else {
        return nth(list.rest, number - 1);
    }
}

console.log(arrayToList([10, 20]));


console.log(listToArray(arrayToList([10, 20, 30])));

console.log(prepend(10, prepend(20, 30)));


console.log(nth(arrayToList([10, 20, 30]), 1));

// Deep Comparison

function deepEqual(value1, value2) {
    if (value1 == value2) {
        return true;
    } else if (typeof value1 !== typeof value2){
        return false;
    }

    let v1P = 0;
    let v2P = 0;

    for (let key in value1) {
        v1P += 1;
    }

    for (let key in value2) {
        v2P += 1;

    if (!(key in value1) || !deepEqual(value1[key], value2[key])) {
return false;
}
    }
return true;
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
