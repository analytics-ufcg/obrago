var app = angular.module('obrago', []);

app.controller('ConvenioCidadeController', ['$scope', function($scope){
    $scope.temTabela = false;

    $scope.convenios = [];

    $scope.convenioSelecionado = {};

    var coisas = 
[{"regCge":"16-80811-8","numero":"0331/2016","orgao":"SEE - 22.0001 - SECRETARIA DE ESTADO DA EDUCAÇÃO","convenente":"FUNDAÇÃO DE APOIO A PESQUISA DO ESTADO DA PARAÍBA","dataCelebracao":"1/8/2016","dataPublicacao":"4/8/2016","objetivo":"DESENVOLVER KITS DE ENSINO E APLICAÇÃO A SEREM UTILIZADOS EM ESCOLAS DE ENSINO MÉDIO DO ESTADO DA PARAÍBA","valorTotal":"18.000"},{"regCge":"16-80811-8","numero":"0331/2016","orgao":"SEE - 22.0001 - SECRETARIA DE ESTADO DA EDUCAÇÃO","convenente":"FUNDAÇÃO DE APOIO A PESQUISA DO ESTADO DA PARAÍBA","dataCelebracao":"1/8/2016","dataPublicacao":"4/8/2016","objetivo":"DESENVOLVER KITS DE ENSINO E APLICAÇÃO A SEREM UTILIZADOS EM ESCOLAS DE ENSINO MÉDIO DO ESTADO DA PARAÍBA","valorTotal":"18.000"},{"regCge":"16-80811-8","numero":"0331/2016","orgao":"SEE - 22.0001 - SECRETARIA DE ESTADO DA EDUCAÇÃO","convenente":"FUNDAÇÃO DE APOIO A PESQUISA DO ESTADO DA PARAÍBA","dataCelebracao":"1/8/2016","dataPublicacao":"4/8/2016","objetivo":"DESENVOLVER KITS DE ENSINO E APLICAÇÃO A SEREM UTILIZADOS EM ESCOLAS DE ENSINO MÉDIO DO ESTADO DA PARAÍBA","valorTotal":"18.000"},{"regCge":"16-80811-8","numero":"0331/2016","orgao":"SEE - 22.0001 - SECRETARIA DE ESTADO DA EDUCAÇÃO","convenente":"FUNDAÇÃO DE APOIO A PESQUISA DO ESTADO DA PARAÍBA","dataCelebracao":"1/8/2016","dataPublicacao":"4/8/2016","objetivo":"DESENVOLVER KITS DE ENSINO E APLICAÇÃO A SEREM UTILIZADOS EM ESCOLAS DE ENSINO MÉDIO DO ESTADO DA PARAÍBA","valorTotal":"18.000"},{"regCge":"16-80811-8","numero":"0331/2016","orgao":"SEE - 22.0001 - SECRETARIA DE ESTADO DA EDUCAÇÃO","convenente":"FUNDAÇÃO DE APOIO A PESQUISA DO ESTADO DA PARAÍBA","dataCelebracao":"1/8/2016","dataPublicacao":"4/8/2016","objetivo":"DESENVOLVER KITS DE ENSINO E APLICAÇÃO A SEREM UTILIZADOS EM ESCOLAS DE ENSINO MÉDIO DO ESTADO DA PARAÍBA","valorTotal":"18.000"},{"regCge":"16-80811-8","numero":"0331/2016","orgao":"SEE - 22.0001 - SECRETARIA DE ESTADO DA EDUCAÇÃO","convenente":"FUNDAÇÃO DE APOIO A PESQUISA DO ESTADO DA PARAÍBA","dataCelebracao":"1/8/2016","dataPublicacao":"4/8/2016","objetivo":"DESENVOLVER KITS DE ENSINO E APLICAÇÃO A SEREM UTILIZADOS EM ESCOLAS DE ENSINO MÉDIO DO ESTADO DA PARAÍBA","valorTotal":"18.000"},{"regCge":"16-80811-8","numero":"0331/2016","orgao":"SEE - 22.0001 - SECRETARIA DE ESTADO DA EDUCAÇÃO","convenente":"FUNDAÇÃO DE APOIO A PESQUISA DO ESTADO DA PARAÍBA","dataCelebracao":"1/8/2016","dataPublicacao":"4/8/2016","objetivo":"DESENVOLVER KITS DE ENSINO E APLICAÇÃO A SEREM UTILIZADOS EM ESCOLAS DE ENSINO MÉDIO DO ESTADO DA PARAÍBA","valorTotal":"18.000"},{"regCge":"16-80811-8","numero":"0331/2016","orgao":"SEE - 22.0001 - SECRETARIA DE ESTADO DA EDUCAÇÃO","convenente":"FUNDAÇÃO DE APOIO A PESQUISA DO ESTADO DA PARAÍBA","dataCelebracao":"1/8/2016","dataPublicacao":"4/8/2016","objetivo":"DESENVOLVER KITS DE ENSINO E APLICAÇÃO A SEREM UTILIZADOS EM ESCOLAS DE ENSINO MÉDIO DO ESTADO DA PARAÍBA","valorTotal":"18.000"},{"regCge":"16-80811-8","numero":"0331/2016","orgao":"SEE - 22.0001 - SECRETARIA DE ESTADO DA EDUCAÇÃO","convenente":"FUNDAÇÃO DE APOIO A PESQUISA DO ESTADO DA PARAÍBA","dataCelebracao":"1/8/2016","dataPublicacao":"4/8/2016","objetivo":"DESENVOLVER KITS DE ENSINO E APLICAÇÃO A SEREM UTILIZADOS EM ESCOLAS DE ENSINO MÉDIO DO ESTADO DA PARAÍBA","valorTotal":"18.000"},{"regCge":"16-80811-8","numero":"0331/2016","orgao":"SEE - 22.0001 - SECRETARIA DE ESTADO DA EDUCAÇÃO","convenente":"FUNDAÇÃO DE APOIO A PESQUISA DO ESTADO DA PARAÍBA","dataCelebracao":"1/8/2016","dataPublicacao":"4/8/2016","objetivo":"DESENVOLVER KITS DE ENSINO E APLICAÇÃO A SEREM UTILIZADOS EM ESCOLAS DE ENSINO MÉDIO DO ESTADO DA PARAÍBA","valorTotal":"18.000"},{"regCge":"16-80811-8","numero":"0331/2016","orgao":"SEE - 22.0001 - SECRETARIA DE ESTADO DA EDUCAÇÃO","convenente":"FUNDAÇÃO DE APOIO A PESQUISA DO ESTADO DA PARAÍBA","dataCelebracao":"1/8/2016","dataPublicacao":"4/8/2016","objetivo":"DESENVOLVER KITS DE ENSINO E APLICAÇÃO A SEREM UTILIZADOS EM ESCOLAS DE ENSINO MÉDIO DO ESTADO DA PARAÍBA","valorTotal":"18.000"}];


    $scope.envia = function(busca){
        $scope.temTabela = true;
        $scope.convenios = coisas;
    };

    $scope.especifica = function(id){
        $scope.temTabela = false;
        alert(id);
    };



}]);