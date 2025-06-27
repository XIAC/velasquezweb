const db = require('../config/db');

exports.traerTodosLosCamiones = (callback)=>{
     const consulta = 'select  * from camion';
        db.query( consulta , (err, resultado) => {
        if (err) return callback(err);
        callback(null, resultado)
    })
};

exports.obtenerCamionesNoutilizados = (fechaInicio, fechaFin, callback)=>{
     const consulta = 'CALL ReporteCamionesNoUtilizados (?, ?);';
        db.query( consulta , [fechaInicio, fechaFin], (err, resultado) => {
        if (err) return callback(err);
        callback(null, resultado[0])
    })
};

exports.obtenerPedidosPorCamion = (fechaInicio, fechaFin, callback)=>{
     const consulta = 'CALL ReportePedidoPorCamion (?, ?);';
        db.query( consulta , [fechaInicio, fechaFin], (err, resultado) => {
        if (err) return callback(err);
        callback(null, resultado[0])
    })
};

exports.obtenerPedidosEntregados = (fechaInicio, fechaFin, callback)=>{
     const consulta = 'CALL ReportePedidoEntregados (?, ?);';
        db.query( consulta , [fechaInicio, fechaFin], (err, resultado) => {
        if (err) return callback(err);
        callback(null, resultado[0])
    })
};