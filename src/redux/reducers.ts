import { combineReducers } from 'redux';
import { ItemsReducer } from './items/itemReducers'

export const rootReducer = combineReducers({
  ItemsReducer: ItemsReducer
});

export default rootReducer;