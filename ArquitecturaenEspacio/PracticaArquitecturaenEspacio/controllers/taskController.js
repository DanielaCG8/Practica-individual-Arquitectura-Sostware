exports.getAllTasks = (req, res) => {
    // Lógica para obtener todas las tareas
    res.send('Obteniendo todas las tareas');
  };
  
  exports.createTask = (req, res) => {
    // Lógica para crear una nueva tarea
    res.send('Creando una nueva tarea');
  };
  
  exports.getTaskById = (req, res) => {
    // Lógica para obtener una tarea por ID
    res.send(`Obteniendo tarea con ID: ${req.params.id}`);
  };
  
  exports.updateTask = (req, res) => {
    // Lógica para actualizar una tarea por ID
    res.send(`Actualizando tarea con ID: ${req.params.id}`);
  };
  
  exports.deleteTask = (req, res) => {
    // Lógica para eliminar una tarea por ID
    res.send(`Eliminando tarea con ID: ${req.params.id}`);
  };
  