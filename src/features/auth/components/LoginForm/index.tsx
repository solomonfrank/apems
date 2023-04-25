import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup';

import { Spinner } from '@/components/Element';
import { InputField } from '@/components/Form';
import { Form } from '@/components/Form/Form';
import { GOOGLE_RECAPTCHA_SITE_KEY } from '@/config';
import { errorMessage } from '@/utils/errorMessage';

import { useLogin } from '../../api/login';

import style from './index.module.scss';

type LoginValues = {
  email: string;
  password: string;
};

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .trim()
    .email('Invalid Email format')
    .required('Email address is required')
    .min(3),
  password: yup.string().trim().required('Password is required'),
});

const LoginFormComp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading] = useState(false);
  const [attempts, setAttempts] = useState(3);
  const login = useLogin();

  const [reCaptcha, setReCaptcha] = useState(false);

  const onSubmit = (data: LoginValues) => {
    login.mutate(data);
  };
  const navigate = useNavigate();

  const formToggle = () => {
    // toggleLogin();
    // toggleSignup();
    navigate('/ContactUs');
  };

  const toggleForgotPassword = () => {
    setAttempts(3);
  };

  const handleReCAPTCHA = () => {
    setReCaptcha(true);
  };

  return (
    <section className={style.form__container}>
      <div className={style.blur_block}></div>
      <div className={style.form__wrapper}>
        <div className={style.header_form}>
          <h4 className={style.form__signup_header}>Welcome back!</h4>
          <div className={style.form__signup_subtitle}>
            {"Don't have an account? "}
            <Link to="#" className={style.navLink} onClick={formToggle}>
              Contact Us
            </Link>
          </div>
        </div>
        <Form<LoginValues>
          submitHandler={onSubmit}
          scheme={loginSchema}
          error={login.error && errorMessage(login.error)}
        >
          {({ register, formState }) => (
            <>
              <InputField
                error={formState.errors['email']}
                type="email"
                label="Email"
                registration={register('email')}
                placeholder="Enter email"
              />
              <InputField
                error={formState.errors['password']}
                type={showPassword ? 'text' : 'password'}
                label="Password"
                registration={register('password')}
                placeholder="Enter password"
                endIcon={
                  showPassword ? (
                    <span className={style.eyeBox} onClick={() => setShowPassword(false)}>
                      <AiFillEye size={18} />
                    </span>
                  ) : (
                    <span className={style.eyeBox} onClick={() => setShowPassword(true)}>
                      <AiFillEyeInvisible size={18} />
                    </span>
                  )
                }
              />
              <ReCAPTCHA sitekey={GOOGLE_RECAPTCHA_SITE_KEY} onChange={handleReCAPTCHA} />
              <div className={style.form__forget_password_box}>
                {attempts < 3 && (
                  <p>
                    {attempts} {attempts === 1 ? 'attempt' : 'attempts'} remaining
                  </p>
                )}

                <Link to="#" onClick={toggleForgotPassword} className={style.form_forget_password}>
                  Forgot your password?
                </Link>
              </div>
              <div className={style.form__input_wrap}>
                <button
                  type="submit"
                  disabled={!reCaptcha || loading}
                  className={style.form__input_submit_request}
                >
                  {login.isLoading ? (
                    <Spinner visible={login.isLoading} size={20} color="#fff" />
                  ) : (
                    'Login  '
                  )}
                </button>
              </div>
            </>
          )}
        </Form>
      </div>
    </section>
  );
};

const LoginForm = React.memo(LoginFormComp);

export default LoginForm;
