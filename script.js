const myLibrary = []
const dialog = document.querySelector("dialog")
const showButton = document.getElementById("showDialog")
const closeButton = document.getElementById("closeDialog")
const form = document.getElementById('bookForm');

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
    const Status = document.getElementById('Status').value

    addBookToLibrary(title, Author, Pages, Status)

    form.reset()
    dialog.close()
})

function addBookToLibrary(title, author, pages, status) {
    const id = crypto.randomUUID()
    const book = new Book(title, author, pages, status, id)
    myLibrary.push(book)
    console.log(myLibrary)
}

function showBooks() {
    let i = 0;
    while (i < myLibrary.length) {
        console.table(myLibrary[i])
        i++;
    }
}

closeButton.addEventListener("click", () => {
    form.reset();
    dialog.close();
});

showButton.addEventListener('click', () => {
    dialog.showModal();
});