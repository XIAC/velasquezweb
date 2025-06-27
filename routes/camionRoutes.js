const express  = require('express');
const route  = express.Router();
const camionControlador = require('../controllers/camionController');
route.get('/', camionControlador.traerCamiones);
route.get('/reporte/camiones-no-utilizados', camionControlador.reporteCamionesNoUtilizados);
route.get('/reporte/pedidos-por-camion', camionControlador.reportePedidosPorCamion);
route.get('/reporte/pedidos-entregados', camionControlador.reportePedidosEntregado);


module.exports = route;