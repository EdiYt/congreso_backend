const pool = require ('../config/db');

async function getAllParticipantes(){
    const [rows] = await pool.query('SELECT * FROM participante');
    return rows;
}

async function getParticipanteById(id){
    const [rows] = await pool.query('SELECT * FROM participante WHERE participante_id = ?', [id]);
    return rows[0];
}

async function createParticipante(data){
    const query = 'INSERT INTO participante (nombre, apellidos, email, usuario_twitter, ocupacion, avatar) VALUES (?,?,?,?,?,?)';
    const [result] = await pool.query(query, [
        data.nombre,
        data.apellidos,
        data.email,
        data.usuario_twitter,
        data.ocupacion,
        data.avatar
    ]);
    return { id: result.insertId }
}


async function buscarParticipantesByName(name) {
    const searchTerm = `%${name}%`;
    const [rows] = await pool.query(
        'SELECT * FROM participante WHERE nombre LIKE ?',
        [searchTerm]
    );
    return rows;
}

module.exports = {
    getAllParticipantes,
    getParticipanteById,
    createParticipante, 
    buscarParticipantesByName
};