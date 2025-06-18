export interface Todo {
    id: number;
    text: string;
}

const TODOS: Todo[] = [];

export function addTodo(text: string) {
    const newTodo = { id: Math.floor(Math.random() * 1000000), text };
    TODOS.push(newTodo);
    return newTodo;
}

export function getTodo(id: number) {
    const todo = TODOS.find(t => t.id === id);
    if (!todo) {
        throw new Error(`Todo with id ${id} not found`);
    }
    return todo;
}

export function getTodos() {
    return TODOS;
}

export function removeTodo(id: number) {
    const index = TODOS.findIndex(t => t.id === id);
    if (index !== -1) {
        TODOS.splice(index, 1);
    }
}

export function updateTodo(id: number, text: string) {
    const todo = getTodo(id);
    todo.text = text;
}