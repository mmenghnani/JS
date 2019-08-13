let a = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve('test');
    },1500)
})