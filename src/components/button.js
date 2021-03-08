import classNames from 'classnames';

const Button = ({ type, onClick, children }) => (
  <button
    className={classNames('btn', type && `btn-${type}`)}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
