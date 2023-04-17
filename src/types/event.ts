import { BaseEntity } from './baseEntity';

export type Event = {
  title: string;
  logo: string;
  banner: string;
  start_date: string;
} & BaseEntity;
