import { Action, createReducer, on } from '@ngrx/store';
import { Todo } from '../todo.model';
import * as TodoActions from './todos.actions';
import { EntityAdapter, EntityState, createEntityAdapter } from '@ngrx/entity';

// export interface State {
//   todos: Todo[];
// }

// const initState: State = {
//   todos: []
// }


// export const todosReducer = createReducer(
//   initState,
//   on(TodoActions.AddTodo, (state, action) => {
//     const todo = new Todo(action.title, action.text);
//     return { ...state, todos: [...state.todos, todo]}
//   }),
//   on(TodoActions.SetTodos, (state, action) => {
//     return { ...state, todos: action.payload }
//   }),
//   on(TodoActions.UpdateTodo, (state, action) => {
//     const todos = [...state.todos];
//     todos[action.id] = action.todo;
//     return { ...state, todos};
//   }),
// );

export interface State extends EntityState<Todo> {}

export const adapter: EntityAdapter<Todo> = createEntityAdapter<Todo>();

export const todosReducer = createReducer(
  adapter.getInitialState(),
  on(TodoActions.AddTodo, (state, action) => {
    const todo = new Todo(3, action.title, action.text);
    return adapter.addOne(todo, state);
  }),
  on(TodoActions.SetTodos, (state, action) => adapter.setAll(action.payload, state)),
  on(TodoActions.UpdateTodo, (state, action) => adapter.updateOne({ changes: action.todo, id: action.id }, state)),
)



