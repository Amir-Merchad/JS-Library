const myLibrary = []
const dialog = document.querySelector("dialog")
const showButton = document.getElementById("showDialog")
const closeButton = document.getElementById("closeDialog")
const form = document.getElementById('bookForm');
const books = document.getElementsByClassName("books")

closeButton.addEventListener("click", () => {
    form.reset();
    dialog.close();
});

showButton.addEventListener('click', () => {
    dialog.showModal();
});

function Book(title, author, pages, status, id) {
    if (!new.target) {
        throw Error("Error!")
    }
    this.title = title
    this.author = author
    this.pages = pages
    this.status = status
    this.id = id
}

form.addEventListener('submit', function (e) {
    e.preventDefault()

    if (!form.checkValidity()) {
        console.log('Empty input!');
        return;
    }

    const title = document.getElementById('Title').value
    const Author = document.getElementById('Author').value
    const Pages = document.getElementById('Pages').value
    const Status = document.getElementById('Status').checked ? "read" : "notRead"

    addBookToLibrary(title, Author, Pages, Status)

    form.reset()
    dialog.close()
})

function addBookToLibrary(title, author, pages, status) {
    const id = crypto.randomUUID()
    const book = new Book(title, author, pages, status, id)
    myLibrary.push(book)
    showBook(book)
}

function changeStatus(id, btn) {
    const book = myLibrary.find(b => b.id === id);
    if (!book) return;

    book.status = (book.status === 'read') ? 'notRead' : 'read';

    btn.textContent = book.status === 'read' ? 'Read' : 'Not Read';
    btn.style.background = book.status === 'read' ? "#9efd9b" : "#fd9b9b";
}

function removeBook(id, bookCard) {
    const index = myLibrary.findIndex(b => b.id === id);
    if (index === -1) return;

    myLibrary.splice(index, 1);

    bookCard.remove();
}

function showBook(book) {
    const container = document.getElementById("books");
    const bookCard = document.createElement('div');
    bookCard.classList.add('book');
    bookCard.setAttribute('data-id', book.id);

    const statusText = book.status === 'read' ? 'Read' : 'Not Read';

    bookCard.innerHTML = `
        <div class="title">${book.title}</div>
        <div class="Author">${book.author}</div>
        <div class="pages">${book.pages} pages</div>
        <div class="buttonContainer">
            <button class="changeStatus">${statusText}</button>
            <button class="removeBook">Remove</button>
        </div>
    `;

    container.appendChild(bookCard);

    const readBtn = bookCard.querySelector(".changeStatus");
    readBtn.style.background = book.status === 'read' ? "#9efd9b" : "#fd9b9b";

    readBtn.addEventListener('click', () => changeStatus(book.id, readBtn));
    bookCard.querySelector('.removeBook').addEventListener('click', () => removeBook(book.id, bookCard));
}