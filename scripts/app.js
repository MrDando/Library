function Book (title, author, pages, read = false) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
};

function createTable () {
    const container = document.querySelector('main')
    const table = document.createElement('table')
    const tableHead = document.createElement('thead')
    const tableBody = document.createElement('tbody')
    const headerRow = document.createElement('tr')
    const headingNumber = document.createElement('td')
    const headingTitle = document.createElement('td')
    const headingAuthor = document.createElement('td')
    const headingPageNumber = document.createElement('td')
    const headingisRead = document.createElement('td')
    const headingEdit = document.createElement('td')
    const headingRemove = document.createElement('td')

    container.appendChild(table);
    table.appendChild(tableHead);
    tableBody.setAttribute('id', 'table-body');
    table.appendChild(tableBody);

    headerRow.setAttribute('id', 'header-row');
    tableHead.appendChild(headerRow);

    let cells = [headingNumber, headingTitle, headingAuthor, headingPageNumber, headingisRead, headingEdit, headingRemove];
    let text = ['#', 'title', 'author', 'pages', 'read', 'edit', 'remove'];
    
    for (let i = 0; i < cells.length; i++) {
        cells[i].innerText = text[i]
        headerRow.appendChild(cells[i])
    }

}

function updateTable (book) {
    const tBody = document.querySelector('#table-body');
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
//Temporary functions that adds specified number of dummy books to myLibrary
function dummyLibrary (num) {
    for (let i = 0; i < num; i++) {
        let pages = Math.floor(Math.random() * 1000);

        let book = new Book (`title ${i+1}`, `author ${i+1}`, pages);

        myLibrary.push(book)
    }
}

function updateLibrary (myLibrary) {
    for (let i = 0; i < myLibrary.length; i++) {
        updateTable(myLibrary[i])
    }
}

function emptyLibrary () {
    const main = document.querySelector('main')
    const container = document.querySelector('main')
    const defaultMsg = document.createElement('div')
    const row1 = document.createElement('div')
    const row2 = document.createElement('div')

    main.setAttribute('style', 'justify-content: center')

    defaultMsg.setAttribute('id', 'default-msg');
    row1.innerText = 'Your library is empty.'
    row2.innerText = 'Enter your first book to start'

    container.appendChild(defaultMsg);
    defaultMsg.appendChild(row1)
    defaultMsg.appendChild(row2)
}

function checkLibrary () {
    if (myLibrary.length === 0) {
        emptyLibrary();
    } else {
        createTable()
        updateLibrary(myLibrary)
    }
}

function popupForm () {
    let popup = document.getElementById("form");
    popup.classList.toggle("show");
}

let myLibrary = [];
dummyLibrary(15);
checkLibrary();

const addBtn = document.getElementById('add-button')
addBtn.addEventListener('click', popupForm)