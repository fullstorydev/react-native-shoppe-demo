import { Item } from '../../types'

export const ItemActions = {
  addItem: (item: Item) => (
    {
      type: 'ADD_ITEM',
      payload: item,
    }
  ),

  removeItem: (item: Item) => (
    {
      type: 'REMOVE_ITEM',
      payload: item,
    }
  )
}
