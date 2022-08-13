// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add(bookList, bookName) {
  let newArr = [...bookList]
  newArr.push(bookName);
  return newArr;
  
  // Change code above this line
}

// Change code below this line
function remove(bookList, bookName) {
  let bookarr = [...bookList]
  const book_index = bookList.indexOf(bookName);
  if (book_index >= 0) {

    bookarr.splice(book_index, 1);
    return bookarr;

    // Change code above this line
    }
}

console.log(add(bookList, "I love programming"))
console.log(bookList)