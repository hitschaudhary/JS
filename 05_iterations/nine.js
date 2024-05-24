const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) { // function
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)//<= starting


const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)
console.log(myTotal);
 
const shoppingCard = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "mobil course",
        price: 8999
    },
    {
        itemName: "py course",
        price: 10999
    },
    {
        itemName: "c++ course",
        price: 3999
    },
]

const priceTOpay = shoppingCard.reduce((acc, item) =>acc+item.price,0)
console.log(priceTOpay);