export const IDENTITY_BASE_URL = process.env.REACT_APP_IDENTITY_BASE_URL as string;

export const LOGIN_URL = `${IDENTITY_BASE_URL}/api/auth/login`;
export const LOGOUT_URL = `${IDENTITY_BASE_URL}/api/auth/logout`;
