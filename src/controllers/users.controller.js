import { getConnection, sql, queries } from "../database";

export const getUsers = async (req, res) => {

  try {
    const pool = await getConnection();
    const result = await pool.request()
      .query(queries.getAllUsers);
  
    res.json(result); 
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const createNewUser = async (req, res) => {

  const { idPerfil, nombre, apellidos, telefono, email, calle, colonia, numExterior, codigoPostal, estatus, pass, password, urlFoto, username } = req.body;

  try {
    const pool = await getConnection();
  
    await pool.request()
      .input("idPerfil", sql.Int, idPerfil)
      .input("nombre", sql.VarChar, nombre)
      .input("apellidos", sql.VarChar, apellidos)
      .input("telefono", sql.VarChar, telefono)
      .input("email", sql.VarChar, email)
      .input("calle", sql.VarChar, calle)
      .input("colonia", sql.VarChar, colonia)
      .input("numExterior", sql.Int, numExterior)
      .input("codigoPostal", sql.Int, codigoPostal)
      .input("estatus", sql.Int, estatus)
      .input("pass", sql.VarChar, pass)
      .input("password", sql.VarChar, password)
      .input("urlFoto", sql.VarChar, urlFoto)
      .input("username", sql.VarChar, username)
      .query(queries.addNewUser);
  
    res.json('new user');
  } catch (error) {
    res.status(500);
    res.send(error.message); 
  }
};

export const getUserById = async (req, res) => {

  const { id } = req.params;

  const pool = await getConnection();
  const result = await pool.request()
    .input("id", sql.Int, id)
    .query(queries.getUserById)

  console.log(result);
  res.send(result.recordset[0]);
};

export const deleteUser = async (req, res) => {

  const { id } = req.params;

  const pool = await getConnection();
  await pool.request()
    .input("id", sql.Int, id)
    .query(queries.deleteUser)

  res.sendStatus(204);
};

export const getTotalUsers = async (req, res) => {
  const pool = await getConnection();
  const result = await pool.request()
    .query(queries.getTotalUsers)

  res.sendStatus(204);
};

export const updateUserById = async (req, res) => {

  const { idPerfil, nombre, apellidos, telefono, email, calle, colonia, numExterior, codigoPostal, estatus, pass, password, urlFoto, username } = req.body;
  const { id } = req.params;

  const pool = await getConnection();
  await pool.request()
    .input("id", sql.Int, id)
    .input("idPerfil", sql.Int, idPerfil)
    .input("nombre", sql.VarChar, nombre)
    .input("apellidos", sql.VarChar, apellidos)
    .input("telefono", sql.VarChar, telefono)
    .input("email", sql.VarChar, email)
    .input("calle", sql.VarChar, calle)
    .input("colonia", sql.VarChar, colonia)
    .input("numExterior", sql.Int, numExterior)
    .input("codigoPostal", sql.Int, codigoPostal)
    .input("estatus", sql.Int, estatus)
    .input("pass", sql.VarChar, pass)
    .input("password", sql.VarChar, password)
    .input("urlFoto", sql.VarChar, urlFoto)
    .input("username", sql.VarChar, username)
    .query(queries.updateUserById)

  res.json("User with the id "+ id + " Updated");
};