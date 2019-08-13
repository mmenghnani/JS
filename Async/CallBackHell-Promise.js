// import { resolve } from "path";
// import { rejects } from "assert";

// function getRecipe(){
//     setTimeout(()=> {
//         const recipeId = [523, 883, 432, 974];
//         console.log(recipeId);
//         setTimeout( id => {
//             const recipe = {
//                 'title' : 'pasta',
//                 'publisher' : 'jonas'
//             }
//             console.log(`${id}:${recipe.title}`);
//             setTimeout(publisher => {
//                 const recipe2 = {
//                     'title' : 'italian pizza',
//                     'publisher' : 'jonas'
//                 }
//                 console.log(recipe);
//             }, 1500, recipe.publisher)
//         }, 1500, recipeId[2])
//     }, 1500)
// }

// getRecipe();


const getIDs = new Promise((resolve,reject) => {
    setTimeout(() => {
        //resolve('promise is successful');
        reject('promise failed!')
    },1000)
});

getIDs
.then(IDs => {
    console.log(IDs);
})
.catch(error => {
    console.log('error');
})

const getRecipe1 = recipeId => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(recipeId)
        },1500);
    })
}

getRecipe1
.then(Id => {
    return new Promise((resolve,reject) => {
        console.log(Id);
        setTimeout(() => {
            resolve(Id[2])
        }, 1500)
    })
})
// .then(Id => {
//     return new Promise((resolve,reject) => {
//         console.log(Id);
//         setTimeout(() => {
//             resolve('promise chaining!')
//         }, 1500)
//     })
// }) 

