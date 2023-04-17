import {
  QueryClient,
  UseQueryOptions,
  DefaultOptions,
  UseMutationOptions,
} from '@tanstack/react-query';
import { AxiosError } from 'axios';

const queryConfig: DefaultOptions = {
  queries: {
    refetchOnWindowFocus: false,
    retry: false,
    useErrorBoundary: true,
  },
};
export const queryClient = new QueryClient({ defaultOptions: queryConfig });

export type EXtractFnReturnType<FnType extends (...args: any) => any> = Awaited<ReturnType<FnType>>;

export type QueryConfig<QueryFnType extends (...args: any) => any> = Omit<
  UseQueryOptions<EXtractFnReturnType<QueryFnType>>,
  'queryKey' | 'queryFn'
>;

export type MutationConfig<MutationFnType extends (...args: any) => any> = UseMutationOptions<
  EXtractFnReturnType<MutationFnType>,
  AxiosError,
  Parameters<MutationFnType>[0]
>;
