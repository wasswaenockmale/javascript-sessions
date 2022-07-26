// The global variable
const watchList = [
    {
      "Title": "Inception",
      "Year": "2010",
      "Rated": "PG-13",
      "Released": "16 Jul 2010",
      "Runtime": "148 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Christopher Nolan",
      "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
      "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
      "Language": "English, Japanese, French",
      "Country": "USA, UK",
      "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
      "Metascore": "74",
      "imdbRating": "8.8",
      "imdbVotes": "1,446,708",
      "imdbID": "tt1375666",
      "Type": "movie",
      "Response": "True"
    },
    {
      "Title": "Interstellar",
      "Year": "2014",
      "Rated": "PG-13",
      "Released": "07 Nov 2014",
      "Runtime": "169 min",
      "Genre": "Adventure, Drama, Sci-Fi",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan, Christopher Nolan",
      "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
      "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      "Language": "English",
      "Country": "USA, UK",
      "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
      "Metascore": "74",
      "imdbRating": "8.6",
      "imdbVotes": "910,366",
      "imdbID": "tt0816692",
      "Type": "movie",
      "Response": "True"
    },
    {
      "Title": "The Dark Knight",
      "Year": "2008",
      "Rated": "PG-13",
      "Released": "18 Jul 2008",
      "Runtime": "152 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
      "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
      "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
      "Language": "English, Mandarin",
      "Country": "USA, UK",
      "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
      "Metascore": "82",
      "imdbRating": "9.0",
      "imdbVotes": "1,652,832",
      "imdbID": "tt0468569",
      "Type": "movie",
      "Response": "True"
    },
    {
      "Title": "Batman Begins",
      "Year": "2005",
      "Rated": "PG-13",
      "Released": "15 Jun 2005",
      "Runtime": "140 min",
      "Genre": "Action, Adventure",
      "Director": "Christopher Nolan",
      "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
      "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
      "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
      "Language": "English, Urdu, Mandarin",
      "Country": "USA, UK",
      "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
      "Metascore": "70",
      "imdbRating": "8.3",
      "imdbVotes": "972,584",
      "imdbID": "tt0372784",
      "Type": "movie",
      "Response": "True"
    },
    {
      "Title": "Avatar",
      "Year": "2009",
      "Rated": "PG-13",
      "Released": "18 Dec 2009",
      "Runtime": "162 min",
      "Genre": "Action, Adventure, Fantasy",
      "Director": "James Cameron",
      "Writer": "James Cameron",
      "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
      "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
      "Language": "English, Spanish",
      "Country": "USA, UK",
      "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
      "Metascore": "83",
      "imdbRating": "7.9",
      "imdbVotes": "876,575",
      "imdbID": "tt0499549",
      "Type": "movie",
      "Response": "True"
    }
  ];
  
  function getRating(watchList) {
    // Only change code below this line
    let averageRating = watchList.map(elem=>{
      return {rating:elem.imdbRating,director:elem.Director}
    })
    .filter(elem=>elem.director === 'Christopher Nolan')
    .reduce((average, currentV, index)=>{
      // makesure to still multiply the average value with the value of the index 
      return (average*(index) + (+currentV.rating))/(index+1)
        // return index+1
    },0)
    return averageRating;
  }
  
  // console.log(getRating(watchList));
  const squareList = arr => {
    // Only change code below this line
    return arr.filter(element =>element>=0 && (element - (Math.floor(element))) === 0).map(element=>element*element);
    // Only change code above this line
  };
  
  const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
  // console.log(squaredIntegers);
  console.log(squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]))

  function alphabeticalOrder(arr) {
    // Only change code below this line
  
    return arr.sort((a,b)=>{
      return a === b ? 0 : a > b ? 1: -1
    })
    // Only change code above this line
  }
  
  alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);


  const globalArray = [5, 6, 3, 2, 9];

// Returning a sorted array without changing the original array.
function nonMutatingSort(arr) {
  // Only change code below this line
  return [...arr].sort((a,b)=>{
    return a - b
  })

  // Only change code above this line
}

nonMutatingSort(globalArray);

// Spliting the function with a non-alphanumeric characters
function splitify(str) {
  // Only change code below this line
  return str.split(/\W/)
  // Only change code above this line
}

splitify("Hello World,I-am code");

// Only change code below this line
function urlSlug(title) {
  return title.toLowerCase().split(" ").filter(string=>string !== "").join("-")
}
// Only change code above this line
// urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone");
// console.log(urlSlug(" Winter Is  Coming"))

function checkPositive(arr) {
  // Only change code below this line
  return arr.every((currentValue)=>{
    return currentValue > 0
  })
  // Only change code above this line
}

checkPositive([1, 2, 3, -4, 5]);

function checkPositive(arr) {
  // Only change code below this line
  return arr.some((element)=>{
    return element > 0
  })
  // Only change code above this line
}

/**
 * Introduction to Currying and Partial Application
 * The arity of a function is the number of arguments it requires. 
 * Currying a function means to convert a function of N arity into N functions of arity 1.
 * In other words, it restructures a function so it takes one argument, 
 * then returns another function that takes the next argument, and so on.
 * Here's an example:
 * @param {*} x 
 * @returns 
 */
function add(x) {
  // Only change code below this line
  return function(y){
    return function(z){
      return x + y + z
    }
  }
  // Only change code above this line
}

console.log(add(10)(20)(30))

/**
 * Similarly, partial application can be described as applying a few arguments 
 * to a function at a time and returning another function that is applied to more arguments. 
 * Here's an example:
 */
function impartial(x, y, z) {
  return x + y + z;
}

const partialFn = impartial.bind(this, 1, 2);
partialFn(10); // 13