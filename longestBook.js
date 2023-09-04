const listOfBooks = [
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    genre: 'fiction',
    published: 1925,
    pages: 180
  },
  {
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    genre: 'fiction',
    published: 1951,
    pages: 224
  },
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    genre: 'fiction',
    published: 1960,
    pages: 281
  },
  {
    title: '1984',
    author: 'George Orwell',
    genre: 'fiction',
    published: 1949,
    pages: 328
  },
  {
    title: 'Do Androids Dream of Electric Sheep?',
    author: 'Philip K. Dick',
    genre: 'fiction',
    published: 1968,
    pages: 210
  },

];

// Return an object with the title and author of the longest book predating a given year:
const findLongestBookPublishedBefore = function(year, books) {
  const booksBeforeYear = books.filter((book) => book.published < year); // filter for only the books published before the given year
  const longestBook = booksBeforeYear.reduce((acc, curr) => curr.pages > acc.pages ? curr : acc); // if the current iterable is greater than the value stored in the accumulator, return curr. otherwise, return acc.

  return { title: longestBook.title, author: longestBook.author };
}

console.log(findLongestBookPublishedBefore(1960, listOfBooks));