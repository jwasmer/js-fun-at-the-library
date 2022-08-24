function shelfBook(book, shelf) {
  if (shelf.length < 3) {
  shelf.unshift(book)
  }
}

function unshelfBook(book, shelf) {
  for (i = 0; i < shelf.length; i++) {
    if (shelf[i].title === book) {
      shelf.splice(i, 1)
    }
  }
}

function listTitles(shelfName) {
  var titlesOnShelf = null
  for (i = 0; i < shelfName.length; i++) {
    if (titlesOnShelf === null) {
      titlesOnShelf = `${shelfName[i].title}`
    }
    else {
      titlesOnShelf = `${titlesOnShelf}, ${shelfName[i].title}`
    }
  }
  console.log(titlesOnShelf)
  return titlesOnShelf
}

function searchShelf(shelf, book) {
  var isOnShelf = false
  for (i = 0; i < shelf.length; i++) {
    if (book === shelf[i].title) {
      isOnShelf = true
    }
  }
  return isOnShelf
}

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};
