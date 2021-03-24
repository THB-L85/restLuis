//metodo para status
const dbCon = require("../Configuracion/Config");

function listaStatus(req, res, next){
    dbCon.any('SELECT * FROM status_assistance')
    .then(function(data){
        res.json({
            status: "ok",
            result: data,
            mensaje: "Lista de status ok"
        })
    })
}

module.exports = {
    listaStatus: listaStatus
}