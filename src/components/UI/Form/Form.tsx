import { useFormik } from 'formik';
import { FC } from 'react';
import firebase from 'firebase/compat';
import functions = firebase.functions;
import { validationSchema } from './formValidationSchema';
import { FormError } from '@/components/UI/Form/FormError';
import { Button } from '@/components/UI/Button/Button';
import './form.scss';

interface IForm {
  btnText: string;
  handleClick(email: string, password: string): void;
}

export const Form: FC<IForm> = ({ btnText, handleClick }) => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => handleClick(values.email, values.password),
  });
  return (
    <form className='form' onSubmit={formik.handleSubmit}>
      <div className='container'>
        <div className='form__wrapper'>
          <div className='form__inputs-wrap'>
            <div className='form__input-wrap'>
              <label htmlFor='email' className='form__label'>
                Email
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
              {formik.touched.email && formik.errors.email ? <FormError error={formik.errors.email} /> : null}
            </div>
            <div className='form__input-wrap'>
              <label htmlFor='password' className='form__label'>
                Password
              </label>
              <input
                type='password'
                id='password'
                name='password'
                className='form__input'
                value={formik.values.password}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
              {formik.touched.email && formik.errors.email ? <FormError error={formik.errors.password} /> : null}
            </div>
          </div>
        </div>
        <Button title={btnText} className='btn form__btn' type='submit' />
      </div>
    </form>
  );
};
