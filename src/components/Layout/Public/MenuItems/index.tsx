import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

import style from './index.module.scss';
import { CustomMenu } from './MenuItem';
import type { navigationProp } from './MenuItem';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

type MenuItenProps = {
  label: string;
  customLabel?: (props: CustomMenu) => JSX.Element;
  href: string;
};
const MenuItemComp = ({ label, href, customLabel }: MenuItenProps) => {
  const CustomCom = customLabel;

  if (CustomCom) {
    return <CustomCom href={href} label={label} />;
  }
  return (
    <Link className={style.menuItemLink} to="#">
      {label}
    </Link>
  );
};

type SidebarMenuProps<T> = {
  theme: 'light' | 'dark';
  navigations: T[];
  sidebarMenuClass?: string;
};

export function SidebarMenu<T extends navigationProp>({
  theme = 'light',
  navigations,
  sidebarMenuClass,
}: SidebarMenuProps<T>) {
  const items = navigations.map((item) => {
    const child =
      item.subMenu && item.subMenu.length
        ? item.subMenu.map((sitem) =>
            getItem(
              <MenuItemComp
                label={sitem.name}
                href={sitem.href}
                customLabel={sitem?.customLabel}
              />,
              item.href,
              item.icon
            )
          )
        : null;
    return getItem(
      <MenuItemComp label={item.name} href={item.href} customLabel={item.customLabel} />,
      item.href,
      item.icon,
      child || undefined
    );
  });
  return (
    <Menu
      className={sidebarMenuClass}
      theme={theme}
      defaultSelectedKeys={['dashboard']}
      mode="inline"
      items={items}
      style={{
        border: 'none',
      }}
    />
  );
}

// export default SidebarMenu;
