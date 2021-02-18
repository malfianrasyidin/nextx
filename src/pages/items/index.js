import { useState } from 'react';

const Item = () => {
  const [count, setCount] = useState(0);

  return (
    <h4
      className="pt-5 d-flex justify-content-center"
      onClick={() => setCount(count + 1)}
    >
      {count}
    </h4>
  );
};

export default Item;
