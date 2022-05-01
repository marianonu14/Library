const container = document.querySelector('#main-container');
const btnOpen = document.querySelector('#btn');
const btnClose = document.querySelector('#btn-close');
const btnAdd = document.querySelector('#btn-add');
const modal = document.querySelector('#modal');
const form = document.querySelector('#book-form');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const read = document.querySelector('#read');
let myLibrary = [];

btnOpen.addEventListener('click', () => {
  title.value = "";
  author.value = "";
  pages.value = "";
  modal.classList.add('modal--show');
  });

btnClose.addEventListener('click', (e) => {
  e.preventDefault();
  modal.classList.remove('modal--show');
  });

form.addEventListener('submit', (e) => {
  const book = new Book (title.value,author.value,pages.value,read.value);
  addBookToLibrary(book);
  e.preventDefault();
  modal.classList.remove('modal--show');
  });


function Book(title,author,pages) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = false
  }
  
function addBookToLibrary(book) {
    const card = document.createElement('DIV');
    card.innerHTML = `
    <div class="card">
      <div class="card-body">
         <div class="card-element">
            <h3>Title:</h3> ${book.title}
         </div>
         <div class="card-element">
            <h3>Author:</h3> ${book.author}
         </div>
         <div class="card-element">
            <h3>Pages:</h3> ${book.pages}
         </div>
         <div class="card-box">
         <label for="read">Read</label> 
         <input type="checkbox" name="read" id="read" value="read">
         </div>
         <div class="container-delete">
         <button class="btn btn-delete" id="btn-delete">Delete</button>
         </div>
      </div>
    </div> 
    `;
    container.appendChild(card);
  }