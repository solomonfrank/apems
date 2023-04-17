export const globalStorage = {
  store: (key: string, value: unknown) => localStorage.setItem(key, JSON.stringify(value)),
  getStore: (key: string) => JSON.parse(localStorage.getItem(key) as string),
  clearToken: (key: string) => {
    window.localStorage.removeItem(key);
  },
};
