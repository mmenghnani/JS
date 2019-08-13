var countAndSay = function(n) {
    if(n === 1) return '1';
    if(n === 2) return '11';
    let str = '11';
    for(let i=3;i<=n;i++){
       console.log('I am here');
       str += '$';
       let len = str.length;
       let count = 1;
       let tmp = '';
       str = str.split('')
        for(let j=1;j<len;j++){
          if(str[j] !== str[j-1]){
            tmp += count + str[j-1]
            count = 1;
          }
          else {
            count++;
          }
        }
      str = tmp;
    }
   
   return str;
 };

 console.log(countAndSay(5));