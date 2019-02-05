//Minimum

const min = (x, y) => Math.min(x, y);
console.log(min(-10, -20));

//Recursion ???

function isEven (n) {
    if (n===0) {
        return true;
    } else if (n===1) {
        return false
    } else if ()
}

// BEAN COUNTING: count B's and characters

function countBs(string) {

    //create counter
    let count = 0;
    //loop through string to check for b's
    for (let i = 0; i < string.length; i++) {
        if (string.charAt(i) === 'B') {
            count += 1;
        }

    }
    //when loop ends, return the number of b's
    return count;
}
console.log(countBs("BBBC"));

function countChar(string, c) {

    //create counter
    let count = 0;
    //loop through string to check for b's
    for (let i = 0; i < string.length; i++) {
        if (string.charAt(i) === c) {
            count += 1;
        }

    }
    //when loop ends, return the number of b's
    return count;
}
console.log(countChar("kakkerlak", "k"));


