import Book from "./Book";

class Member {
    constructor(memberId, name, contact) {
        this.memberId = memberId;
        this.name = name;
        this.contact = contact; // This would be an object
        this.borrowedBooks = new Array();
    }
    // Methods
    // Member borrows a book
    borrowBook(book) {
        if(book instanceof Book) {
            this.borrowedBooks.push(book);
        } else {
            throw new Error("Invalid book passed");
        }
    }
    // Member returns a book
    returnBook(book) {
        this.borrowedBooks = this.borrowedBooks.filter(b => b !== book);
    }
    // Getters
    getMemberId() {
        return this.memberId;
    }
    getName() {
        return this.name;
    }
    getBorrowedBooks() {
        return this.borrowedBooks;
    }
}

export default Member;