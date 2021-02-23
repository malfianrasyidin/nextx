import { useState } from 'react';
import { connect } from 'react-redux';
import { putItem, removeItem } from 'redux/actions';

const Item = ({ items, putItem, removeItem }) => {
  const [input, setInput] = useState('');

  return (
    <div className="d-flex flex-column justify-content-center align-items-center pt-5">
      <div>
        <input onChange={(e) => setInput(e.target.value)} value={input ?? ''} />
        <button
          onClick={() => {
            putItem(input);
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
                onClick={() => removeItem(index)}
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
  putItem: (item) => dispatch(putItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Item);
