// const name1 = process.argv[2]

const { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require("constants");

// console.log(`Hello ${name1}!`);

// for (let i=0; i < 7; i++) {

//     console.log("*".repeat(i+1));
// }

// for (let i=1; i<=100; i++) {
//     if (i % 5 == 0 && i % 3 == 0) {
//         console.log("FizzBuzz");
//     } else if (i % 3 == 0) {
//         console.log("Fizz");
//     } else if (i % 5 == 0) {
//         console.log("Buzz");
//     } else {
//         console.log(i);
//     }
// }

// for (let i=0; i<8; i++) {
//     if (i%2) {
//         console.log(" #".repeat(4))
//     } else {
//         console.log("# ".repeat(4))
//     }
// }

// CHAPTER 4
function findMin(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

// console.log(findMin(3, 4))

function isEven(n) {
    if (n == 0) {
        return true;
    } else if (n == 1) {
        return false;
    }
    if (n > 0) {
        return isEven(n - 2);
    } else {
        return isEven(n + 2)
    }
     
}

// console.log(isEven(50));
// console.log(isEven(-1));

function countBs(string) {
    return countChar(string);
}

function countChar(string, char) {
    let count = 0;
    if (char) {
        for (let c of string) {
            if (c === char) {
                count += 1
            }
        }
    } else {
        for (let c of string) {
            if (c === "B") {
                count += 1
            }
        }
    }

    return count;
}

console.log(countBs("ghejBjsdjBdjsbsdsB"))