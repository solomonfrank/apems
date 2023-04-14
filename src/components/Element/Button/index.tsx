import { forwardRef } from 'react';

import { Spinner } from '../Spinner';

import styles from './index.module.scss';

type Iconprops =
  | { startIcon: React.ReactElement; endIcon: undefined }
  | { endIcon: React.ReactElement; startIcon: undefined }
  | { endIcon?: undefined; startIcon?: undefined };

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  isLoading?: boolean;
} & Iconprops;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ type = 'button', className = '', isLoading = false, startIcon, endIcon, ...props }, ref) => {
    const classString = `${styles.btn} ${className}`;
    return (
      <button ref={ref} type={type} className={classString}>
        {isLoading && <Spinner visible={isLoading} />} {!isLoading && startIcon}
        {!isLoading && <span>{props.children}</span>}
        {!isLoading && endIcon}
      </button>
    );
  }
);

Button.displayName = 'Button';
