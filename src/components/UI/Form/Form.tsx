import { useFormik } from 'formik';
import { FC } from 'react';
import firebase from 'firebase/compat';
import functions = firebase.functions;
import { Button } from '@/components/UI/Button/Button';

interface IForm {
  btnText: string;
  handleClick({}): void;
}

export const Form: FC<IForm> = ({ btnText, handleClick }) => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => handleClick(values),
  });
  return (
    <form className='form' onSubmit={formik.handleSubmit}>
      <div className='container'>
        <div className='form__wrapper'>
          <label htmlFor='email' className='form__label'>
            Enter your email
          </label>
          <input
            type='email'
            id='email;'
            name='email'
            className='form__input'
            value={formik.values.email}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          <input
            type='password'
            id='password'
            name='password'
            placeholder='Password'
            value={formik.values.password}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
        </div>
        <Button title={btnText} className='form__btn' />
      </div>
    </form>
  );
};
