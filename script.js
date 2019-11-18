class Book {
    constructor(title, author, numberOfPages, hasBeenRead){
        this.title = title;
        this.author = author;
        this.numberOfPages = numberOfPages;
        this.hasBeenRead = hasBeenRead;
    }

    changeReadStatus(){
        this.hasBeenRead === 'Read' ? this.hasBeenRead = 'Not read' : this.hasBeenRead = 'Read'
    }
}

const book1 = new Book('A Game of Thrones', 'George R.R Martin', 782, 'Read')
const book2 = new Book('One Hundred Years of Solitude', 'Gabriel García Márquez', 448, 'Not read')

let addBook = [book2,book1]
let myLibrary = [book2,book1]

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
        return alert('At least a title must be added.')
    } else if(typeof numberOfPages === 'string'){
        return alert('Specify a number of pages')
    }
    let newBook = new Book(title, author, numberOfPages, hasBeenRead)
    
    addBook.push(newBook)
    myLibrary.push(newBook)
    render(newBook)
    addBook = []
}




function render (){
    const display = document.querySelector('.display');

    for(let i = 0; i < addBook.length; i++){
        const title = document.createElement('p');
        title.classList.add('book','title');
        title.textContent = `${addBook[i].title}`;
        display.appendChild(title);

        const author = document.createElement('p');
        author.classList.add('book');
        author.textContent = `${addBook[i].author}`;
        display.appendChild(author);

        const numberOfPages = document.createElement('p');
        numberOfPages.classList.add('book');
        numberOfPages.textContent = `${addBook[i].numberOfPages}`;
        display.appendChild(numberOfPages);

        const hasBeenRead = document.createElement('p');
        hasBeenRead.classList.add('book');
        display.appendChild(hasBeenRead);
        const readBtn = document.createElement('button')
        readBtn.classList.add('readStatus')
        readBtn.textContent = `${addBook[i].hasBeenRead}`;
        hasBeenRead.appendChild(readBtn)

        readBtn.addEventListener('click', function(e){
            if(e.target.textContent === 'Read'){
                e.target.classList.add('removered')
                return e.target.textContent = 'Not read'
            } else {
                return e.target.textContent = 'Read'
            }
        })

        const removeBtnContainer = document.createElement('div');
        removeBtnContainer.classList.add('book');
        display.appendChild(removeBtnContainer)
        
        const removeBtn = document.createElement('button')
        removeBtn.classList.add('remove-btn')
        removeBtn.textContent = 'X'
        removeBtnContainer.appendChild(removeBtn)

        removeBtn.addEventListener('click', function(){
            for(let i = 0; i < myLibrary.length; i++){
                if(myLibrary[i].title.includes(`${title.textContent}`)){
                    myLibrary.splice(i,1)
                }
            }
            
            display.removeChild(title)
            display.removeChild(author)
            display.removeChild(numberOfPages)
            display.removeChild(hasBeenRead)
            display.removeChild(removeBtnContainer)
            
        })

    }
}

render()
addBook = []

const newBookButton = document.querySelector('#new-book')
const formContainer = document.querySelector('.form-popup')

function openForm(){
    formContainer.style.display = 'block'
}

function closeForm(){
    formContainer.style.display = 'none'
}

function clearInputs(){
    for(let i = 0; i < inputs.length; i++){
        inputs[i].value = ''
    
    }
}