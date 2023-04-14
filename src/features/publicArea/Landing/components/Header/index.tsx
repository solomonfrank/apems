import { CgMouse } from 'react-icons/cg';

import { Button } from '@/components/Element';
import { InputField } from '@/components/Form/InputField';
import NavHeader from '@/components/Layout/Public/NavHeader';

import { MeetingInput } from '../MeetingInput';

import styles from './index.module.scss';

export const Header = () => {
  return (
    <section className={styles.header}>
      <div className={styles.navHeader}>
        <NavHeader />
      </div>
      <div className={styles.overlay}></div>
      <img
        className={styles.headerBannerr}
        alt="banner"
        src="https://res.cloudinary.com/solomonfrank/image/upload/v1655940339/apems/conf-img_dbzw3g.webp"
      />
      <section className={styles.section}>
        <h4 className={styles.section__caption}>Events your own way</h4>
        <p className={`section__caption ${styles.section__caption__subpara}`}>
          Hold meetings and make decisions in the most convenient way possible.
        </p>
        <MeetingInput>
          <InputField
            type="text"
            // registration={register('passcode')}
            placeholder="Enter meeting code"
            className={styles.meetingInput}
          />

          <Button type="button" className={styles.meetingBtn}>
            Join Event
          </Button>
        </MeetingInput>

        <div className={styles.support__call}>
          <span className={styles.mouseImage}>
            <CgMouse color="#D5D5D5" size={30} />
          </span>
        </div>
      </section>
    </section>
  );
};
