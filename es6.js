
class Book{
    constructor(name,author,type)
    {
        this.name = name;
        this.author = author;
        this.type = type;
    }
}
class Display{
    add(book){    
    let libraryForm = document.getElementById('libraryForm');
    let tablebody = document.getElementById("tbody");
    
    let uistring = `
                 
                <tr>   
                   <th scope="row">#</th>
                    <td>${book.name}</td>
                    <td>${book.author}</td>
                    <td>${book.type.toUpperCase()}</td>
                    <td><button type="button" class="btn btn-primary" data-toggle="Delete" aria-pressed="false">Delete
                  </button>
                  </td>
                </tr>
                `;
    tablebody.innerHTML += uistring;
    }
    clear(){
        let libraryForm = document.getElementById('libraryForm');
        libraryForm.reset();
    }
    validate(book) {
        if (book.name.length < 2 || book.author.length < 2) {
            return false;
        }
        else {
            return true;
        }
    }
    show(type, displaymessage) {
        let message = document.getElementById('message');
        message.innerHTML = `
        <div class="alert alert-${type} alert-dismissible fade show" role="alert">
      <strong>Message: </strong> ${displaymessage}
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
        `;
        setTimeout(function () {
            message.innerHTML = '';
    
        }, 2000);
    };
}
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener("submit", libraryFormSubmit);
function libraryFormSubmit(e) {
    //console.log("you book has been submited");
    let name = document.getElementById("BookName").value;
    let author = document.getElementById("AuthorName").value;
    let fiction = document.getElementById("Fiction");
    let programming = document.getElementById("Programming");
    let cooking = document.getElementById("Cooking");
    let type;
    if (fiction.checked) {
        type = fiction.value;
    }
    else if (programming.checked) {
        type = programming.value;
    }
    else if (cooking.checked) {
        type = cooking.value;
    }
    let display;
    let book = new Book(name, author, type);
    // console.log(book);
    display = new Display();
    if (display.validate(book)) {
        display.add(book);
        display.clear();
        display.show('success', 'your book has been added successfully');
    }
    else {
        display.show('danger', 'You can not add this book');

    }
    e.preventDefault();
}