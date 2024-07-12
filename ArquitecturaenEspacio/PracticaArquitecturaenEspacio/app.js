const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Importar rutas
const taskRoutes = require('./routes/tasks');
const userRoutes = require('./routes/users');
const authRoutes = require('./routes/auth');

// Middleware
app.use(bodyParser.json());

// Usar espacios de nombres para las rutas
app.use('/api/tasks', taskRoutes);
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);

// Puerto de escucha
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
