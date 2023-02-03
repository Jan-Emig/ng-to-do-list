import { Action, createAction, props } from "@ngrx/store";
import { Todo } from "../todo.model";

export const ADD_TODO = '[Todos] Add Todo';
export const FETCH_TODOS = '[Todos] Fetch Todos';
export const SET_TODOS = '[Todos] Set Todos'
export const UPDATE_TODO = '[Todos] Update Todo';

export const AddTodo = createAction(ADD_TODO, props<{title: string, text: string}>());
export const SetTodos = createAction(SET_TODOS, props<{ payload: Todo[] }>());
export const UpdateTodo = createAction(UPDATE_TODO, props<{ id: number, todo: Todo }>());
export const FetchTodos = createAction(FETCH_TODOS);
