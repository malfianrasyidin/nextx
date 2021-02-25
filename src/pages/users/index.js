import { Context, Type } from 'context';
import { useContext, useEffect } from 'react';

const UserPage = () => {
  const [state, dispatch] = useContext(Context);

  useEffect(() => {
    dispatch({
      type: Type.FullName,
      payload: 'malfianrasyidin',
    });
  }, []);

  return (
    <div>
      <div>{state.fullName}</div>
    </div>
  );
};

export default UserPage;
