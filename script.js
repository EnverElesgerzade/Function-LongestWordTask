let words = ["type", "javascript", "react", "script", "frontendandbackend"];

function longestWord(words) {
    let longest = words[0];

      for(let i = 0; i < words.length; i++) {
        if(words[i].length > longest.length) {
            longest = words[i];
        }
      }

      return longest;
}

console.log(longestWord(words));