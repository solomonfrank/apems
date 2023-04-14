import { Drawer } from 'antd';
import type { DrawerProps } from 'antd/es/drawer';

type CustomDrawerProps = {
  children: React.ReactNode;
  drawerProps?: DrawerProps;
};

const CustomDrawer = ({ children, drawerProps }: CustomDrawerProps) => {
  return <Drawer {...drawerProps}>{children}</Drawer>;
};

export default CustomDrawer;
