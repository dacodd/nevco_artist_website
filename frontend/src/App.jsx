import { Routes, Route, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Home from './pages/Home';
import Artworks from './pages/Artworks';
import ArtworkDetail from './pages/ArtworkDetail';
import ExhibitionDetail from './pages/ExhibitionDetail';
// import Bio from './pages/Bio';
import Contact from './pages/Contact';
import Footer from './pages/Footer';
import './App.css';

function App() {
  const { t, i18n } = useTranslation();
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsMenuOpen(false);
  };

  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={isMenuOpen ? 'menu-is-open' : ''}>
      <header>
        <div className="header-top">
          <h1>
            <Link to="/" className="artist-name">{t('artistName')}</Link>
          </h1>
          <div className="language-buttons">
            <button onClick={() => changeLanguage('en')}>EN</button>
            <button onClick={() => changeLanguage('fr')}>FR</button>
            <button onClick={() => changeLanguage('tr')}>TR</button>
          </div>
          <button
            type="button"
            className="menu-toggle"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
        <nav id="mobile-navigation" className={isMenuOpen ? 'is-open' : ''}>
          <Link to="/" onClick={closeMenu}>{t('home')}</Link>
          <Link to="/artworks" onClick={closeMenu}>{t('artworks')}</Link>
          {/*<Link to="/bio">{t('bio')}</Link>*/}
          <Link to="/contact" onClick={closeMenu}>{t('contact')}</Link>
          <div className="mobile-language-buttons">
            <button onClick={() => changeLanguage('en')}>EN</button>
            <button onClick={() => changeLanguage('fr')}>FR</button>
            <button onClick={() => changeLanguage('tr')}>TR</button>
          </div>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/artworks" element={<Artworks />} />
          <Route path="/artwork/:id" element={<ArtworkDetail />} />
          <Route path="/exhibition/:id" element={<ExhibitionDetail />} />
          {/*<Route path="/bio" element={<Bio />} />*/}
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      {showScrollTop && (
        <button
          type="button"
          className="scroll-to-top"
          onClick={scrollToTop}
          aria-label="Remonter en haut de la page"
        >
          ↑
        </button>
      )}
      <Footer />
    </div>
  );
}

export default App;