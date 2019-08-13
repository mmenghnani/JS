// console.log(1);
// setTimeout(() => {
//     console.log(2) 
//     },1000);
// console.log(3);

function callback(){
    console.log('I am a callback function');
}

function awesome(a,b){
    console.log(a);
    b();
}

awesome(5,callback);