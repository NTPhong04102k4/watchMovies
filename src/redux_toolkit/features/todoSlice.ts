// src/features/todo/todoSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Todo {
  id: number|string;
  name: string;
}

interface TodoState {
  todos: Todo[];
}

const initialState: TodoState = {
  todos: [],
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload);
    },
    updateTodo: (state, action: PayloadAction<{ id: number|string; newName: string }>) => {
      const { id, newName } = action.payload;
      const todo = state.todos.find(todo => todo.id === id);
      if (todo) {
        todo.name = newName;
      }
    },
    deleteTodo: (state, action: PayloadAction<number|string>) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
    addTodoRequest: (state, action: PayloadAction<Todo>) => {},
    updateTodoRequest: (state, action: PayloadAction<{ id: number | string; newName: string }>) => {},
    deleteTodoRequest: (state, action: PayloadAction<number | string>) => {},
  },
});

export const { addTodo, updateTodo, deleteTodo ,addTodoRequest,updateTodoRequest,deleteTodoRequest} = todoSlice.actions;

export default todoSlice.reducer;
