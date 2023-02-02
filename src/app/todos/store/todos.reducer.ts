import { Action, createReducer, on } from '@ngrx/store';
import { Todo } from '../todo.model';
import * as TodoActions from './todos.actions';

export interface State {
  todos: Todo[];
}

const initState: State = {
  todos: []
}


export const todosReducer = createReducer(
  initState,
  on(TodoActions.AddTodo, (state, action) => {
    const todo = new Todo(action.title, action.text);
    return { ...state, todos: [...state.todos, todo]}
  }),
  on(TodoActions.SetTodos, (state, action) => {
    return { ...state, todos: action.payload }
  }),
  on(TodoActions.UpdateTodo, (state, action) => {
    const todos = [...state.todos];
    todos[action.payload.id] = action.payload.todo;
    return { ...state, todos};
  }),
);
