let proyectos = [];
let contadorId = 1;

function agregarProyecto(proyecto) {
  proyecto.id = contadorId++;
  proyectos.push(proyecto);
}

function obtenerProyecto(id) {
  return proyectos.find(proyecto => proyecto.id === parseInt(id));
}

function actualizarProyecto(id, proyectoActualizado) {
  const indiceProyecto = proyectos.findIndex(proyecto => proyecto.id === parseInt(id));
  if (indiceProyecto !== -1) {
    proyectos[indiceProyecto] = { ...proyectos[indiceProyecto], ...proyectoActualizado };
    return proyectos[indiceProyecto];
  }
  return null;
}

function eliminarProyecto(id) {
  const indiceProyecto = proyectos.findIndex(proyecto => proyecto.id === parseInt(id));
  if (indiceProyecto !== -1) {
    return proyectos.splice(indiceProyecto, 1)[0];
  }
  return null;
}

module.exports = { proyectos, agregarProyecto, obtenerProyecto, actualizarProyecto, eliminarProyecto };
