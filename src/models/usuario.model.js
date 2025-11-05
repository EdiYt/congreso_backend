const pool = require ('../config/db');

async function getAllParticipantes(){
    const [rows] = await pool.query('SELECT * FROM participante');
    return rows;
}