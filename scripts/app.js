myLibrary = [];

function Book (title, author, pages, read = false) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
};

book1 = new Book ('The Hobbit', 'JRR Tolkien', 295);
book2 = new Book ('A Game of Thrones', 'George R. R. Martin', 694);
book3 = new Book ('Mukiwa: A White Boy in Africa', 'Peter Godwin', 432)

myLibrary.push(book1);
myLibrary.push(book2);
myLibrary.push(book3)

function bookToShelf (book) {
    const tBody = document.querySelector('#shelf-body');
    const tRow = document.createElement('tr');
    const bookNumber = document.createElement('td')
    const bookTitle = document.createElement('td')
    const bookAuthor = document.createElement('td')
    const bookPageNumber = document.createElement('td')
    const bookIsRead = document.createElement('td')
    const checkbox = document.createElement('input')
    const tdEdit = document.createElement('td')
    const edit = document.createElement('button')
    const tdDeleteBook = document.createElement('td')
    const deleteBook = document.createElement('button')

    const id = myLibrary.indexOf(book);

    tRow.setAttribute('id', `ID:${id}`);
    tBody.appendChild(tRow);

    bookNumber.innerText = id;
    tRow.appendChild(bookNumber);

    bookTitle.innerText = book.title;
    tRow.appendChild(bookTitle);

    bookAuthor.innerText = book.author;
    tRow.appendChild(bookAuthor);

    bookPageNumber.innerText = book.pages;
    tRow.appendChild(bookPageNumber);

    tRow.appendChild(bookIsRead);
    checkbox.setAttribute('type', 'checkbox');
    bookIsRead.appendChild(checkbox);

    tRow.appendChild(tdEdit);
    edit.innerText = 'Edit';
    tdEdit.appendChild(edit);

    tRow.appendChild(tdDeleteBook);
    deleteBook.innerText = 'X';
    tdDeleteBook.appendChild(deleteBook);

}

for (let i = 0; i < myLibrary.length; i++) {
    bookToShelf(myLibrary[i])
}