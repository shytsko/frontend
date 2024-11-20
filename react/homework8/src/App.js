import { Outlet } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Header from './components/header/Header'
import Subscribe from './components/subscribe/Subscribe';

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Subscribe />
      <Footer />
    </>
  );
}

export default App;
