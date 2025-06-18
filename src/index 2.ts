import express, { Request, Response, NextFunction } from 'express';
import todoRoutes from './routes/todo'; // adjust the path as needed
import { getTodos } from './data';

const app = express();
app.use(express.json());

app.use('/', todoRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).json({ message: 'An error occurred!' });
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});