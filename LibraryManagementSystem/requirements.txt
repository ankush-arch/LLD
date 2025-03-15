# Library Management System

## Requirements
- Allows librarians to manage books, members, and borrowing activity.
- Supports adding, removing, and updating books.
- Each book has: title, author, ISBN, publication year, availability status.
- Members can borrow and return books.
- Each member has: member ID, contact info, borrowing history.
- Enforces borrowing rules: max number of books per member, borrowing duration.
- Handles concurrent access to the library catalog and member records.
- Designed to be extensible for future enhancements.

## NVT Technique

### Nouns (Entities)
- Books
- Members

### Verbs (Actions)
- Borrow
- Return
- Add Book
- Update Book
- Remove Book

## Core Class: `LibraryManager` (Singleton)
- Manages books and members.
- Handles adding/removing members.
- CRUD operations on books.
- Borrowing and returning books.
- Searching books.