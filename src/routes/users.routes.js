import { Router } from "express";

import { getUsers, createNewUser, getUserById, deleteUser, getTotalUsers, updateUserById } from "../controllers/users.controller";

const router = Router();

router.get('/users', getUsers);

router.get('/users/:id', getUserById);

router.post('/users', createNewUser);

router.put('/users/:id', updateUserById);

router.delete('/users/:id', deleteUser);

export default router;