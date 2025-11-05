const express = require('express');
const router = express.Router();
const participanteController = require('../controllers/participante.controller');

router.get('/listado', participanteController.getParticipantes);
router.get('/participante/:id', participanteController.getParticipantesById);
router.post('/registro', participanteController.createParticipante);
router.get('/listado/buscar', participanteController.searchParticipantes);

module.exports = router;