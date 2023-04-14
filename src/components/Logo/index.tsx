import { Link } from 'react-router-dom';

import styles from './index.module.scss';

const Logo = () => {
  return (
    <Link to="/">
      <img
        className={styles.logo}
        src="https://res.cloudinary.com/solomonfrank/image/upload/v1655940333/apems/Apems-logo_iu3uju.webp"
        alt="logo"
      />
    </Link>
  );
};

export default Logo;
