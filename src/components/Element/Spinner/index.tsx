import { ClipLoader } from 'react-spinners';

import style from './index.module.scss';

type SpinnerProps = {
  visible: boolean;
  size?: number;
  color?: string;
};

export const Spinner = ({ visible, size = 30, color = '#273066' }: SpinnerProps) => {
  if (visible) {
    return (
      <div className={style.container}>
        <ClipLoader color={color} loading={visible} size={size} />
      </div>
    );
  }
  return null;
};
