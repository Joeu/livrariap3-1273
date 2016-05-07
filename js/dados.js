angular.module('app', [])
    .controller('libraryController', function ($http) {
        var libraryController = this;
        libraryController.bookList = [
                ];

        libraryController.commentEnabled = false;
        libraryController.editData = {};

        for (var i=0, lenght = libraryController.bookList.lenght; i < lenght; i++){
            libraryController.editData[i] = false;
        }

        //---$http
        // /api/book
        libraryController.get_books = function () {
            function successCallback(response) {
                libraryController.bookList = response.data;
            };

            function errorCallback() {
                console.log("Error");
            };

            $http.get('/api/book').then(successCallback, errorCallback);
        }

        libraryController.get_books();

        libraryController.add = function(){
            function successCallback(response) {
                console.log("adding book");
                libraryController.bookList.push(response.data);

                cleanFields();
                console.log("Fields cleaned");

            };
            function errorCallback(cause) {
                console.log("ERROR adding book");
                console.log(cause);

            };
            var json = {
                id: '',
                title: libraryController.title,
                author: libraryController.author,
                description: libraryController.description,
                cover: libraryController.cover,
                price: libraryController.price,
                comments: []
            };

            $http.post('/api/book', json).then(successCallback, errorCallback);
        }

        var cleanFields = function () {
            libraryController.title = null;
            libraryController.author = null;
            libraryController.description = null;
            libraryController.cover = null;
            libraryController.price = null;
        }

        libraryController.modify = function(index){
            libraryController.editData[index] = true;
        }

        libraryController.update = function(bookIndex){
            function successCallback(response) {
                console.log("updating book");
                libraryController.editData[bookIndex] = false;
            };
            function errorCallback(cause) {
                console.log("Error updating book: "+cause);
            };

            var json = {
                id: libraryController.bookList[bookIndex].id,
                title: libraryController.bookList[bookIndex].title,
                author: libraryController.bookList[bookIndex].author,
                description: libraryController.bookList[bookIndex].description,
                cover: libraryController.bookList[bookIndex].cover,
                price: libraryController.bookList[bookIndex].price
            };

            $http.put('/api/book/'+ libraryController.bookList[bookIndex].id, json).then(successCallback, errorCallback);
        }

        libraryController.remove = function(bookIndex){
            function successCallback(response) {
                console.log("Success removing");
                libraryController.bookList.splice(bookIndex, 1);
            };
            function errorCallback(reason) {
                console.log("Error removing: "+reason);
            };

            $http.delete('/api/book/'+ libraryController.bookList[bookIndex].id).then(successCallback, errorCallback);
        }

        libraryController.comment = function(bookIndex, comment){
            libraryController.bookList[bookIndex].comments.push(comment);
            function successCallback() {

            };
            function errorCallback() {

            };

            $http.put('/api/book/'+libraryController.bookList[bookIndex].id+'/comment', json).then(successCallback, errorCallback);
        }

    });
