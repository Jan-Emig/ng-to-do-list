import { Component, Input } from '@angular/core';
import { Todo } from '../todo.model';

import * as fromApp from '../../store/app.reducer';
import * as fromTodos from '../store/todos.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.css']
})
export class ToDoItemComponent {
  @Input() todo?: Todo;
  @Input() id?: number;

  constructor(private store: Store<fromApp.AppState>) {}

  onCompletedToggle() {
    if (this.todo && this.id != undefined) this.store.dispatch(fromTodos.UpdateTodo({ id: this.id, todo: {...this.todo, completed: !this.todo.completed } }))
  }
}
