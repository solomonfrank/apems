import classNames from 'clsx';
import React from 'react';

import style from './index.module.scss';

type MeetingInputProps = {
  children: React.ReactNode;
  otherCls?: string;
};
export const MeetingInput = ({ children, otherCls }: MeetingInputProps) => {
  const className = classNames(style.meetingBox, otherCls);
  return <div className={className}>{children}</div>;
};
