import { Router } from "express";
import * as userService from "../services/userService.js";

const router = Router();

// 1. GET /api/users - Listar todos los usuarios
router.get('/', async (req, res, next) => {
  try {
    const users = await userService.getAll();
    res.status(200).json({ data: users });
  } catch (error) {
    next(error);
  }
});

// 2. GET /api/users/:id - Obtener un usuario por ID
router.get('/:id', async (req, res, next) => {
  try {
    const user = await userService.getById(req.params.id);
    res.status(200).json({ data: user });
  } catch (error) {
    next(error);
  }
});

// 3. POST /api/users - Crear un nuevo usuario
router.post('/', async (req, res, next) => {
  try {
    const user = await userService.create(req.body);
    res.status(201).json({ data: user });
  } catch (error) {
    next(error);
  }
});

// 4. PUT /api/users/:id - Actualizar un usuario
router.put('/:id', async (req, res, next) => {
  try {
    const user = await userService.update(req.params.id, req.body);
    res.status(200).json({ data: user });
  } catch (error) {
    next(error);
  }
});

// 5. DELETE /api/users/:id - Eliminar un usuario
router.delete('/:id', async (req, res, next) => {
  try {
    const result = await userService.remove(req.params.id);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
});

export default router;
