import Button from 'components/button';
import { Context, Type } from 'context';
import { useContext, useEffect } from 'react';

const UserPage = () => {
  const [state, dispatch] = useContext(Context);

  useEffect(() => {
    dispatch({
      type: Type.FullName,
      payload: 'malfianrasyidin',
    });
  }, [dispatch]);

  return (
    <div>
      <div>{state.fullName}</div>
      <div className="d-flex justify-content-center">
        <Button type="primary" onClick={() => console.log('hello')}>
          {' '}
          Submit{' '}
        </Button>
      </div>
    </div>
  );
};

export default UserPage;
