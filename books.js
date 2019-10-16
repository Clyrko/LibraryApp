/* Write a constructor for making “book” objects. We will revisit this in the project at the end of this lesson. Your book objects should have the book’s title, author, the number of pages, and whether or not you have read the book */

function Books(title, author, pages, bookRead) {

  this.title = title;
  this.author = author;
  this.pages = pages;
  this.bookRead = bookRead;
  this.info = function () {

    return `The ${this.title} by ${this.author}, ${this.pages} pages, ${this.bookRead}`;

  };
}
