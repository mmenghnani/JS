
function romanToInt(str){

    const map = new Map([['I', 1], ['V', 5], ['X', 10], ['L', 50], ['C', 100], ['D', 500], ['M', 1000]]);
    
    let i = str.length-1;
    let result = map.get(str[i]);
    
    while(i > 0){
      let curr = map.get(str[i]);
      let prev = map.get(str[i-1]);
      if(curr > prev){
        result = result - prev;
      }
      else {
        result += prev;
      }
    
    
      i--;
    }
    
    console.log(result);
    }

    romanToInt('VII');