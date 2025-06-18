import express, { Request, Response } from 'express';
import { addTodo, getTodo, getTodos, updateTodo, removeTodo } from '../data';

const router = express.Router();

router.post('/todos', (req: Request, res: Response) => {
    const text = req.body.text;
    const addedTodo = addTodo(text);
    res.json({ message: 'todo added!', todo: addedTodo });
});

router.get('/todos', (req: Request, res: Response) => {
    const todos = getTodos();
    res.json({ todos });
});

router.get('/todos/:id', (req: Request, res: Response) => {
    const todo = getTodo(+req.params.id);
    res.json({ todo });
});

router.patch('/todos/:id', (req: Request, res: Response) => {
    updateTodo(+req.params.id, req.body.text);
    const updatedTodo = getTodo(+req.params.id);
    res.json({ message: 'todo updated!', todo: updatedTodo });
});

router.delete('/todos/:id', (req: Request, res: Response) => {
    removeTodo(+req.params.id);
    res.json({ message: 'todo deleted!' });
});

export default router;