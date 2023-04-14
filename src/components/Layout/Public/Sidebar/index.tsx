import { CSSProperties } from 'react';
import { MdClose } from 'react-icons/md';
import { Link } from 'react-router-dom';

import CustomDrawer from '../../../Drawer';
import { useSidebarContext } from '../hooks';
import { SidebarMenu } from '../MenuItems';
import { navigations } from '../MenuItems/MenuItem';

import styles from './index.module.scss';

type SidebarProps = {
  drawerClass?: string;
  sidebarMenuClass?: string;
  drawerStyle?: CSSProperties;
  sidebarMenuStyle?: CSSProperties;
};

export const Sidebar = ({ drawerClass, sidebarMenuClass, drawerStyle }: SidebarProps) => {
  const context = useSidebarContext();

  const toggleSidebarMenu = () => {
    if (!context) {
      return;
    }
    if (context && context.toggleSidebar) {
      context.toggleSidebar(!context.status);
    }
  };
  return (
    <CustomDrawer
      drawerProps={{
        open: context?.status,
        placement: 'right',
        onClose: toggleSidebarMenu,
        className: drawerClass,
        style: drawerStyle,
        width: '70%',
        closeIcon: null,
        title: (
          <div className={styles.drawerTitleCont}>
            <p>
              <Link to="/">
                <img
                  style={{ width: '70%' }}
                  src="https://res.cloudinary.com/solomonfrank/image/upload/v1655940333/apems/apemWhiteLogo_wqpwq1.png"
                  alt="logo"
                />
              </Link>
            </p>
            <button
              onClick={toggleSidebarMenu}
              style={{
                width: '100px',
                outline: 'none',
                border: 'none',
                height: '40px',
                background: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <MdClose color="#fff" size={50} />
            </button>
          </div>
        ),
      }}
    >
      <div className={styles.menuContainer}>
        <div className={styles.navigationContainer}>
          <SidebarMenu
            theme="light"
            navigations={navigations}
            sidebarMenuClass={sidebarMenuClass}
          />
        </div>
      </div>
    </CustomDrawer>
  );
};
