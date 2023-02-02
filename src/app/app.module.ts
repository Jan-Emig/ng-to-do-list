import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';

import * as fromApp from './store/app.reducer';
import { ToDoListComponent } from './todos/to-do-list/to-do-list.component';
import { ToDoItemComponent } from './todos/to-do-item/to-do-item.component';
import { EffectsModule } from '@ngrx/effects';
import TodosEffects from './todos/store/todos.effects';
import { AddTodoComponent } from './todos/add-todo/add-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ToDoListComponent,
    ToDoItemComponent,
    AddTodoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(fromApp.appReducer),
    EffectsModule.forRoot([TodosEffects]),
    StoreDevtoolsModule.instrument({ logOnly: true }),
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
