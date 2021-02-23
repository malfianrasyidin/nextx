import { PUT_ITEM, REMOVE_ITEM } from 'redux/types';

const initialState = {
  items: [],
};

const putItem = (state, action) =>
  Object.assign({}, state, {
    items: state.items.concat(action.item),
  });

const removeItem = (state, action) =>
  Object.assign({}, state, {
    items: state.items.filter((value, index) => index !== action.item),
  });

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case PUT_ITEM:
      return putItem(state, action);
    case REMOVE_ITEM:
      return removeItem(state, action);
    default:
      return state;
  }
};

export default reducers;
