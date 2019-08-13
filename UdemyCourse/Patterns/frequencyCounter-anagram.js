
// Given 2 strings, write a function to determine if the second string is an anagram of the first
// str1 = 'aaz'
// str2 = 'za'

function validAnagram(str1,str2){
    str1 = str1.split('');
    str2 = str2.split('');

    if(str1.length !== str2.length){
        return false;
    }

    let frequencyObject1 = computeMapr(str1);
    let frequencyObject2 = computeMapr(str2);

    for(let key in frequencyObject1){
        if(frequencyObject1[key] !== frequencyObject2[key]){
            return false;
        }
    }
    return true;
}

function computeMapr(str){
    let frequencyObject = {};
    for(let i=0;i<str.length;i++){
        if(frequencyObject[str[i]]){
            frequencyObject[str[i]] = frequencyObject[str[i]] + 1;
        }
        else frequencyObject[str[i]] = 1;
    }
    return frequencyObject;
}

// console.log(validAnagram('abcdaa','abcada'));
console.log(validAnagram('anagram','nagaram'));