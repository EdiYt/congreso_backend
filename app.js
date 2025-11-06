const express = require('express');
const cors = require('cors');
const app = express();

const participanteRoutes = require('./src/routes/participante.route');

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

app.use('/api', participanteRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});
