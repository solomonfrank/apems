import styles from './index.module.scss';

type Formprops = React.FormHTMLAttributes<HTMLFormElement> & {
  children: React.ReactNode;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export const Form = ({ children, onSubmit, className }: Formprops) => {
  const classStr = `${styles.container} ${className}`;
  return (
    <div className={classStr}>
      <form onSubmit={onSubmit}>{children}</form>
    </div>
  );
};
