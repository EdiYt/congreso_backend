const express = require('express');
const app = express();

const participanteRoutes = require('./src/routes/participante.route');

app.use(express.json());

app.use('/api', participanteRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});
