// Execise 1: Create a range in form of an array and find its sum
function range(start, end, step=1) {
    let arr = [];
    while (start <= end) {
        arr.push(start);
        start += step;
    }
    return arr;
}

function sum(arr) {
    return arr.reduce((accumulator, currentVal) => (accumulator + currentVal));
}

console.log("Sum of range [1, 10] with step of 2:", sum(range(1, 10, 2)))

//Exercise 2: Reverse Array by creating a new array to store the reversed one or by modifying the array itself
function reverseArrayNew(arr) {
    let newArr = [];
    for (let el of arr) {
        newArr.unshift(el);
    }
    return newArr;
}

function reverseArray(arr) {
    for (let i=0; i< Math.floor(arr.length/2); i++) {
        let temp = arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = temp;
    }
}

let arr =  [1, 2, 3, 4, 5]
console.log(reverseArrayNew(arr));
reverseArray(arr);
console.log(arr)

// Excersise 3: LIST data structure
// let listt1 = { 
//     value: 1, 
//     rest: { 
//         value: 2, 
//         rest: { 
//             value: 3, 
//             rest: {
//                 value: 4,
//                 rest: null
//             } 
//         } 
//     } 
// };

//convert an array to list
function arrayToList(arr) {
    if (arr.length == 1) {
        return {value: arr[0], rest: null};
    } else {
        return {value: arr[0], rest: arrayToList(arr.slice(1))}
    }
}

//convert an array to list recursively
function arrayToList2(arr) {
    let listt = null;
    for (let el of arr.reverse()) {
        listt = {
            value: el,
            rest: listt
        }
    }
    return listt;
}

let arr = [1, 2, 3]
console.log(arrayToList2(arr))

// convert a list to Array
function listToArray(listt) {
    let arr = []
    while (listt) {
        arr.push(listt.value);
        listt = listt.rest
    }
    return arr;
}

let listt1 = { 
    value: 1, 
    rest: { 
        value: 2, 
        rest: { 
            value: 3, 
            rest: {
                value: 4,
                rest: null
            } 
        } 
    } 
};

console.log(listToArray(listt1))

// prepend an element to the beginning of a given list, return a new list 
function prepend(listt, el) {
    return {value: el, rest: listt}
}

console.log(prepend(listt1, 5))

// show the value of nth element in the list
function nth(listt, n) {
    let i = 0;
    while (listt) {
        if (i==n) {
            return listt.value
        } else {
            listt = listt.rest
        }
        i += 1
    }
    return undefined;
}

function recursiveNth(listt, n) {
    if (n==0) {
        return listt.value;
    }
    if (listt.rest) {
        return recursiveNth(listt.rest, n-1)
    } else {
        return undefined;
    }
    
}

console.log(recursiveNth(listt1, 3))

