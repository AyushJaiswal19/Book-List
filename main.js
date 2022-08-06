class Book {
    constructor(t, a, is) {
        this.title = t
        this.author = a
        this.isbn = is
    }
}

 class UI {

    static dispalyBooks(){
        const storeBooks=[
            {
                title:"ABC",
                author:"XYZ",
                isbn:"123",
            },
        ]
        storeBooks.forEach((book)=>{
            UI.addBookToList(book)
        })
    }


    static addBookToList(book) {
        const list = document.querySelector("#book-list")
        const row = document.createElement("tr")
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href='#' class='btn btn-danger btn-sm delete'>X</a></td>
            `
        list.appendChild(row)
    }

    //clear Fields
    static clearAllFields(){
        document.querySelector("#title").value =''
        document.querySelector("#author").value=''
        document.querySelector("#isbn").value =''
    }

    static showAlert(msg,className){
        const div = document.createElement('div')
        div.className = `alert alert-${className}`
        div.appendChild(document.createTextNode(msg))
        const form = document.querySelector("#book-form")
        const container = document.querySelector(".container")
        container.insertBefore(div,form)
        setTimeout(function(){
            document.querySelector(".alert").remove()
        },3000)
    }

}

class Store {


}

let book = new Book()

//Event Listener
document.querySelector("#book-form").addEventListener("submit", (e) => {
    e.preventDefault()
    const title = document.querySelector("#title").value
    const author = document.querySelector("#author").value
    const isbn = document.querySelector("#isbn").value
    console.log(title, author, isbn)

    if (title == '' || author == '' || isbn == '') {
        UI.showAlert("Please Enter all Fields","danger")
    }
    else {
        const book = new Book(title, author, isbn)
        UI.addBookToList(book)
        UI.clearAllFields()
        UI.showAlert("Book Added Successfully","success")
    }
})

document.querySelector("#book-list").addEventListener("click",function(e){
    if(e.target.classList.contains("delete")){
        console.log(e.target.parentElement.parentElement.remove())
    }

})

document.addEventListener("DOMContentLoaded",UI.dispalyBooks)
