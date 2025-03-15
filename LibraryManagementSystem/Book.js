class Book {
    constructor(title, author, isbn, publicationyear) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.publicationyear = publicationyear;
        this.available = true; // True | False
    }

    getTitle() {
        return this.title;
    }

    getIsbn() {
        return this.isbn;
    }

    getAuthor() {
        return this.author;
    }

    getAvailability() {
        return this.available;
    }

    setAvailability(status) {
        this.available = status;
    }
}

export default Book;