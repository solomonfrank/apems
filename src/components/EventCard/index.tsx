import { Tooltip } from 'antd';
import { CSSProperties } from 'react';
import { FiEdit, FiMoreVertical } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

import { BaseEntity } from '@/types';

import style from './index.module.scss';

type EventCardsProps = BaseEntity & {
  url?: string;
  containerStyle?: CSSProperties;
  date?: React.ReactNode;
  title?: string;
  showMenu?: boolean;
  logo?: string;
  banner?: string;
  start_date: string;
};

const EventCards = ({
  url,
  date,
  id,
  title,
  banner,
  showMenu,
  logo,
  start_date,
}: EventCardsProps) => {
  const navigate = useNavigate();

  const text = (
    <button className={style.promptBox} onClick={() => navigate(`/EventSummary/${id}`)}>
      <span>
        <FiEdit />
      </span>
      <span>Create new event using this setup</span>
    </button>
  );
  return (
    <div
      aria-hidden="true"
      className={style.eventCard}
      // style={dStyle}
      onClick={() => navigate(`${url}`)}
    >
      <img src={banner} alt={title} className={style.bannerImg} loading="lazy" />
      <div className={style.eventOverlay}></div>
      <div className={style.logoWrapper}>
        <img className={style.logoImg} src={logo} alt={title} loading="lazy" />
      </div>

      <div className={style.card__bottom}>
        <h6 className={style.card__bottom__caption}>{title}</h6>
        <div className={style.card__bottom__date}>{start_date}</div>
        {showMenu && (
          <div className={style.card_left}>
            <span className={style.card__bottom__date}>{date}</span>
            <Tooltip
              placement="topRight"
              title={text}
              color="#fff"
              overlayStyle={{ borderRadius: '60px' }}
            >
              <button className={style.card_right} onClick={() => navigate(`${url}`)}>
                <FiMoreVertical color="#fff" size={19} />
              </button>
            </Tooltip>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventCards;
