const array = new Set();
array.add(11);
array.add(3);
array.add(4);
array.add(11);
array.add(4);
array.add(7);
array.add(3);


 console.log(`===========using set===================`);
 console.log("remove duplicate element in array:-",array,);

function removedupli(array) {
    const result = [];
  
    for (const i of array) {
      let noRepeat = true;
  
      for (const j of result) {
        if (i === j) {
          noRepeat = false;
          break;
        }
      }
  
      if (noRepeat) {
        result.push(i);
      }
    }
  
    return result;
  }
   console.log(`===========using for===================`);
console.log(array);

// function capFirstLetterInSentence(sentence)
// {
//     let words = sentence.split(" ").map(word =>
//     {
//         return word[0].toUpperCase() + word.slice(1);
//     })
//     return words.join(" ");
// }


console.log(`-------------------------------Step-2-----------------------------------`);
const givenString= "How are you mate";
console.log(`Given String is: ${givenString}`);
function capitalFirstAndLastLetter(str) {
    const words = str.split(' ');
    let result = [];
  
    for (let i = 0; i < words.length; i++) {
      const splitWord = words[i];
      let newSplitWord = '';
  
      if (splitWord.length <= 2) {
        newWord = splitWord.toUpperCase();
      } else {
        newSplitWord = splitWord[0].toUpperCase() +splitWord.slice(1, -1) + splitWord[splitWord.length - 1].toUpperCase();
      }
  
      result.push(newSplitWord);
    }
  
    return result.join(' ');
  }
  
 
  const ans = capitalFirstAndLastLetter(givenString);
  
  console.log(`Expected output will be: ${ans}`);

