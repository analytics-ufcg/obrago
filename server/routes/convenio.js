var express = require('express');
var fs = require('fs');
var router = express.Router();
var multer = require('multer');

var uploading = multer({
  dest: __dirname + '../fotos/',
  limits: {fileSize: 1000000, files:1}
})

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
            municipal = JSON.parse(municipal);
            municipal.forEach(function(el){
                el.renameProperty('objeto', 'objetivo');
                el.renameProperty('regCge', 'id');
                el.origem = "municipal";
                convenios.push(el);
            });
            fs.r
            fs.readFile('model/federal-cg-tratado.json', function(err, federal){
                if (err){
                    console.log(err);
                    res.status(500).end();
                }else{
                    federal = JSON.parse(federal);
                    federal.filter(function(el){
                            return !el.situacaoConvenio.includes('Anulado');
                    });
                    federal.forEach(function(el){
                        el.renameProperty('numero', 'id');
                        el.origem = "federal";
                        convenios.push(el);
                    });
                    res.json(convenios);
                }
            });
        }
    });
});

router.get('/:id', function(req, res){
    fs.readFile('model/municipal-cg.json', function(err, municipal){
        var convenio = false;
        if (err){
            console.log(err);
            res.status(500).end();
        }else{
            municipal = JSON.parse(municipal);
            municipal.forEach(function(el){
                el.renameProperty('objeto', 'objetivo');
                el.renameProperty('regCge', 'id');
                el.origem = "municipal";
                if (el.id == req.params.id){
                    convenio = el;
                }
            });
            fs.readFile('model/federal-cg-tratado.json', function(err, federal){
                if (err){
                    console.log(err);
                    res.status(500).end();
                }else{
                    federal = JSON.parse(federal);
                    federal.filter(function(el){
                            return !el.situacaoConvenio.includes('Anulado');
                    });
                    federal.forEach(function(el){
                        el.renameProperty('numero', 'id');
                        el.origem = "federal";
                        if (el.id == req.params.id){
                            convenio = el;
                        }
                    });
                    if (!convenio) return res.status(404).end();
                    res.json(convenio);
                }
            });
        }
    });
});

router.post('/feedback', uploading, function(req, res){
    var feedback = {
        status: req.body.status,
        descricao: req.body.descricao,
        url: req.body.url
    };
    fs.readFile('dados/feedback.json', 'utf8', function(err, data){
        var todos = JSON.parse(data);
        todos.push(feedback);
        fs.writeFiles('dados/feedback.json', JSON.stringify(todos), function(err, data){
            if (err) {
                console.log(err);
                res.status(500).end();
            }else{
                res.status(201).json(feedback);
            }
        });
    });

});

module.exports = router;