import { useContext, createContext } from 'react';

export type SidebarContextProp = {
  status: boolean;
  toggleSidebar: (status: boolean) => void;
};
export const publicSiderbarContext = createContext<SidebarContextProp>({
  status: false,
  toggleSidebar: (status) => console.log('sidebar not active', status),
});

export const useSidebarContext = () => {
  const context = useContext(publicSiderbarContext);

  if (context === undefined) {
    throw new Error('useSidebarContext must be used within a publicSiderbarContext');
  }
  return context;
};
