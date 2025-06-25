const camionModel = require ('../models/camionModel');
exports.traerCamiones = (req, res) => {
    camionModel.traerTodosLosCamiones((err, camion) =>{
        if (err){
            console.log(err);
        }
        console.log(camion);
        res.render('camion/camion', { camion });
    })
};

exports.reporteCamionesNoUtilizados = (req, res) => {
    const { fechaInicio, fechaFin } = req.query;
    camionModel.obtenerCamionesNoutilizados(fechaInicio, fechaFin,(err, dato) =>{
        if (err){
            console.log(err);
        }
        console.log(dato);
        res.render('camion/camionesNoUtilizados', { camiones : dato });
    })
};

exports.reportePedidosPorCamion = (req, res) => {
    const { fechaInicio, fechaFin } = req.query;
    camionModel.obtenerPedidosPorCamion(fechaInicio, fechaFin,(err, dato) =>{
        if (err){
            console.log(err);
        }
        console.log(dato);
        res.render('camion/pedidosPorCamion', { pedidos : dato });
    })
};
