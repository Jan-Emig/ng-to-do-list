import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";

import * as fromTodosActions from './todos.actions';
import { map, of, switchMap, tap } from "rxjs";
import { Todo } from "../todo.model";

@Injectable({ providedIn: 'root' })
export default class TodosEffects {

  fetchTodos$ = createEffect(() => this.actions$.pipe(
    ofType(fromTodosActions.FETCH_TODOS),
    switchMap(() => {
      return of([
        new Todo(0, 'First todo', 'This is the first todo'),
        new Todo(1, 'Second todo', 'This is the second todo'),
        new Todo(2, 'Third todo', 'This is the third todo')
      ]);
    }),
    map(todos => ({ type: fromTodosActions.SET_TODOS, payload: todos }))
  ))

  constructor(private actions$: Actions) { }
}
