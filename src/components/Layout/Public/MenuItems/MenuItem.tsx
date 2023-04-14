import { Badge } from 'antd';
import { BiWallet, BiBell } from 'react-icons/bi';
import { BsBox } from 'react-icons/bs';
import { MdAlternateEmail, MdOutlineContacts, MdOutlineContactSupport } from 'react-icons/md';
import { RxReader } from 'react-icons/rx';
import { Link } from 'react-router-dom';

import styles from './index.module.scss';

export type CustomMenu = { label: string; href: string };

export type navigationProp = {
  name: string;
  href: string;
  // icon?: (props: IconBaseProps) => JSX.Element;
  icon?: React.ReactNode;
  customLabel?: (props: CustomMenu) => JSX.Element;
  subMenu?: navigationProp[];
};

const Notification = ({ label, href }: CustomMenu) => {
  return (
    <Link id={href} className={styles.notifWrap} to="#">
      <span className={styles.settingNotif}>{label}</span>
      <span>
        <Badge count="12" style={{ backgroundColor: '#8F43EE' }} />
      </span>
    </Link>
  );
};

export const navigations: navigationProp[] = [
  {
    name: 'AGM',
    subMenu: [],
    href: 'general-meeting',
    icon: <BsBox size={20} fill="currentColor" stroke="currentColor" />,
  },
  {
    name: 'Coperate events',
    subMenu: [],
    href: 'corperate',
    icon: <RxReader size={20} fill="currentColor" stroke="currentColor" />,
  },
  {
    name: 'Shows',
    subMenu: [],
    href: 'shows',
    icon: <MdAlternateEmail size={20} fill="currentColor" stroke="currentColor" />,
  },
  {
    name: 'About',
    subMenu: [],
    href: 'about',
    icon: <MdOutlineContacts size={20} fill="currentColor" stroke="currentColor" />,
  },
  {
    name: 'contact Us',
    subMenu: [],
    href: 'contact-us',
    icon: <BiWallet size={20} fill="currentColor" stroke="currentColor" />,
  },

  {
    name: 'Sign in',
    subMenu: [],
    href: 'Sign-in',
    icon: <BiWallet size={20} fill="currentColor" stroke="currentColor" />,
  },
  {
    name: 'Book a Demo',
    subMenu: [],
    href: 'book-demo',
    icon: <BiWallet size={20} fill="currentColor" stroke="currentColor" />,
  },
];

export const subNavigations: navigationProp[] = [
  {
    name: 'Notification',
    subMenu: [],
    href: 'notfication',
    icon: <BiBell size={20} fill="currentColor" stroke="currentColor" />,
    customLabel: Notification,
  },
  {
    name: 'Support',
    subMenu: [],
    href: 'support',
    icon: <MdOutlineContactSupport size={20} fill="currentColor" stroke="currentColor" />,
  },
];
