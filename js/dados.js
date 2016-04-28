var app = angular.module('app', []);

app.controller('libraryController', function ($scope) {
        $scope.bookList = [
                {id: 1, titulo: 'bla', autores: 'ble', descricao: 'bli', imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Open_book_01.svg/50px-Open_book_01.svg.png', comentarios: ['exemplo de comentario'], preco: 'bla'},
                {id: 2, titulo: 'ble', autores: 'ble', descricao: 'bli', imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Open_book_01.svg/50px-Open_book_01.svg.png', comentarios: [], preco: 'bla'},
                {id: 3, titulo: 'bli', autores: 'ble', descricao: 'bli', imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Open_book_01.svg/50px-Open_book_01.svg.png', comentarios: [], preco: 'bla'},
                {id: 4, titulo: 'blo', autores: 'ble', descricao: 'bli', imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Open_book_01.svg/50px-Open_book_01.svg.png', comentarios: [], preco: 'bla'},
                {id: 5, titulo: 'blu', autores: 'ble', descricao: 'bli', imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Open_book_01.svg/50px-Open_book_01.svg.png', comentarios: [], preco: 'bla'},
                {id: 6, titulo: 'cla', autores: 'ble', descricao: 'bli', imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Open_book_01.svg/50px-Open_book_01.svg.png', comentarios: [], preco: 'bla'},
                {id: 7, titulo: 'cle', autores: 'ble', descricao: 'bli', imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Open_book_01.svg/50px-Open_book_01.svg.png', comentarios: [], preco: 'bla'},
                {id: 8, titulo: 'cli', autores: 'ble', descricao: 'bli', imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Open_book_01.svg/50px-Open_book_01.svg.png', comentarios: [], preco: 'bla'},
                {id: 9, titulo: 'clo', autores: 'ble', descricao: 'bli', imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Open_book_01.svg/50px-Open_book_01.svg.png', comentarios: [], preco: 'bla'},
                {id: 10, titulo: 'clu', autores: 'ble', descricao: 'bli', imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Open_book_01.svg/50px-Open_book_01.svg.png', comentarios: [], preco: 'bla'},
        ];

        $scope.commentEnabled = false;
        $scope.editData = {};

        for (var i=0, lenght = $scope.bookList.lenght; i < lenght; i++){
        	$scope.editData[$scope.bookList[i].id] = false;
            //$scope.editData[$scope.bookList[i].id].comentario = false;
        }

        $scope.add = function(){
                $scope.bookList.push({
                		//id:$scope.bookList.lenght;
                        titulo:$scope.titulo,
                        autores:$scope.autores,
                        descricao:$scope.descricao,
                        imagem:$scope.imagem,
                        comentarios:[],
                        preco:$scope.preco
                });
                //Limpar Campos
                $scope.titulo = '';
                $scope.autores = '';
                $scope.descricao = '';
                $scope.imagem = '';
                $scope.preco = '';
            //cleanFields($scope.titulo, $scope.autores, $scope.descricao, $scope.imagem, $scope.comentario, $scope.preco);
        }

        $scope.modify = function(bookList){
        	$scope.editData[bookList.id] = true;
        }

        $scope.update = function(bookList){
        	$scope.editData[bookList.id] = false;
        }

        $scope.comment = function(book, x){
            book.comentarios.push(x);
        }

        $scope.remove = function(bookIndex){
            $scope.bookList.splice(bookIndex, 1);
        }

        $scope.edit = function(x){
            alert(x.id);
        }


        function cleanFields(){
                for (var i=0; i < arguments.lenght; i++){
                        alert(arguments[i]);
                }
        }

});