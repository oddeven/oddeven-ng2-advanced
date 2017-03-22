import {Action} from '@ngrx/store';

export const ACTION_CREATE_ITEM = 'ACTION_CREATE_ITEM';
export const ACTION_CLEAR_LIST = 'ACTION_CLEAR_LIST';
export const ACTION_REMOVE_ITEM = 'ACTION_REMOVE_ITEM';

export function list(state: string[], action: Action): string[] {
  switch(action.type) {
    case ACTION_CREATE_ITEM: return [...state, action.payload];
    case ACTION_CLEAR_LIST: return [];
    case ACTION_REMOVE_ITEM: return state.filter((element, index) => index !== action.payload);
    default: return state;
  }
}
