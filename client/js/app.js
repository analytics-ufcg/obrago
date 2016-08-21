var app = angular.module('obrago', ['ngDialog', 'angularFileUpload']);

app.controller('ConvenioCidadeController', ['$scope', 'ngDialog', '$http', 'FileUploader', function($scope, ngDialog, $http, FileUploader){

    $scope.dadosMunicipio = [];
    $scope.dadosFederais = [];
    $scope.uploader = new FileUploader();

    (function main() {
        $http.get('dados_producao/federal-cg-tratado.json').then(function(dados){
            $scope.dadosFederais = dados.data;
        }, function(err){
            console.err(err);
        });
    })();

    $scope.temTabela = false;

    $scope.convenios = [];

    var coisas = 
[{"regCge":"16-80811-8","numero":"0331/2016","orgao":"SEE - 22.0001 - SECRETARIA DE ESTADO DA EDUCAÇÃO","convenente":"FUNDAÇÃO DE APOIO A PESQUISA DO ESTADO DA PARAÍBA","dataCelebracao":"1/8/2016","dataPublicacao":"4/8/2016","objetivo":"DESENVOLVER KITS DE ENSINO E APLICAÇÃO A SEREM UTILIZADOS EM ESCOLAS DE ENSINO MÉDIO DO ESTADO DA PARAÍBA","valorTotal":"18.000"},{"regCge":"16-80811-8","numero":"0331/2016","orgao":"SEE - 22.0001 - SECRETARIA DE ESTADO DA EDUCAÇÃO","convenente":"FUNDAÇÃO DE APOIO A PESQUISA DO ESTADO DA PARAÍBA","dataCelebracao":"1/8/2016","dataPublicacao":"4/8/2016","objetivo":"DESENVOLVER KITS DE ENSINO E APLICAÇÃO A SEREM UTILIZADOS EM ESCOLAS DE ENSINO MÉDIO DO ESTADO DA PARAÍBA","valorTotal":"18.000"},{"regCge":"16-80811-8","numero":"0331/2016","orgao":"SEE - 22.0001 - SECRETARIA DE ESTADO DA EDUCAÇÃO","convenente":"FUNDAÇÃO DE APOIO A PESQUISA DO ESTADO DA PARAÍBA","dataCelebracao":"1/8/2016","dataPublicacao":"4/8/2016","objetivo":"DESENVOLVER KITS DE ENSINO E APLICAÇÃO A SEREM UTILIZADOS EM ESCOLAS DE ENSINO MÉDIO DO ESTADO DA PARAÍBA","valorTotal":"18.000"},{"regCge":"16-80811-8","numero":"0331/2016","orgao":"SEE - 22.0001 - SECRETARIA DE ESTADO DA EDUCAÇÃO","convenente":"FUNDAÇÃO DE APOIO A PESQUISA DO ESTADO DA PARAÍBA","dataCelebracao":"1/8/2016","dataPublicacao":"4/8/2016","objetivo":"DESENVOLVER KITS DE ENSINO E APLICAÇÃO A SEREM UTILIZADOS EM ESCOLAS DE ENSINO MÉDIO DO ESTADO DA PARAÍBA","valorTotal":"18.000"},{"regCge":"16-80811-8","numero":"0331/2016","orgao":"SEE - 22.0001 - SECRETARIA DE ESTADO DA EDUCAÇÃO","convenente":"FUNDAÇÃO DE APOIO A PESQUISA DO ESTADO DA PARAÍBA","dataCelebracao":"1/8/2016","dataPublicacao":"4/8/2016","objetivo":"DESENVOLVER KITS DE ENSINO E APLICAÇÃO A SEREM UTILIZADOS EM ESCOLAS DE ENSINO MÉDIO DO ESTADO DA PARAÍBA","valorTotal":"18.000"},{"regCge":"16-80811-8","numero":"0331/2016","orgao":"SEE - 22.0001 - SECRETARIA DE ESTADO DA EDUCAÇÃO","convenente":"FUNDAÇÃO DE APOIO A PESQUISA DO ESTADO DA PARAÍBA","dataCelebracao":"1/8/2016","dataPublicacao":"4/8/2016","objetivo":"DESENVOLVER KITS DE ENSINO E APLICAÇÃO A SEREM UTILIZADOS EM ESCOLAS DE ENSINO MÉDIO DO ESTADO DA PARAÍBA","valorTotal":"18.000"},{"regCge":"16-80811-8","numero":"0331/2016","orgao":"SEE - 22.0001 - SECRETARIA DE ESTADO DA EDUCAÇÃO","convenente":"FUNDAÇÃO DE APOIO A PESQUISA DO ESTADO DA PARAÍBA","dataCelebracao":"1/8/2016","dataPublicacao":"4/8/2016","objetivo":"DESENVOLVER KITS DE ENSINO E APLICAÇÃO A SEREM UTILIZADOS EM ESCOLAS DE ENSINO MÉDIO DO ESTADO DA PARAÍBA","valorTotal":"18.000"},{"regCge":"16-80811-8","numero":"0331/2016","orgao":"SEE - 22.0001 - SECRETARIA DE ESTADO DA EDUCAÇÃO","convenente":"FUNDAÇÃO DE APOIO A PESQUISA DO ESTADO DA PARAÍBA","dataCelebracao":"1/8/2016","dataPublicacao":"4/8/2016","objetivo":"DESENVOLVER KITS DE ENSINO E APLICAÇÃO A SEREM UTILIZADOS EM ESCOLAS DE ENSINO MÉDIO DO ESTADO DA PARAÍBA","valorTotal":"18.000"},{"regCge":"16-80811-8","numero":"0331/2016","orgao":"SEE - 22.0001 - SECRETARIA DE ESTADO DA EDUCAÇÃO","convenente":"FUNDAÇÃO DE APOIO A PESQUISA DO ESTADO DA PARAÍBA","dataCelebracao":"1/8/2016","dataPublicacao":"4/8/2016","objetivo":"DESENVOLVER KITS DE ENSINO E APLICAÇÃO A SEREM UTILIZADOS EM ESCOLAS DE ENSINO MÉDIO DO ESTADO DA PARAÍBA","valorTotal":"18.000"},{"regCge":"16-80811-8","numero":"0331/2016","orgao":"SEE - 22.0001 - SECRETARIA DE ESTADO DA EDUCAÇÃO","convenente":"FUNDAÇÃO DE APOIO A PESQUISA DO ESTADO DA PARAÍBA","dataCelebracao":"1/8/2016","dataPublicacao":"4/8/2016","objetivo":"DESENVOLVER KITS DE ENSINO E APLICAÇÃO A SEREM UTILIZADOS EM ESCOLAS DE ENSINO MÉDIO DO ESTADO DA PARAÍBA","valorTotal":"18.000"},{"regCge":"16-80811-8","numero":"0331/2016","orgao":"SEE - 22.0001 - SECRETARIA DE ESTADO DA EDUCAÇÃO","convenente":"FUNDAÇÃO DE APOIO A PESQUISA DO ESTADO DA PARAÍBA","dataCelebracao":"1/8/2016","dataPublicacao":"4/8/2016","objetivo":"DESENVOLVER KITS DE ENSINO E APLICAÇÃO A SEREM UTILIZADOS EM ESCOLAS DE ENSINO MÉDIO DO ESTADO DA PARAÍBA","valorTotal":"18.000"}];

    $scope.convenioSelecionado = coisas[0];

    $scope.envia = function(busca){
        $scope.temTabela = true;
        $scope.convenios = coisas;
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
        ngDialog.open({
           template: 'view/feedback.html', 
            className: 'ngdialog-theme-default',
            controller: 'ConvenioCidadeController'
        });
    };


}]);