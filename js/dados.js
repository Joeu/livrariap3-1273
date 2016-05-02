var app = angular.module('app', []);

app.controller('libraryController', function () {
    var libraryController = this;

    this.bookList = [
            ];

    this.commentEnabled = false;
    this.editData = {};

    for (var i=0, lenght = this.bookList.lenght; i < lenght; i++){
        this.editData[i] = false;
    }

    this.add = function(){
        this.bookList.push({
            //id:this.bookList.lenght;
            title:this.title,
            author:this.author,
            description:this.description,
            cover:this.cover,
            comments:[],
            price:this.price,
        });
        //Limpar Campos
        this.title = '';
        this.author = '';
        this.description = '';
        this.cover = '';
        this.price = '';
        //cleanFields(this.title, this.author, this.description, this.cover, this.comentario, this.price);
    }

    this.modify = function(index){
        this.editData[index] = true;
    }

    this.update = function(index){
        this.editData[index] = false;
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
        return this.bookList[bookIndex];
    }

    function cleanFields(){
            for (var i=0; i < arguments.lenght; i++){
                    alert(arguments[i]);
            }
    }

});