var newReleases = [{
    "id": 70111470,
    "title": "Die Hard",
    "rating": 4
  }, {
    "id": 654356453,
    "title": "Bad Boys",
    "rating": 5
  }, {
    "id": 65432445,
    "title": "The Chamber",
    "rating": 3
  }, {
    "id": 675465,
    "title": "Fracture",
    "rating": 5
  }];

//console.log(newReleases.filter((video) => video.rating === 5));

var filteredResult = []; 
newReleases.forEach((video) => {
    video.rating === 5 ? filteredResult.push(video) : null    
})

//console.log(filteredResult);

Array.prototype.newFilter = function(condition){
    let result = [];

    this.forEach((item) => {
        condition(item) ? result.push(item) : null
    })

    return result;
};

console.log(newReleases.newFilter(i => i.rating === 5));