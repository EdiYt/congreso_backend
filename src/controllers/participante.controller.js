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

exports.createParticipante = async (req, res) => {
  try {
    const data = req.body;  
    const participanteCreado = await Participante.createParticipante(data);
    res.status(201).json(participanteCreado);
  } catch (err) {
    res.status(500).json({ error: 'Error al crear participante' });
  }
};

exports.searchParticipantes = async (req, res) => {
    try {
        const query = req.query.q;
        if (!query) {
            return res.status(400).json({ error: 'Se requiere parámetro de búsqueda' });
        }
        const participantes = await Participante.buscarParticipantesByName(query);
        res.json(participantes);
    } catch (err) {
        res.status(500).json({ error: 'Error al buscar participantes' });
    }
};