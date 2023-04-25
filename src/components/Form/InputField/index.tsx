import { UseFormRegisterReturn } from 'react-hook-form';
// import { AiFillEyeInvisible } from 'react-icons/ai';

import { FormWrapper, FormWrapperPassThroughProps } from '../FormWrapper';

import styles from './index.module.scss';

export type InputFieldProps = React.InputHTMLAttributes<HTMLInputElement> &
  FormWrapperPassThroughProps & {
    type: 'text' | 'email' | 'password';
    className?: string;
    registration?: Partial<UseFormRegisterReturn>;
    startIcon?: React.ReactElement;
    endIcon?: React.ReactElement;
  };

export const InputField = (props: InputFieldProps) => {
  const {
    startIcon,
    endIcon,
    type = 'text',
    className,
    registration,
    error,
    label,
    placeholder,
    ...args
  } = props;
  const classString = `${styles.inputField} ${className}`;

  return (
    <FormWrapper error={error} label={label}>
      <div className={styles.container}>
        {startIcon}
        <input
          type={type}
          className={classString}
          placeholder={placeholder}
          {...args}
          {...registration}
        />
        {endIcon}
      </div>
    </FormWrapper>
  );
};
