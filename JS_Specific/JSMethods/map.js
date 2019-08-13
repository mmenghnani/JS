var newReleases = [{
    "id": 70111470,
    "title": "Die Hard",
    "rating": [4.0]
  }, {
    "id": 654356453,
    "title": "Bad Boys",
    "rating": [5.0]
  }, {
    "id": 65432445,
    "title": "The Chamber",
    "rating": [4.0]
  }, {
    "id": 675465,
    "title": "Fracture",
    "rating": [5.0]
  }];

//   newReleases.map((video) => {
//     console.log(video.id + ' ' +  video.title);
//   })

// for(let i=0;i<newReleases.length;i++){
//     console.log(newReleases[i].id + ' ' + newReleases[i].title);
// }

Array.prototype.map = function(condition){
    var result = [];
    this.forEach(item => result.push(condition(item)));
    return result;
}

console.log(newReleases.map(item => item.id + ' '+ item.title));