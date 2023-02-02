import { ActionReducerMap } from "@ngrx/store";

import * as fromTodos from '../todos/store/todos.reducer';

export interface AppState {
  todos: fromTodos.State;
}

export const appReducer: ActionReducerMap<AppState> = {
  todos: fromTodos.todosReducer,
}
