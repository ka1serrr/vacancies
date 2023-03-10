import './form.scss';
import { FC } from 'react';
interface IFormError {
  error: string | undefined;
}

export const FormError: FC<IFormError> = ({ error }) => {
  return <div className='form__error'>{error}</div>;
};
