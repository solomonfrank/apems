import { useQuery } from '@tanstack/react-query';

import { BROWSE_EVENTS_URL } from '@/config';
import { axios } from '@/libs/axios';
import { QueryConfig, EXtractFnReturnType } from '@/libs/react-query';
import { Event } from '@/types';

type FilterQuery = {
  search: string;
  calender: string;
  filter?: string;
  per_page: string;
};

type MappedFilter = {
  [key: string]: string;
};

type PublicEventType = {
  data: Event[];
  meta?: unknown;
};

export const browseEvents = async (query: MappedFilter): Promise<PublicEventType> => {
  const queryString = new URLSearchParams(query);
  const res = await axios.get(`${BROWSE_EVENTS_URL}?${queryString}`);
  return res.data;
};

type QuertyFnType = typeof browseEvents;

type FilterQueryPartial = Partial<FilterQuery>;

type useBrowserEventOption = {
  config?: QueryConfig<QuertyFnType>;
  filters?: FilterQueryPartial;
};

type useQueryProp = EXtractFnReturnType<QuertyFnType>;

export const useBrowserEvent = ({ config, filters }: useBrowserEventOption = {}) => {
  return useQuery<useQueryProp>({
    ...config,
    queryFn: () => browseEvents({ ...filters }),
    queryKey: ['browser'],
  });
};
