import express from 'express';
const todoRouter = express.Router()

// Contollers
import { allTasks,addTASK,taskRemover} from '../controllers/tasksController.js';

// GET
todoRouter.get('/tasks',allTasks)

// POST
todoRouter.post('/task',addTASK)

// DELETE
todoRouter.delete('/task/:id',taskRemover)

export default todoRouter