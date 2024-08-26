import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import { AppRoutes } from './routes';
import { useEffect } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function App() {
  const ScrollToHash = () => {
    const location = useLocation();

    useEffect(() => {
      // ページ遷移後にスクロール処理を遅延させる
      setTimeout(() => {
        if (location.hash) {
          const element = document.getElementById(
            location.hash.replace('#', ''),
          );
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 0); // setTimeoutを使って、レンダリングが完了した後にスクロールする
    }, [location]);
    return null;
  };

  return (
    <Router>
      <ScrollToHash />
      <ParallaxProvider>
        <AppRoutes />
      </ParallaxProvider>
    </Router>
  );
}

export default App;
