//1. flattening 

let arrays = [[1,2,3],[4,5],[6],[7,8]];

//flat is the combing method --.see MDN flat() 
console.log(arrays.reduce((flat, current) => flat.concat(current), []));

//2. Your Own Loop

function loop(start, testf, updatef, body) {
    for(let value = start; testf(value); value = updatef(value)){
        body(value);
    }
}

loop(6, n => n > 0, n => n - 1, console.log);

//3. Everything

//for..of loops over each element in the array and tests it
function every(array, test) {
for (let element of array) {
    if (!test(element)) return false;
}
return true;
}


function every(array, test){
 return !array.some(element => !test(element));
}

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true

//4. Dominant Writing Direction ?? countBy

function dominantDirection(text) {
     let scripts = countBy(text, char => {
         let script = characterScript(char.codePointAt(0));
         return script ? script.direction: "none";
    }).filter(({name}) => name != "none");
    
    if (scripts.length == 0) return "ltr";

     return scripts.reduce((a,b) => a.count > b.count ? a : b).name;
}


console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl

