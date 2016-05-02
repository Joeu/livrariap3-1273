var app = angular.module('app', []);

app.controller('libraryController', function () {
    var libraryController = this;

    this.bookList = [{title: 'bla', author: 'ble', description: 'bli', cover: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Open_book_01.svg/50px-Open_book_01.svg.png', comments: ['exemplo de comentario'], price: 'bla', edit: false}
            ];

    this.commentEnabled = false;
    this.editData = {};

    for (var i=0, lenght = this.bookList.lenght; i < lenght; i++){
        this.editData[this.bookList[i].edit] = false;
        //this.editData[this.bookList[i].id].comentario = false;
    }

    this.add = function(){
            this.bookList.push({
                    //id:this.bookList.lenght;
                    title:this.title,
                    author:this.author,
                    description:this.description,
                    cover:this.cover,
                    comments:[],
                    price:this.price
            });
            //Limpar Campos
            this.title = '';
            this.author = '';
            this.description = '';
            this.cover = '';
            this.price = '';
        //cleanFields(this.title, this.author, this.description, this.cover, this.comentario, this.price);
    }

    /*
    this.modify = function(bookIndex){
        book = this.bookList[bookIndex];
        this.editData[book.edit] = true;
    }
    */

    this.modify = function(bookList, index){
        this.editData[this.bookList[index].edit] = true;
    }

    this.update = function(bookList){
        this.editData[bookList.id] = false;
    }

    this.comment = function(book, x){
        book.comments.push(x);
    }

    this.remove = function(bookIndex){
        //alert(this.bookList[bookIndex]);
        this.bookList.splice(bookIndex, 1);
    }

    this.edit = function(x){
        alert(x.id);
    }


    function getBookByIndex(bookIndex) {
        alert(this.bookList[bookIndex]);
        //return this.bookList[bookIndex];
    }

    function cleanFields(){
            for (var i=0; i < arguments.lenght; i++){
                    alert(arguments[i]);
            }
    }

});