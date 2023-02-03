import { createSelector, select } from "@ngrx/store";

import * as fromApp from '../../store/app.reducer';

export const selectFeature = (state: fromApp.AppState) => state.todos;

export const selectTodosState = createSelector(selectFeature, state => state.entities);
