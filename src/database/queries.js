export const queries = {
  getAllUsers: 'SELECT * FROM users',
  addNewUser: 'INSERT INTO users (idPerfil, nombre, apellidos, telefono, email, calle, colonia, numExterior, codigoPostal, estatus, pass, password, urlFoto, username) VALUES (@idPerfil, @nombre, @apellidos, @telefono, @email, @calle, @colonia, @numExterior, @codigoPostal, @estatus, @pass, @password, @urlFoto, @username)',
  getUserById: 'SELECT * FROM users WHERE id = @id',
  deleteUser: 'DELETE FROM users WHERE id = @id',
  updateUserById: 'UPDATE users SET idPerfil = @idPerfil, nombre = @nombre, apellidos = @apellidos, telefono = @telefono, email = @email, calle = @calle, colonia = @colonia, numExterior = @numExterior, codigoPostal = @codigoPostal, estatus = @estatus, pass = @pass, password = @password, urlFoto = @urlFoto, username = @username WHERE id = @id'
};