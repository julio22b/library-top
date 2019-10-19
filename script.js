let book1 = {
    title: 'A Game of Thrones',
    author: 'George R.R. Martin',
    numberOfPages: 782,
    hasBeenRead: 'read'
}

let book2 = {
    title: 'One Hundred Years of Solitude',
    author: 'Gabriel García Márquez',
    numberOfPages: 448,
    hasBeenRead: 'not read'
}


let myLibrary = [book2,book1]

function Book(title, author, numberOfPages, hasBeenRead){
    this.title = title
    this.author = author
    this.numberOfPages = numberOfPages
    this.hasBeenRead = hasBeenRead
}

Book.prototype.info = function(){
    return `${title} by ${author}, ${numberOfPages} pages, ${hasBeenRead}`
}

const inputs = document.getElementsByClassName('input')

const submit = document.querySelector('.submit')
submit.addEventListener('click', () => {
        addBookToLibrary()
        clearInputs()
    })

function addBookToLibrary(){
    let title = inputs[0].value
    let author = inputs[1].value
    let numberOfPages = inputs[2].value
    let hasBeenRead = inputs[3].value
    if(!title){
        return
    }
    let newBook = new Book(title, author, numberOfPages, hasBeenRead)
    myLibrary.push(newBook)
    render()
    console.log(myLibrary)
}




function render (){
    const display = document.querySelector('.display');

    for(let i = 0; i < myLibrary.length; i++){
        const title = document.createElement('p');
        title.classList.add('book');
        title.textContent = `${myLibrary[i].title}`;
        display.appendChild(title);

        const author = document.createElement('p');
        author.classList.add('book');
        author.textContent = `${myLibrary[i].author}`;
        display.appendChild(author);

        const numberOfPages = document.createElement('p');
        numberOfPages.classList.add('book');
        numberOfPages.textContent = `${myLibrary[i].numberOfPages}`;
        display.appendChild(numberOfPages);

        const hasBeenRead = document.createElement('p');
        hasBeenRead.classList.add('book');
        hasBeenRead.textContent = `${myLibrary[i].hasBeenRead}`;
        display.appendChild(hasBeenRead);
    }
}

render()

const newBookButton = document.querySelector('#new-book')
const formContainer = document.querySelector('.form-popup')

function openForm(){
    formContainer.style.display = 'block'
}

function closeForm(){
    formContainer.style.display = 'none'
}

console.log(myLibrary)

function clearInputs(){
    for(let i = 0; i < inputs.length; i++){
        inputs[i].value = ''
    
    }
}