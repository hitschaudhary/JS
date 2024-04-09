//array

const myArr1 = [0, 1, 2, 3, 4, 5, 6, 7, 9]
const myHeros = ["shaktiman", "nagraj"] 
//console.log(myArr1[1]);

const myArr2 = new Array(1, 2, 3, 4)
//console.log(myArr2[1]);

//Array methods

// myArr1.push(6)
// myArr1.push(7)
// myArr1.pop()

// myArr1.unshift(9)
// myArr1.shift()

// console.log(myArr1.includes(9));
// console.log(myArr1.indexOf(2));

const newArr = myArr1.join()
// console.log(newArr);
// console.log(typeof newArr);

//console.log(myArr1);


//slice, splice

console.log("A ", myArr1);

const myn1 = myArr1.slice(1, 3)
console.log(myn1);
console.log("B ", myArr1);


const myn2 = myArr1.splice(1, 3)
console.log("c ", myArr1);
console.log(myn2);
