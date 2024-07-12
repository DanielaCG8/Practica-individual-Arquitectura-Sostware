exports.getAllUsers = (req, res) => {
    // Lógica para obtener todos los usuarios
    res.send('Obteniendo todos los usuarios');
  };
  
  exports.createUser = (req, res) => {
    // Lógica para crear un nuevo usuario
    res.send('Creando un nuevo usuario');
  };
  
  exports.getUserById = (req, res) => {
    // Lógica para obtener un usuario por ID
    res.send(`Obteniendo usuario con ID: ${req.params.id}`);
  };
  
  exports.updateUser = (req, res) => {
    // Lógica para actualizar un usuario por ID
    res.send(`Actualizando usuario con ID: ${req.params.id}`);
  };
  
  exports.deleteUser = (req, res) => {
    // Lógica para eliminar un usuario por ID
    res.send(`Eliminando usuario con ID: ${req.params.id}`);
  };
  