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
                libraryController.bookList.push(response.data);
            };
            
            function errorCallback(response) {
                console.log(json);
                console.log(response);
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
        
        libraryController.modify = function(index){
            libraryController.editData[index] = true;
        }

        libraryController.update = function(bookIndex){
            function successCallback(response) {
                libraryController.editData[bookIndex] = false;
            };
            function errorCallback(response) {
                console.log("Error");
            };

            var json = {
                id: libraryController.bookList[bookIndex].id,
                title: libraryController.bookList[bookIndex].title,
                author: libraryController.bookList[bookIndex].author,
                description: libraryController.bookList[bookIndex].description,
                cover: libraryController.bookList[bookIndex].cover,
                price: libraryController.bookList[bookIndex].price
            };

            $http.put('/api/book/'+ libraryController.bookList[bookIndex].id, json).then(successCallback(), errorCallback());
        }

        libraryController.remove = function(bookIndex){
            function successCallback(response) {
                libraryController.bookList.splice(bookIndex, 1);
            };
            function errorCallback(response) {

            };

            $http.delete('/api/book/'+ libraryController.bookList[bookIndex].id).then(successCallback(), errorCallback());
        }

        libraryController.comment = function(bookIndex, comment){
            libraryController.bookList[bookIndex].comments.push(comment);
            function successCallback() {

            };
            function errorCallback() {

            };

            $http.put('/api/book/'+libraryController.bookList[bookIndex].id+'/comment', json).then(successCallback(), errorCallback());
        }

        libraryController.edit = function(x){
            alert(x.id);
        }

    });
