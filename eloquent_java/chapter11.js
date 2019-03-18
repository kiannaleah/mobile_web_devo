//tracking the scalpel
async function locateScalpel(nest) {
  let current = nest.name;
  for (;;) {
    //await makes javascript wait until the promise settles and returns its result
    let next = await anyStorage(nest, current, "scalpel");
    if (next == current) return current;
    current = next;
  }
}

function locateScalpel2(nest) {
  function loop(current) {
    return anyStorage(nest, current, "scalpel").then(next =>{
      if(next == current) return current;
      else return loop(next);
    })
  }
  return loop(nest.name);
}

locateScalpel(bigOak).then(console.log);
// → Butcher Shop
locateScalpel2(bigOak).then(console.log);
// → Butcher's Shop

//Building Promise.All

function Promise_all(promises) {
  return new Promise((resolve, reject) => {
    let newArray = [];
    let waiting = promises.length;
    for(let i = 0; i < promises.length; i++) {
    promises[i].then(result => {
      newArray[i] = result;
      waiting--;
      if (watiing == 0) resolve(newArray)
    }).catch(reject);
    }
    if (promises.length == 0) resilve(results);
  });
}

