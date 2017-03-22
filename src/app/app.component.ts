import { Component } from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {ACTION_CREATE_ITEM, ACTION_CLEAR_LIST, ACTION_REMOVE_ITEM} from './reducers/list.reducer';

export interface AppState {
  list: string[];
}

export const initialAppState: AppState = {
  list: ['Apples', 'Bananas', 'Strawberries', 'Blueberries', 'Kiwis']
};

@Component({
  selector: 'ngc-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  list: Observable<string>;

  constructor(private store: Store<AppState>) {
    this.list = store.select('list');
  }

  createItem(item: string) {
    this.store.dispatch({type: ACTION_CREATE_ITEM, payload: item});
  }

  clearList() {
    this.store.dispatch({type: ACTION_CLEAR_LIST});
  }

  removeItem(index: number) {
    this.store.dispatch({type: ACTION_REMOVE_ITEM, payload: index});
  }
}
