const Participante = require('../models/participante.model')

exports.getParticipantes = async (req, res) => {
    try{
        const participantes = await Participante.getAllParticipantes();
        res.json(participantes);
    } catch (err){
        res.status(500).json({ error: 'Error al obtener a todos los participantes'})
    }
};

exports.getParticipantesById = async (req, res) => {
    try {
        const id = req.params.id;
        const participante = await Participante.getParticipanteById(id);
        if (!participante) {
            return res.status(404).json({ error: 'Participante no encontrado' })
        }
        res.json(participante);
    } catch (err) {
        res.status(500).json({ error: 'Error al obtener participante por ID' })
    }
};