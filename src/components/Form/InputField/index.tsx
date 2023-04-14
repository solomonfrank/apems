import { UseFormRegisterReturn } from 'react-hook-form';

import { FormWrapper, FormWrapperPassThroughProps } from '../FormWrapper';

import styles from './index.module.scss';

export type InputFieldProps = React.InputHTMLAttributes<HTMLInputElement> &
  FormWrapperPassThroughProps & {
    type: 'text' | 'email' | 'password';
    className?: string;
    registration?: Partial<UseFormRegisterReturn>;
  };

export const InputField = (props: InputFieldProps) => {
  const { type = 'text', className, registration, error, label, placeholder, ...args } = props;
  const classString = `${styles.inputField} ${className}`;

  return (
    <FormWrapper error={error} label={label}>
      <input
        type={type}
        className={classString}
        placeholder={placeholder}
        {...args}
        {...registration}
      />
    </FormWrapper>
  );
};
