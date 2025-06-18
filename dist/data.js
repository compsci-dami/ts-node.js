"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTodo = exports.removeTodo = exports.getTodos = exports.getTodo = exports.addTodo = void 0;
const TODOS = [];
function addTodo(text) {
    const newTodo = { id: Math.floor(Math.random() * 1000000), text };
    TODOS.push(newTodo);
    return newTodo;
}
exports.addTodo = addTodo;
function getTodo(id) {
    const todo = TODOS.find(t => t.id === id);
    if (!todo) {
        throw new Error(`Todo with id ${id} not found`);
    }
    return todo;
}
exports.getTodo = getTodo;
function getTodos() {
    return TODOS;
}
exports.getTodos = getTodos;
function removeTodo(id) {
    const index = TODOS.findIndex(t => t.id === id);
    if (index !== -1) {
        TODOS.splice(index, 1);
    }
}
exports.removeTodo = removeTodo;
function updateTodo(id, text) {
    const todo = getTodo(id);
    todo.text = text;
}
exports.updateTodo = updateTodo;
