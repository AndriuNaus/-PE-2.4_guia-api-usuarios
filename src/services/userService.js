import * as UserModel from "../models/userModel.js";

export const getAll = async () => {
  return await UserModel.findAll();
};

export const getById = async (id) => {
  const user = await UserModel.findById(id);
  if (!user) {
    const error = new Error(`Usuario con id ${id} no encontrado`);
    error.status = 404;
    throw error;
  }
  return user;
};

export const create = async ({ name, email }) => {
  if (!name) {
    const error = new Error("El campo name es requerido");
    error.status = 400;
    throw error;
  }
  if (!email) {
    const error = new Error("El campo email es requerido");
    error.status = 400;
    throw error;
  }
  return await UserModel.createUser({ name, email });
};

export const update = async (id, data) => {
  // Verificamos si existe el usuario (lanzará 404 si no)
  await getById(id);
  return await UserModel.updateUser(id, data);
};

export const remove = async (id) => {
  const deleted = await UserModel.removeUser(id);
  if (!deleted) {
    const error = new Error(`Usuario con id ${id} no encontrado`);
    error.status = 404;
    throw error;
  }
  return {
    message: `Usuario ${id} eliminado correctamente`
  };
};