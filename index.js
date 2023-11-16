// let products = [
//     {
//         name: "moloko",
//         type: "milk",
//         price: 12000
//     },
//     {
//         name: "apple",
//         type: "fruit",
//         price: 20000
//     },
//     {
//         name: "sakura",
//         type: "alcohol",
//         price: 20000
//     },
//     {
//         name: "yogurt",
//         type: "milk",
//         price: 8000
//     },
//     {
//         name: "banan",
//         type: "fruit",
//         price: 25000
//     },
//     {
//         name: "pivo",
//         type: "alcohol",
//         price: 14000
//     },
//     {
//         name: "tvorog",
//         type: "milk",
//         price: 11000
//     },
//     {
//         name: "alphapvp",
//         type: "alcohol",
//         price: 80000
//     },
//     {
//         name: "konyak AMIR",
//         type: "alcohol",
//         price: 1000
//     },
//     {
//         name: "smetana",
//         type: "milk",
//         price: 12500
//     },
// ]


// let categories = [
//     {
//         type: "milk",
//         amount: 0
//     },
//     {
//         type: "alcohol",
//         amount: 0
//     },
//     {
//         type: "fruit",
//         amount: 0
//     },
// ]

// for(let product of products){
//     for(let item of categories){
//         if(product.type === item.type){
//             item.amount++
//         }
//     }
// }

// for(let i = 0; i < products.length; i++){
//     for(let k = 0; k < categories.length; k++){
//         if(products[i].type === categories[k].type){
//             categories[k].amount++
//         }
//     }
// }

// console.table(categories)

// for(let i = 0; i < 5; i++){
//     for(let k = 0; k < 3; k++){
//         document.write(i)
//     }
// }

// for (let i = 1; i <= 10; i++) {
//     for (let k = 1; k <= 10; k++) {
//         document.write(`${i} * ${k} = ${i * k} <br/>`)
//     }
//     document.write(`<hr/>`)
// }

// for (let i = 5; i > 0; i--) {
//     for (let k = 0; k < i; k++) {
//         document.write(`*`)
//     }
//     document.write(`<br/>`)
// }



let arr = [
    {
        id: Math.random(),
        name: 'Timur',
        info: {
            school: '235',
            faculity: 'SMM'
        },
    },
    {
        id: Math.random(),
        name: 'Imran',
        info: {
            school: 'ne izvestno',
            faculity: 'programming'
        },
    },
    {
        id: Math.random(),
        name: 'Aminjon',
        info: {
            school: '444',
            faculity: 'Dizayn'
        },
    },
    {
        id: Math.random(),
        name: 'Maxmud',
        info: {
            school: '777',
            faculity: '3dsmax'
        },
    },
    {
        id: Math.random(),
        name: 'Muxammad',
        info: {
            school: '5555',
            faculity: 'Backend'
        },
    }
]

let categories = [
    {
        course: 'SMM',
        count: 0
    },
    {
        course: 'PROGRAMMING',
        count: 0
    },
    {
        course: '3DSMAX',
        count: 0
    },
    {
        course: 'DIZAYN',
        count: 0
    },
    {       
        course: 'BACKEND',
        count: 0
    },
]

for(let i = 0; i < categories.length; i++){
    categories[i].name = []
    for(let k = 0; k < arr.length; k++){
        if(arr[k].info.faculity == categories[i].course){
            categories[i].name.push(arr[k].name)
            categories[i].count++
        }
    }
}

