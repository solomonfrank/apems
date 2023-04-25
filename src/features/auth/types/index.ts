export type LoginCredentials = {
  email: string;
  password: string;
};

export type RegisterCredential = {
  email: string;
  password: string;
  fullName: string;
};

export type User = {
  id: string;
  email: string;
  firstName: string;
  lastName?: string;
  bio?: string;
  role?: 'ADMIN' | 'USER';
};

export type UserResponse = {
  jwt: string;
  user: User;
};
