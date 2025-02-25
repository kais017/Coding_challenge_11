// Task 1: Creating a Book Class

class Book {
constructor(title, author, isbn, copies) {
this.tile = title
this.author = author
this.isbn = isbn
this.copies = copies
  }
// creating a Book class with properties

getDetails() {
return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}, Copies: ${this.copies}`
} // method that returns formattes string of book details

updateCopies(quantity) { 
    this.copeis += quanitity;
// method that updates the amount of available copies when a book is borrowed or returned
  }
}

// test cases: 
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 123456, 5);
console.log(book1.getDetails()); // adding a new book and returning details

book1.updateCopies(-1); // updating the quantity 
console.log(book1.getDetails()); // logging the test case details



