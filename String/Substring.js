let str = 'ABD';
result = [];

function findSubstring(str){
    str = str.split('');
    for(let i=0;i<str.length;i++){
        for(let j=i;j<str.length;j++){
            let newStr = '';
            for(let k=i;k<=j;k++){
                newStr += str[k];
            }
            result.push(newStr);
        }
    }
    console.log(result);
}

findSubstring(str);