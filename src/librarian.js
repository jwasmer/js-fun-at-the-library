class Librarian {
  constructor(name, library) {
    this.name = name
    this.library = library
  }
  greetPatron(patron, isMorning) {
    if (isMorning === true) {
      return `Good morning, ${patron}!`
    }
    else {
      return `Hello, ${patron}!`
    }
  }
  findBook(bookTitle) {
    var isBookShelved = false
    var shelves = Object.keys(this.library.shelves)
    for (var shelf of shelves) {
      var currentShelf = this.library.shelves[shelf]
      for (var i = 0; i < currentShelf.length; i++) {
        if (currentShelf[i].title === bookTitle) {
          isBookShelved = true
          currentShelf.splice(i, 1)

        }
      }
    }
    if (isBookShelved === false) {
      return `Sorry, we do not have ${bookTitle}`
    }
    else {
      return `Yes, we have ${bookTitle}`
    }
  }
  calculateLateFee(numDaysLate) {
    var lateFeeUnrounded = numDaysLate * 0.25
    var lateFeeRounded = Math.ceil(lateFeeUnrounded)
    return lateFeeRounded
  }
}

module.exports = Librarian;
