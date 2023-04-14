import { FieldError } from 'react-hook-form';

import styles from './index.module.scss';

type FormWrapperProps = {
  children: React.ReactNode;
  label?: string;
  className?: string;
  error?: FieldError | undefined;
  description?: string;
};

export type FormWrapperPassThroughProps = Omit<FormWrapperProps, 'children' | 'className'>;

export const FormWrapper = (props: FormWrapperProps) => {
  const { children, className, label, error } = props;

  const classString = `${styles.formWrapper} ${className}`;
  return (
    <div className={classString}>
      <div className={styles.formBox}>
        {label && <label>{label}</label>}

        <div className={styles.formInput}>{children}</div>
      </div>

      {error?.message && (
        <div role="alert" aria-label={error?.message} className={styles.errorDisplay}>
          {error.message}
        </div>
      )}
    </div>
  );
};
