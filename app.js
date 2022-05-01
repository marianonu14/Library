const container = document.querySelector('#main-container');
const btnOpen = document.querySelector('#btn');
const btnClose = document.querySelector('#btn-close');
const btnAdd = document.querySelector('#btn-add');
const btnDelete = document.querySelector('#btn-delete');
const modal = document.querySelector('#modal');
const form = document.querySelector('#book-form');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const read = document.querySelector('#read');

btnOpen.addEventListener('click', () => {
  form.reset();
  modal.classList.add('modal--show');
  });

btnClose.addEventListener('click', (e) => {
  e.preventDefault();
  modal.classList.remove('modal--show');
  });

form.addEventListener('submit', (e) => {
  const book = new Book (title.value,author.value,pages.value,read.value);
  addBook(book);
  e.preventDefault();
  modal.classList.remove('modal--show');
  });

container.addEventListener('click', (e) => {
  deleteBook(e.target);
  });

function Book(title,author,pages) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
  };
  
function addBook(book) {
    const card = document.createElement('DIV');

    if(book.read.checked){
      book.read = "checked";
    } 

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
         <input type="checkbox" name="read" id="read" value="read" ${book.read}>
         </div>
         <div class="container-delete">
         <button class="btn btn-delete" name="btn-delete">Delete</button>
         </div>
      </div>
    </div> 
    `;
    
    container.appendChild(card);
  };

  function deleteBook(element) {
    if (element.name === "btn-delete"){
      element.parentElement.parentElement.parentElement.parentElement.remove();
    }
  };