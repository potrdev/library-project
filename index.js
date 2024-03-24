let myLib = JSON.parse(localStorage.getItem("data"))

if (myLib == null) {
  myLib = []
}

console.log(myLib)

const title = document.querySelector(".title-inp")
const auth = document.querySelector(".auth-inp")
const pages = document.querySelector(".pages-inp")

function Book(name, author, pages, read) {
  this.name = name
  this.author = author
  this.pages = pages
  this.read = read
}

function addBookToLib () {
  let newBook = new Book(title.value, auth.value, pages.value, false)
  title.value = ""
  auth.value = ""
  pages.value = ""
  myLib.push(newBook)
  console.log(myLib)
  show()

  localStorage.setItem("data",  JSON.stringify(myLib))
}

function removeBook(book) {
  myLib.splice(book.id, 1)

  show()

  localStorage.setItem("data",  JSON.stringify(myLib))
}

function checkRead(book) {
  myLib[book.id].read = !myLib[book.id].read
  show()

  localStorage.setItem("data", JSON.stringify(myLib))
}

function show () {
  const container = document.querySelector(".container")
  
  let html = ""

  myLib.forEach(book => {
    html += `<div class="book"><p style="color: ${book.read ? "green" : "red"}">${book.name + ", " + book.author + ", " + book.pages} pages</p><button id="${myLib.indexOf(book)}" onclick="removeBook(this)">REMOVE</button><button id="${myLib.indexOf(book)}" onclick="checkRead(this)">READ</button></div>`
  })

  container.innerHTML = html
}