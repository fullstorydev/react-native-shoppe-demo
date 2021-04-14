import { Item } from '../../types';

export const ItemsReducer = (state: Item[] = [], action: {type:string, payload:Item}) => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const newItem = action.payload as Item;
      newItem.quantity = 1;

      const newItemsState = state.map(item => {
        if (newItem.title === item.title) {
          newItem.quantity += item.quantity;
          return newItem;
        }
        return item;
      });

      if (newItem.quantity === 1) newItemsState.push(newItem);
      return newItemsState;
    }
    case 'REMOVE_ITEM': {
      const removeItem = action.payload as Item;
      removeItem.quantity = 1;

      const newItemsState = state.map(item => {
        if (removeItem.title === item.title) {
          removeItem.quantity = item.quantity - 1;
          return removeItem;
        }
        return { ...item };
      }).filter(item => item.quantity > 0);

      return newItemsState
    }
    default:
      return state
  }
};
