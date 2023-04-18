import { Modal } from 'antd';
import { useState } from 'react';
import { FaPlay } from 'react-icons/fa';
import ReactPlayer from 'react-player/youtube';

import style from './index.module.scss';

const Experience = () => {
  const [visible, setVisible] = useState(false);

  return (
    <section className={`${style.second__main}`}>
      <div className={style.second__main__wrapper}>
        <div className={style.second__main__header}>
          <h3 className={style.second__main__header__title}>
            Immersive virtual and hybrid events experience
          </h3>
          <div className={style.second__main__text__box}>
            We bring your great and immersive virtual and hybrid event experiences in your meetings
            and events in the best way possible.
          </div>
        </div>
        <div className={`expereince-section ${style.videoContainer}`}>
          <div className={style.imgWrapper}>
            <div className={style.overlay}></div>
            <img
              loading="lazy"
              src="https://res.cloudinary.com/solomonfrank/image/upload/v1655940357/apems/virtualEvent_pl9pmi.webp"
              alt="demo banner"
              className={style.demoBanner}
            />
          </div>

          <button className={style.videoContainer_wrap} onClick={() => setVisible(true)}>
            <span className={style.videoContainer_wrap_iconBox}>
              <FaPlay size={20} color="gray" className={style.videoContainer_wrap_iconBox_icon} />
            </span>
          </button>
        </div>
      </div>
      <Modal
        onCancel={() => setVisible(false)}
        destroyOnClose
        closable={false}
        bodyStyle={{ backgroundColor: 'rgba(0,0,0, 0.45)', padding: 0 }}
        open={visible}
        footer={null}
        width={800}
        centered
      >
        <div className={style.youtubeContainer}>
          <ReactPlayer
            url="https://www.youtube.com/embed/nsDv8AGsG7c"
            controls={true}
            width="100%"
            height="100%"
          />
        </div>
      </Modal>
    </section>
  );
};

export default Experience;
