const pool = require ('../config/db');

async function getAllParticipantes(){
    const [rows] = await pool.query('SELECT * FROM participante');
    return rows;
}

async function getParticipanteById(id){
    const [rows] = await pool.query('SELECT * FROM participante WHERE participante_id = ?', [id]);
    return rows[0];
}