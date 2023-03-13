import { FC } from 'react';
import { authError } from '@/errors/authError';

interface IAuthErrorMessage {
  error: string;
}

export const AuthErrorMessage: FC<IAuthErrorMessage> = ({ error }) => {
  const errorMessage = authError(error);
  return <div className='auth_error'>{errorMessage}</div>;
};
