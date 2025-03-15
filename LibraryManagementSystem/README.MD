# 📚 Library Management System

The **Library Management System** allows librarians to manage books, members, and borrowing activity efficiently. The system supports essential library operations such as adding, removing, updating books, managing members, and enforcing borrowing rules.

## 🚀 Features

- 📖 **Book Management**
  - Add, remove, and update books in the library.
  - Store details such as title, author, ISBN, publication year, and availability status.

- 👤 **Member Management**
  - Register, update, and remove members.
  - Maintain member details like ID, contact info, and borrowing history.

- 🔄 **Borrowing System**
  - Members can borrow and return books.
  - Enforce borrowing rules: limit on books borrowed and duration.

- ⚡ **Concurrency Handling**
  - Ensures multiple users can access catalog and member records simultaneously.

- 🔧 **Extensible Architecture**
  - Supports future enhancements and new features.

## 🏗️ System Design

### 🛠️ **Key Components**
- **LibraryManager** (Singleton Pattern)  
  - Core class handling members, books, borrowing, and search operations.

### 📌 **NVT Analysis**
- **Nouns (Entities)**:  
  - Books, Members, Borrow Records  
- **Verbs (Actions)**:  
  - Borrow, Return, Add Book, Update Book, Remove Book  

## 📂 Project Structure

