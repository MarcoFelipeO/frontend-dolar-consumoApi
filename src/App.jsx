import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import { DolarProvider } from './context/DolarContext';

export default function App() {
  return (
    <DolarProvider>
      <Header />
      <Home />
      <Footer />
    </DolarProvider>
  );
}
