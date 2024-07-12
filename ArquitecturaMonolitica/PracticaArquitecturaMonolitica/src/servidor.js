const express = require('express');
const bodyParser = require('body-parser');
const { proyectos, agregarProyecto, obtenerProyecto, actualizarProyecto, eliminarProyecto } = require('./datos');

const app = express();
const puerto = 3000;

app.use(bodyParser.json());

// Obtener todos los proyectos
app.get('/proyectos', (req, res) => {
  res.json(proyectos);
});

// Crear un nuevo proyecto
app.post('/proyectos', (req, res) => {
  const proyecto = req.body;
  agregarProyecto(proyecto);
  res.status(201).json(proyecto);
});

// Obtener un proyecto por ID
app.get('/proyectos/:id', (req, res) => {
  const proyecto = obtenerProyecto(req.params.id);
  if (proyecto) {
    res.json(proyecto);
  } else {
    res.status(404).send('Proyecto no encontrado');
  }
});

// Actualizar un proyecto por ID
app.put('/proyectos/:id', (req, res) => {
  const proyectoActualizado = actualizarProyecto(req.params.id, req.body);
  if (proyectoActualizado) {
    res.json(proyectoActualizado);
  } else {
    res.status(404).send('Proyecto no encontrado');
  }
});

// Eliminar un proyecto por ID
app.delete('/proyectos/:id', (req, res) => {
  const proyecto = eliminarProyecto(req.params.id);
  if (proyecto) {
    res.status(204).send();
  } else {
    res.status(404).send('Proyecto no encontrado');
  }
});

app.listen(puerto, () => {
  console.log(`Servidor ejecutándose en http://localhost:${puerto}`);
});
