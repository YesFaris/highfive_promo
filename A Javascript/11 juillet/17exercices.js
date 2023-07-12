'use strict'
// exercice 1
function findLongestWordLength(str) {
    let convertstringintable = str.split('')
    console.log(convertstringintable)
    let tab = [];
    let obj = [];
    for (let i = 0; i < convertstringintable.length; i++) {
      let newConvert = convertstringintable[i].split('');
      console.log(newConvert);
    
      
    }
    return str.length;
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");
    