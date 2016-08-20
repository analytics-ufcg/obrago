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
var fs = require('fs');
fs.readFile('fed-cg.json', function(err, data){
    if (err) return console.log(err);
    var dados = JSON.parse(data);

    for(var i = 0; i < dados.length; i++){
        trataCampos(dados[i]);
    }

    fs.writeFile('federal-cg-tratado.json', JSON.stringify(dados), 'utf8');
});

function trataCampos(obj){
    obj.renameProperty('SIT_CONVENIO', 'situacaoConvenio');
    obj.renameProperty('NR_CONVENIO', 'numero');
    obj.renameProperty('DIA_INIC_VIGENC_CONV', 'inicioVigencia');
    obj.renameProperty('DIA_FIM_VIGENC_CONV', 'fimVigencia');
    obj.renameProperty('DIA_LIMITE_PREST_CONTAS', 'limitePrestacao');
    obj.renameProperty('ID_PROPOSTA', 'idProposta');
    obj.renameProperty('VL_GLOBAL_CONV', 'valorGlobal');
    obj.renameProperty('VL_REPASSE_CONV', 'valorRepasse');
    obj.renameProperty('VL_CONTRAPARTIDA_CONV', 'valorContrapartida');
    obj.renameProperty('VL_EMPENHADO_CONV', 'valorEmpenhado');
    obj.renameProperty('VL_DESEMBOLSADO_CONV', 'valorDesembolsado');
    obj.renameProperty('VL_SALDO_REMAN_TESOURO', 'valorSaldoRemanescente');
    obj.renameProperty('VL_INGRESSO_CONTRAPARTIDA', 'valorIngresso');
    obj.renameProperty('UF_PROPONENTE', 'uf');
    obj.renameProperty('MUNIC_PROPONENTE', 'cidade');
    obj.renameProperty('OBJETO_PROPOSTA', 'objetivo');
    obj.renameProperty('TX_STATUS', 'status');
    obj.renameProperty('funcao.imputada', 'areaConvenio');
}
