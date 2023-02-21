const a = [1, 2, 3, 4]

console.log(a)

//nested arrays OMG i love JS

let array = [['A', 'b'], [1, 2]]

array.push(["HELLOW", "OMG"])

console.log(array[2][1])

//array methods

let items = [

    { name: "Hi", price: 200},
    { name: "Hi2", price: 100},
    { name: "Hi3", price: 500},
    { name: "Hi4", price: 700},
]

//1.filte===================================


let filteredItems = items.filter((items) => {
return items.price <= 200;
})

console.log(filteredItems)


//2.map=====================================

let newnames = items.map((items) =>{

    return items.name;
})

console.log(newnames);

//3.find=====================================

let foundItem = items.find((items) => {

    return items.name === "Hi4";
})

console.log(foundItem)

//4.for each===============================

let printNames = items.forEach((items)=>{

    console.log(items.name)

})

//5.some========================================

let cheapItems = items.some((items) =>{

    return items.price <= 100;
})

console.log(cheapItems)

//5.every (almost the same as some but intead every single item must satisfy the statement)

let EverySingleItem = items.every((items) =>{

    return items.price <= 100;
})

console.log(EverySingleItem)


//6.reduce(Sums all the items within the array)===================

let total = items.reduce((currentTotal, items) =>{

    return items.price + currentTotal
}, 0 /*0 is the counter for currentTotal*/)

console.log(total)



//6.includes===================

const numbers = [1, 2, 3, 4, 5]

let check = numbers.includes(9)

console.log(check)

