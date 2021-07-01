const { text } = require("express");

// String Reversal
function reverseString(text){
    return[...text].reverse().join('');
}
// console.log(reverseString('google'));


// Counting of vowel

const vowels =['a','e','i','o','u'];
function vowelsCounter(text){
    let counter = 0;
for(let letter of text.toLowerCase()){
    if(vowels.includes(letter)){
        counter++;
    }
}
return counter
}

// console.log(vowelsCounter('elephant'));

function vowelsCounter1(text){
    let matchingInstances= text.match(/[aeiou]/gi);

    if(matchingInstances){
        return matchingInstances.length;
    }else{
        return 0
    }
}
// console.log(vowelsCounter1('australia'))


//  find the most recurring character 

 function maxRecurringChar(text){
     let charMap = {}
     let maxCharValue = 0
     let maxChar = ''

    for(let char of text){
        if( charMap.hasOwnProperty(char)){
            charMap[char]++
        } else{
            charMap[char]=1
        }
    } 
    console.log(charMap)
    for(let char in charMap){
        if( charMap[char] > maxCharValue){
            maxChar = char
        }
    }    
    return maxChar
 }
 
//  console.log(maxRecurringChar('haskdkdkjddjjhhjjdddjj')) 

//  Shortest word 

function shortestWord(text){
    var sortedArray = text.split(' ').sort((wordA,wordB) => wordB.length - wordA.length);
    console.log(sortedArray)
    var last = sortedArray.length - 1;
    return sortedArray[last];

}
console.log(shortestWord('She is very gratefull'))

// serach and replace

function searchReplace(str,word,newWorld){
    if (word[0]===word[0].toUpperCase()){
        newWorld=newWorld[0].toUpperCase() + newWorld.slice(1)
    }
    return str.replace (word,newWorld)
}

console.log(searchReplace('he is going to goa','goa','mysore')) 

// sentence captitalization

function capSentence(text){
    let wordsArray = text.toLowerCase().split(' ')
    let capsArray = wordsArray.map((word=> {
        return word[0].toUpperCase()+word.slice(1)
    }))
    return capsArray.join(' ')
}
console.log(capSentence('i dont wnt to see them again'))



// integer Reverse

function reverseInteger(num){
    let reversedNumber = parseInt(reverseString(num.toString()))
    return(reversedNumber * Math.sign(num))

}

console.log(reverseInteger(-346))


// range Sum
rangeSum([1,9])

function rangeSum(arr){
    // let sum = 0;
    // for (i=arr[0]; i<= arr[1]; i++){ 
    //     sum += i;
    // }
    // return sum;
    return((arr[1]-arr[0] + 1) * (arr[0]+arr[1]))/2;
    
}
console.log(rangeSum([1,9]))


function names(text){
    return text
}
const Names = {
    name1 : 'Ree',
    name2 : 'Bee'
}


console.log(names(Names))


