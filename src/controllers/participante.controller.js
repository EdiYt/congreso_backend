const Participante = require('../models/participante.model')

exports.getParticipantes = async (req, res) => {
    try{
        const participantes = await Participante.getAllParticipantes();
        res.json(participantes);
    } catch (err){
        res.status(500).json({ error: 'Error al obtener a todos los participantes'})
    }
};