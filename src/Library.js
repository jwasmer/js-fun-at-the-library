function createLibrary (name) {
  return {
    name: name,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: []
    }
  }
}

function addBook (library, book) {
  var bookGenre = book.genre
  library.shelves[bookGenre].push(book)
}

function checkoutBook (library, book, genre) {
  var isBookShelved = false
  for (i = 0; i < library.shelves[genre].length; i++) {
    if (library.shelves[genre][i].title === book) {
      library.shelves[genre].splice(i, 1)
      isBookShelved = true
    }
  }
  if (isBookShelved === false) {
    return `Sorry, there are currently no copies of ${book} available at the ${library.name}`
  }
  else {
    return(`You have now checked out ${book} from the ${library.name}`)
  }
}

module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};
