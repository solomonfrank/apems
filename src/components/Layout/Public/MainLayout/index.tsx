import { useState, createContext } from 'react';

import { publicSiderbarContext } from '../hooks';
import { Sidebar } from '../Sidebar';

import styles from './index.module.scss';
import './index.scss';

type MainLayoutProps = {
  children: JSX.Element;
};
type SidebarContextProp = {
  toggleSidebar?: (status: boolean) => void;
};
export const publicSiderToggleContext = createContext<SidebarContextProp | null>(null);
export const MainLayout = ({ children }: MainLayoutProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = (status: boolean) => {
    console.log('toggleSidebar');
    setCollapsed(status);
  };

  return (
    <publicSiderbarContext.Provider value={{ status: collapsed, toggleSidebar }}>
      <div className={styles.main}>
        <Sidebar drawerClass="publicDrawer" sidebarMenuClass="publicSiderbarmenu" />

        {children}
      </div>
    </publicSiderbarContext.Provider>
  );
};
