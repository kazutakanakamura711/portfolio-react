import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import { AppRoutes } from './routes';
import { useEffect } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function App() {
  const ScrollToTop = () => {
    const location = useLocation();

    useEffect(() => {
      // ページ遷移後に常にトップにスクロール
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [location]);
    return null;
  };

  return (
    <Router>
      <ScrollToTop />
      <ParallaxProvider>
        <AppRoutes />
      </ParallaxProvider>
    </Router>
  );
}

export default App;
