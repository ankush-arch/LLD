import Book from "./Book";
import Member from "./Member";

class LibraryManager {
    static instance;
    constructor() {
        if(LibraryManager.instance) {
            return LibraryManager.instance;
        }
        this.catalog = new Map();
        this.members = new Map();
        this.MAX_BOOKS_PER_MEMBER = 5;
        this.LOAN_DURATION_DAYS = 14;

        LibraryManager.instance = this;
    }

    // Methods

    addBook(book) {
        this.catalog.set(book.getIsbn(), book);
    }

    removeBook(isbn) {
        this.catalog.delete(isbn);
    }

    getBook(isbn) {
        return this.catalog.get(isbn);
    }

    registerMember(member) {
        this.members.set(member.getMemberId(), member);
    }

    deregisterMember(memberId) {
        this.members.delete(memberId);
    }

    getMember(memberId) {
        return this.members.get(memberId);
    }

    borrowBook(memberId, isbn) {
        const member = this.getMember(memberId);
        const book = this.getBook(isbn);

        if(member && book && book.getAvailability()) {
            if(member.getBorrowedBooks().length < this.MAX_BOOKS_PER_MEMBER) {
                member.borrowBook(book);
                book.setAvailability(false);
                console.log(`Book borrowed ${book.getTitle()} by ${member.getName()}`);
            } else {
                console.log(`${member.getName()} has reached max number of books`);
            }
        } else {
            console.log("Book or member not found, or book is not available.");
        }
    }

    returnBook(memberId, isbn) {
        const member = this.getMember(memberId);
        const book = this.getBook(isbn);
        if(member && book) {
            member.returnBook(book);
            book.setAvailability(true);
            console.log(`Book returned ${book.getTitle()} by ${member.getName()}`);
        } else {
            console.log('Invalid book or member');
        }
    }

    searchBook(keyword) {
        let matchingBooks = [];
        for(let book of this.catalog.values()) {
            if(book.getTitle().includes(keyword) || book.getAuthor().includes(keyword)) {
                matchingBooks.push(book);
            }
        }
        return matchingBooks;
    }


}

export default LibraryManager;