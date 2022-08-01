let myString = "Hello, World!";
let myRegex = /Hello/;
let newRegex = /World/;
let result = myRegex.test(myString) 

// console.log(newRegex.test(myString))


// The i flag is used to ignore case matching 
let mystring = "freeCodeCamp";
let fccRegex = /freecodecamp/i; // Change this line
let result1 = fccRegex.test(mystring);

// Using the global flag to extract our more matches
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/gi; // Change this line
let result3 = twinkleStar.match(starRegex); // 
let regex = /^Twinkle/
// console.log(twinkleStar.match(regex))

// using wildcards to match a string of unknown character
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /un./; // 
let result4 = unRegex.test(exampleStr);

// using a character class to find matching characters 
let quoteOfTheDay = "I love programming and I need to forcus so much on programming"
let vowelsRegex = /[aeiou]/gi // This will match all vowel characters in the string
let result5 = quoteOfTheDay.match(vowelsRegex)
// console.log(result5)

// Matching a given set of characters 
let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; // This matches all letters from a through z
let result6 = quoteSample.match(alphabetRegex); // Change this line

let alphetNumberRegex = /[a-g4-9]/gi
let str = "I love programming for sure. I love number 35 to am aaammmmmm"
// console.log(str.match(alphetNumberRegex))

// ^ is put before the characters that you don't want to match 
let dontMatch = /[^a-g0-9]/gi
// console.log(str.match(dontMatch))

// matching zero or more of a given character using *
let matchIt = /am*/g
console.log(str.match(matchIt).filter(element=>element!=""))


// Lazy matching
let text = "<h1>Winter is coming</h1>";
let myRegex1 = /<h.*?>/; // Change this line
// let result7 = text.match(myRegex);

// Use the anchor character ($) to match the string caboose at the end of the string caboose.
// It is put at the end of the string

// using the shorthand to match all aphanumeric characters 
let quoteSample2 = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // This will match every single alphabet letter and any number
let shorthand = /\w+/
let shorthand2 = /\W/g; // This will match every single character but not an alphanumeric character
let shorthandNumber = /\d/ // This is equivalet to doing /[0-9]/
let shorthandNondigitCharacter = /\D/ // This will match all non digit character
// console.log(quoteSample2.match(alphabetRegexV2))

// Trying using given constraints
/**
 * You need to check all the usernames in a database.
 *  Here are some simple rules that users have to follow when creating their username.
 * Usernames can only use alpha-numeric characters.
 * The only numbers in the username have to be at the end. 
 * There can be zero or more of them at the end. Username cannot start with the number.
 * Username letters can be lowercase and uppercase.
 * Usernames have to be at least two characters long. 
 * A two-character username can only use alphabet letters as characters.
 */
let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i; // Change this line
let res1 = userCheck.test(username);

// Removing white space characters from the string
let whiteSpaceRegex = /\s/g
console.log(quoteSample2.match(whiteSpaceRegex))

// Searching everything except the white space in a sentence
let nonWhitespaceRegex = /\S/g
console.log(quoteSample2.match(nonWhitespaceRegex))


// specifying a specific number of characters 
let tim = "Timmmmber"
let specify = /tim{4}ber/i
console.log(tim.match(specify))