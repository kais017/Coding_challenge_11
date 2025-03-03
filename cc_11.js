// Task 1: Creating a Book Class

class Book {
constructor(title, author, isbn, copies) {
this.title = title
this.author = author
this.isbn = isbn
this.copies = copies
  }
// creating a Book class with properties

getDetails() {
return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}, Copies: ${this.copies}`
} // method that returns formattes string of book details

updateCopies(quantity) { 
    this.copies += quantity;
// method that updates the amount of available copies when a book is borrowed or returned
  }
}

//Test cases: 
console.log("Library Books:"); // adding a title to task 1 on console
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 123456, 5);
console.log(book1.getDetails()); // adding a new book and returning details

book1.updateCopies(-1); // updating the quantity 
console.log(book1.getDetails()); // logging the test case details

//Task 2: Creating a Borrower Class

class Borrower {
constructor(name, borrowerId) {
    this.name = name;
    this.borrowerId = borrowerId;
    this.borrowedBooks = []; // creating an array of borrowed books
} // creating a class of borrowers

borrowBook(book) {  //method to add book title to borrowedBooks
    this.borrowedBooks.push(book); // adds book to end of array

}
 returnBook(book){ // method to remove book from array
    const index = this.borrowedBooks.indexOf(book);
    if (index > -1) { 
        this.borrowedBooks.splice(index, 1); //removes book from array
    }
 }
}

//test cases:
console.log("Books Borrowed:"); // adding a title to task 2 on console
const borrower1 = new Borrower("Alice Johnson", 201); // creating an object to identify the borrower
borrower1.borrowBook("The Great Gatsby"); // outputs the book borrowed 
console.log(borrower1.borrowedBooks); // logs the book 

borrower1.returnBook("The Great Gatsby"); // returns the book
console.log(borrower1.borrowedBooks);

// Task 3: Creating a Library Class

class Library { 
    constructor() {
        this.books = [];
        this.borrowers = []; 
    }; // created a Library class with two arrays: books and borrowers

    addBook(book) { //method to add books to library
        this.books.push(book);

    };

    listBooks(){ //method to list books and details 
        this.books.forEach (book => {
            console.log(book.getDetails()); 
        });
    }

    //task 4:
    addBorrower(borrower){ //method to add borrowers to library
        this.borrowers.push(borrower);
    }

    lendBook(borrowerId, isbn){ //method to check for existing books and available copies
        const book = this.books.find(book => book.isbn === isbn); 
        const borrower = this.borrowers.find(borrower => borrower.borrowerId === borrowerId);

        
        if(book && borrower && book.copies > 0){
            book.updateCopies(-1); //removes 1 from copies
            borrower.borrowBook(book.title);
            console.log("Book Borrowed!");
        }
        else {
            console.log("Book Unavailable.");
        }
      }

      //task 5:
      returnBook(borrowerId, isbn) {
        const book = this.books.find(book => book.isbn === isbn);
        const borrower = this.borrowers.find(borrower => borrower.borrowerId === borrowerId);
    if (book && borrower) {
        book.updateCopies(1);
        borrower.returnBook(book.title);
        console.log("Book Returned.");
      } 
    }
 }

// Test Cases:
console.log("Library:") //adding title to task 3 on console
const library = new Library(); 
library.addBook(book1); //shows added book
library.addBorrower(borrower1); // add borrower
library.listBooks(); 

// Task 4: Implementing Book Borrowing
// method is inside task 3
// Test cases:
library.lendBook(201, 123456);
console.log(book1.getDetails());
console.log(borrower1.borrowedBooks); //outputs borrower, book, and updated quantity

// Task 5: Implementing Book Returns
// in task 3:
// test cases:
library.returnBook(201, 123456);
console.log(book1.getDetails());
console.log(borrower1.borrowedBooks); // output the returned book and updates book details
