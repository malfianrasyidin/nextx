import { PUT_ITEM, REMOVE_ITEM } from 'redux/types';

const initialState = {
  items: []
};

const putItem = (state, action) => Object.assign({}, state, {
  items: state.items.push(action.item)
});

const removeItem = (state) => Object.assign({}, state, {
  items: state.items.pop()
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case PUT_ITEM:
      return putItem(state, action);
    case REMOVE_ITEM:
      return removeItem(state);
    default:
      return state;
  }
};
