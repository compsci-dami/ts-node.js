"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todo_1 = __importDefault(require("./routes/todo")); // adjust the path as needed
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/', todo_1.default);
app.use((err, req, res, next) => {
    res.status(500).json({ message: 'An error occurred!' });
});
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
