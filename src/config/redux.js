import { createStore } from 'redux';

export const Type = {
  Items: 'items',
};

export const Action = (type, payload) => ({
  type,
  payload,
});

const initialState = {
  items: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Type.Items:
      return Object.assign({}, state, {
        items: action.payload,
      });
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
