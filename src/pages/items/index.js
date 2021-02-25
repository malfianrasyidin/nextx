import { useState } from 'react';
import { connect } from 'react-redux';
import { Action, Type } from 'config/redux';

const ItemPage = ({ items, addItem, removeItem }) => {
  const [input, setInput] = useState('');

  return (
    <div className="d-flex flex-column justify-content-center align-items-center pt-5">
      <div>
        <input onChange={(e) => setInput(e.target.value)} value={input ?? ''} />
        <button
          onClick={() => {
            addItem(items.concat(input));
            setInput('');
          }}
        >
          +
        </button>
      </div>
      {items.length ? (
        <ol className="pt-4">
          {items.map((value, index) => (
            <li key={index}>
              {value}
              <span
                className="font-weight-bold"
                onClick={() =>
                  removeItem(items.filter((val, idx) => idx !== index))
                }
              >{` | Delete`}</span>
            </li>
          ))}
        </ol>
      ) : (
        <b className="pt-4">No items</b>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  const { items } = state;

  return { items };
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (payload) => dispatch(Action(Type.Items, payload)),
  removeItem: (payload) => dispatch(Action(Type.Items, payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemPage);
