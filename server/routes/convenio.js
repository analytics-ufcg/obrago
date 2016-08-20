var express = require('express');

var router = express.Router();

router.get('/', function(req, res){
    var cidade = req.query.cidade;
    var convenios = []
    for(var i = 0; i <= 10; i++){
        var singleConvenio = {
            regCge: "16-80811-8",
            numero: "0331/2016",
            orgao: "SEE - 22.0001 - SECRETARIA DE ESTADO DA EDUCAÇÃO",
            convenente: "FUNDAÇÃO DE APOIO A PESQUISA DO ESTADO DA PARAÍBA",
            dataCelebracao: "1/8/2016",
            dataPublicacao: "4/8/2016",
            objetivo: "DESENVOLVER KITS DE ENSINO E APLICAÇÃO A SEREM UTILIZADOS EM ESCOLAS DE ENSINO MÉDIO DO ESTADO DA PARAÍBA",
            valorTotal: "18.000"
        };
        convenios.push(singleConvenio);
    }
    res.json(convenios);
});

router.get('/:id', function(req, res){
    var singleConvenio = {
        regCge: "16-80811-8",
        numero: "0331/2016",
        orgao: "SEE - 22.0001 - SECRETARIA DE ESTADO DA EDUCAÇÃO",
        convenente: "FUNDAÇÃO DE APOIO A PESQUISA DO ESTADO DA PARAÍBA",
        dataCelebracao: "1/8/2016",
        dataPublicacao: "4/8/2016",
        objetivo: "DESENVOLVER KITS DE ENSINO E APLICAÇÃO A SEREM UTILIZADOS EM ESCOLAS DE ENSINO MÉDIO DO ESTADO DA PARAÍBA",
        valorTotal: "18.000"
    };
    res.json(singleConvenio);
});

module.exports = router;