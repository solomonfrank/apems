import {
  QueryFunction,
  QueryKey,
  MutateFunction,
  useQuery,
  UseQueryOptions,
  useMutation,
  UseMutationOptions,
  useQueryClient,
} from '@tanstack/react-query';
import { useCallback } from 'react';

export type ConfigureAuthProps<LoginCredentials, AuthUser> = {
  userFn?: QueryFunction<AuthUser, QueryKey>;
  loginFn: MutateFunction<AuthUser, Error, LoginCredentials>;
  logoutFn?: MutateFunction<unknown, unknown>;
  userKey?: QueryKey;
};

export const configureAuth = <LoginCredentials, User>(
  configs: ConfigureAuthProps<LoginCredentials, User>
) => {
  const { userFn, loginFn, logoutFn, userKey = ['user-auth'] } = configs;

  const useUser = (
    options: Omit<UseQueryOptions<User, Error, User, QueryKey>, 'queryKey' | 'queryFn'>
  ) =>
    useQuery({
      ...options,
      queryFn: userFn,
      queryKey: userKey,
    });

  // userQuery(userKey, userFn, options) also applicable

  const useLogin = (options?: Omit<UseMutationOptions<unknown, Error, unknown>, 'mutationFn'>) => {
    const queryClient = useQueryClient();

    const setUser = useCallback(
      (data: User) => {
        queryClient.setQueryData(userKey, data);
      },
      [queryClient]
    );
    return useMutation({
      ...options,
      mutationFn: loginFn,
      onSuccess: (user, ...rest) => {
        setUser(user);
        options?.onSuccess?.(user, ...rest);
      },
    });
  };

  const useLogout = (options: Omit<UseMutationOptions<unknown, Error, unknown>, 'mutationFn'>) => {
    return useMutation({
      ...options,
      mutationFn: logoutFn,
      onSuccess: () => {
        localStorage.removeItem('token');
      },
    });
  };

  return {
    useLogin,
    useLogout,
    useUser,
  };
};

// console.log('login,', login);
