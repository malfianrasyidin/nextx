import { PUT_ITEM, REMOVE_ITEM } from 'redux/types';

export const putItem = (item) => ({
  type: PUT_ITEM,
  item,
});

export const removeItem = (item) => ({
  type: REMOVE_ITEM,
  item,
});
