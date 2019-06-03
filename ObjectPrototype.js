var obj1  = {
    x: 1
  };

 // The object which should be the prototype of the newly-created object.Obj1 is the prototype 
var obj2 = Object.create(obj1);
  
obj1.y = 90;
obj2.z = 9;

  
//   console.log(obj2.x);
//   console.log(obj2.y);
//   console.log(obj1.y);
  
//   console.log(obj1.hasOwnProperty('z'));
//   console.log(obj2.hasOwnProperty('z'));
  
//   console.log(Object.getOwnPropertyNames(obj1));
//   console.log(Object.getOwnPropertyNames(obj2));
  
  //console.log(Object.getPrototypeOf(obj1));
  
  var person1 = new Object();
  console.log(Object.getPrototypeOf(person1));
  
//   var obj3 = Object.create(obj2);
  
//   console.log(obj3.x);
  

/*
var has function level scope and let has block level scope. In the 
first example below, the value of i will be same.
*/

//   for (var i=1 ; i<5; i++) {
//       setTimeout(function() {
//           console.log(i);
//       }, i*1000);
//   }
  
//   for (let i=1 ; i<5; i++) {
//       setTimeout(function() {
//           console.log(i);
//       }, i*1000);
//   }