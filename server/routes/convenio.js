var express = require('express');
var fs = require('fs');
var router = express.Router();

Object.prototype.renameProperty = function (oldName, newName) {
     // Do nothing if the names are the same
     if (oldName == newName) {
         return this;
     }
    // Check for the old property name to avoid a ReferenceError in strict mode.
    if (this.hasOwnProperty(oldName)) {
        this[newName] = this[oldName];
        delete this[oldName];
    }
    return this;
};

router.get('/', function(req, res){
    // var cidade = req.query.cidade;
    var convenios = [];
    fs.readFile('model/municipal-cg.json', function(err, municipal){
        if (err){
            console.log(err);
            res.status(500).end();
        }else{
            JSON.parse(municipal).forEach(function(el){convenios.push(el);});
            fs.readFile('model/federal-cg-tratado.json', function(err, federal){
                if (err){
                    console.log(err);
                    res.status(500).end();
                }else{
                    JSON.parse(federal).forEach(function(el){convenios.push(el);});
                    res.json(convenios);
                }
            });
        }
    });
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