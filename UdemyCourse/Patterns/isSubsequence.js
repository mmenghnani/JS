function isSubsequence(str1,str2) {
    // good luck. Add any arguments you deem necessary.
    str1 = str1.toLowerCase().split('');
  str2 = str2.toLowerCase().split('');
  let k = 0;
  let i = str2.indexOf(str1[k]);
  k++;
  for(let j=i;j<str2.length;j++){
      if(str2[j] === str1[k]){
          k++;
      }
  }
  if(str1.length === k) return true;
  else return false;
  }

  console.log(isSubsequence('hello','Hi world'));