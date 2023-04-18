import { BROWSE_EVENTS_URL } from '@/config';
import { axios } from '@/libs/axios';
import { Event } from '@/types';

type SearchQueryParam = Record<string, string>;

export const browseEvents = (query: SearchQueryParam): Promise<Event[]> => {
  const queryString = new URLSearchParams(query);
  return axios.get(`${BROWSE_EVENTS_URL}?${queryString}`);
};
