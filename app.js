const btn = document.querySelector('#btn');
const btnClose = document.querySelector('#btnclose');
const container = document.querySelector('#container');
const modal = document.querySelector('#modal');

let myLibrary = [];

btn.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.add('modal--show');
  });

btnClose.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.remove('modal--show');
  });


function Book() {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = false
  }
  
function addBookToLibrary() {
    // do stuff here
  }