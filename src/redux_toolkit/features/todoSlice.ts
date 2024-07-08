import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Todos {
  name: string | null;
  id: number | string;
  status: boolean;
}

const initialState = {
  todos: [] as Todos[],
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todos>) => {

     

      state.todos.push({ ...action.payload});
    },
    delTodo: (state, action: PayloadAction<{id:number|string}>) => {
  
      state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
    },
  },
});

export const { addTodo, delTodo } = todoSlice.actions;
export default todoSlice.reducer;
