import './errorMessage.scss';
import { FC } from 'react';

type PropTypes<T> = {
  message: T;
};
export const ErrorMessage: FC<PropTypes<any>> = ({ message }) => {
  return (
    <>
      <h2 className='error-message'>An Error: {message} occurred</h2>
    </>
  );
};
