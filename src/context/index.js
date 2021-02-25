import { useReducer, createContext, useEffect } from 'react';

export const Context = createContext();

export const Type = {
  Items: 'items',
  FullName: 'fullName',
};

const reducer = (state, action) => {
  switch (action.type) {
    case Type.Items:
      return Object.assign({}, state, {
        [Type.Items]: action.payload,
      });
    case Type.FullName:
      return Object.assign({}, state, {
        [Type.FullName]: action.payload,
      });
    default:
      return state;
  }
};

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    [Type.Items]: [],
  });

  useEffect(() => {
    dispatch({
      type: Type.Items,
      payload: [1, 2, 3],
    });
  }, []);

  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};

export default Store;
