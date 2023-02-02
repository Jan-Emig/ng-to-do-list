import { Action, createAction } from "@ngrx/store";
import { Todo } from "../todo.model";

export const ADD_TODO = '[Todos] Add Todo';
export const FETCH_TODOS = '[Todos] Fetch Todos';
export const SET_TODOS = '[Todos] Set Todos'

export const AddTodo = createAction(ADD_TODO, (title: string, text: string) => ({ title, text }));
export const SetTodos = createAction(SET_TODOS, (payload: Todo[]) => ({ payload }));
export const FetchTodos = createAction(FETCH_TODOS);
