import { useBrowserEvent } from '@/api/events/publicEvent';
import { Spinner } from '@/components/Element';
import EventCards from '@/components/EventCard';
import { MainLayout } from '@/components/Layout/Public';

import Experience from './components/Experience';
import Features from './components/Features';
import Footer from './components/Footer';
import { Header } from './components/Header';
import Summary from './components/Summary';
import styles from './index.module.scss';

export const Landing = () => {
  const currentEvent = useBrowserEvent({ filters: { filter: 'current', per_page: '8' } });
  console.log(currentEvent.data);
  return (
    <MainLayout>
      <main style={{ position: 'relative' }}>
        <Header />
        <Experience />
        <div className={styles.eventSection}>
          <h2 className={styles.enventCaption}>Events</h2>

          <div className={styles.eventContainer}>
            {currentEvent.isLoading && <Spinner visible={currentEvent.isLoading} />}

            {currentEvent && currentEvent.data?.data.length ? (
              currentEvent?.data?.data.map((item) => (
                <EventCards
                  key={item.id}
                  id={item.id}
                  logo={item.logo}
                  title={item.title}
                  banner={item.banner}
                  start_date={item.start_date}
                />
              ))
            ) : (
              <></>
            )}
          </div>
        </div>
        <Summary />
        <Features />
        <Footer />
      </main>
    </MainLayout>
  );
};
