import { PUT_ITEM, REMOVE_ITEM } from 'redux/types';

export const putItem = (item) => ({
  type: PUT_ITEM,
  item,
});

export const removeItem = () => ({
  type: REMOVE_ITEM,
});
