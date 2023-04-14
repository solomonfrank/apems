import { FiMenu } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import Logo from '@/components/Logo';

import styles from './index.module.scss';

export const NavHeader = () => {
  const isLoggedIn = true;
  return (
    <nav className={styles.container}>
      <div className={styles.headerLeft}>
        <Logo />
      </div>
      <ul className={styles.headerRight}>
        <li>
          <Link to="/GeneralMeeting"> Annual general meeting</Link>
        </li>
        <li>
          <Link to="/GeneralMeeting"> Corporate events</Link>
        </li>

        <li>
          <Link to="/GeneralMeeting"> Shows</Link>
        </li>
        <li>
          <Link to="/GeneralMeeting"> About</Link>
        </li>
        <li>
          <Link to="/GeneralMeeting"> Contact Us</Link>
        </li>

        {isLoggedIn ? (
          <li className={styles.signin}>
            <Link to="/GeneralMeeting">Sign in</Link>
          </li>
        ) : (
          <li>
            <Link to="/GeneralMeeting">My Account</Link>
          </li>
        )}

        <li className={styles.demolink}>
          <Link to="/GeneralMeeting">
            <span className={styles.bookTitle}>Book A Demo</span>
          </Link>
        </li>

        <li>
          <FiMenu size="33" />
        </li>
      </ul>
    </nav>
  );
};

export default NavHeader;
