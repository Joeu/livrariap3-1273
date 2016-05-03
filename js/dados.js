var joeu;

angular.module('app', [])
    .controller('libraryController', function ($http) {
        var libraryController = this;
        joeu = this;
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
                price: libraryController.price
            };

            $http.post('/api/book', json).then(successCallback, errorCallback);
        }
        
        // /api/

        libraryController.modify = function(index){
            libraryController.editData[index] = true;
        }

        libraryController.update = function(index){
            libraryController.editData[index] = false;
        }

        libraryController.comment = function(book, x){
            book.comments.push(x);
        }

        libraryController.remove = function(bookIndex){
            function successCallback(response) {
                libraryController.bookList.splice(bookIndex, 1);
            };
            function errorCallback(response) {

            };

            $http.delete('/api/book/'+ libraryController.bookList[bookIndex].id).then(successCallback(), errorCallback());
        }

        libraryController.edit = function(x){
            alert(x.id);
        }

    });
