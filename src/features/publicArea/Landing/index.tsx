import { MainLayout } from '@/components/Layout/Public';

import Experience from './components/Experience';
import Features from './components/Features';
import Footer from './components/Footer';
import { Header } from './components/Header';
import Summary from './components/Summary';

// import { useSidebarContext } from '@/components/Layout/Public/hooks';

export const Landing = () => {
  return (
    <MainLayout>
      <main style={{ position: 'relative' }}>
        <Header />
        <Experience />
        <Summary />
        <Features />
        <Footer />
      </main>
    </MainLayout>
  );
};
