var app = angular.module('obrago', ['ngDialog', 'angularFileUpload']);

app.controller('ConvenioCidadeController', ['$scope', 'ngDialog', '$http', 'FileUploader', function($scope, ngDialog, $http, FileUploader){

    $scope.dadosMunicipio = [];
    $scope.dadosFederais = [];
    $scope.uploader = new FileUploader();

    (function main() {
        // $http.get('dados_producao/federal-cg-tratado.json').then(function(dados){
        //     $scope.dadosFederais = dados.data;
        // }, function(err){
        //     console.log(err);
        // });
    })();

    $scope.temTabela = false;

    $scope.temDetalhe = false;

    $scope.convenios = [];

    $scope.convenioSelecionado = {}

    $scope.envia = function(busca){
        $scope.temTabela = true;
        $scope.convenios = {};
    };

    $scope.especifica = function(id){
        $scope.temTabela = false;
        $scope.temDetalhe = true;
    };

    $scope.voltaLista = function(){
        $scope.temTabela = true;
        $scope.temDetalhe = false;
    };

    $scope.feedback = function(){
        console.log('clicou');
        ngDialog.open({
           template: 'modal-feedback.html', 
            className: 'ngdialog-theme-default',
            controller: 'ConvenioCidadeController'
        });
    };
    $scope.msgSucesso = false;

    $scope.enviaFeedback = function(dados){
       $http.post('http://localhost:3000/convenios/'+convenioSelecionado.id+'/feedback', dados).then(function(data){
           $scope.msgSucesso = true;
       }, function(err){
           console.log(err);
       });
    };

}]);