import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo.model';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

import * as fromApp from '../../store/app.reducer';
import * as TodoActions from '../store/todos.actions';
import * as TodoSelectors from '../store/todos.selectors';
import { Dictionary } from '@ngrx/entity';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
  todos: Dictionary<Todo> = {};
  subscription?: Subscription;

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    // this.store.subscribe(state => this.todos = state.todos.todos);
    this.store.dispatch(TodoActions.FetchTodos());
    this.store.select('todos').subscribe(console.log)
    this.store.select(TodoSelectors.selectTodosState).subscribe(console.log);
    this.store.select(TodoSelectors.selectTodosState).subscribe(todos => this.todos = todos);
    // this.subscription = this.store.dispatch(new TodoActions.FetchTodos())
  }
}
