import { UseFormRegisterReturn } from 'react-hook-form';

import { FormWrapper, FormWrapperPassThroughProps } from '../FormWrapper';

import styles from './index.module.scss';

type TextAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> &
  FormWrapperPassThroughProps & {
    className?: string;
    registration?: Partial<UseFormRegisterReturn>;
  };

export const Textarea = (props: TextAreaProps) => {
  const { className, registration, error, label, ...args } = props;
  const classString = `${styles.inputField} ${className}`;
  return (
    <FormWrapper label={label} error={error}>
      <textarea {...args} {...registration} className={classString} />
    </FormWrapper>
  );
};
