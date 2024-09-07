//strings are used to store and manipulate text.
//string can be created using the following syantax.
let name = "bipin";
console.log(name.length);

//strings can also be created in single quotes 'bipin'
let subject = "math";
console.log(subject);
console.log(subject[3]);

//template literals (modern)
//template literals use backticks instead of quotes to define a string `` let  name = `bishnu`
let boy1 = "bipin";
let boy2 = "alex";
let sentence = `${boy1} is friend of ${boy2}`;
console.log(sentence);

//escape sequence characters
let game = "foot'nball";
console.log(game);
