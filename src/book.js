function createTitle(title) {
  return `The ${title}`
}

function buildMainCharacter(name, age, pronouns) {
  return {
    name: name,
    age: age,
    pronouns: pronouns
  }
}

function saveReview(reviewText, reviewsHolder) {

  var isUnique = true

  for (i = 0; i < reviewsHolder.length; i++) {
    if (reviewsHolder[i] === reviewText) {
      isUnique = false
    }
  }
  if (isUnique === true) {
    reviewsHolder.push(reviewText)
  }
}

function calculatePageCount(title) {
  var bookLength = title.length * 20
  return bookLength
}

function writeBook(title, character, genre) {
  return {
    title: title,
    mainCharacter: character,
    pageCount: calculatePageCount(title),
    genre: genre
  }
}

function editBook(book) {
  book.pageCount = book.pageCount * .75
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
