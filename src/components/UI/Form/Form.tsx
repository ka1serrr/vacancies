import { useFormik } from 'formik';
import { FC } from 'react';
import { validationSchema } from './formValidationSchema';
import { FormError } from '@/components/UI/Form/FormError';
import { Button } from '@/components/UI/Button/Button';
import './form.scss';
import { LoaderSvg } from '@/components/UI/LoaderSvg/LoaderSvg';

interface IForm {
  btnText: string;
  handleClick(email: string, password: string): void;
  loading: boolean;
}

export const Form: FC<IForm> = ({ btnText, handleClick, loading }) => {
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
              {formik.touched.password && formik.errors.password ? <FormError error={formik.errors.password} /> : null}
            </div>
          </div>
        </div>
        <Button title={btnText} className='btn form__btn' type='submit' />
        {loading ? <LoaderSvg className='loading' /> : null}
      </div>
    </form>
  );
};
