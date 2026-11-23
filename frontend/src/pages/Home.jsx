import './Home.css';
import { useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const GET_HOME_DATA = gql`
  query GetHomeData {
    bio {
      name
      description
      imageUrl
    }
    expo_intro {
      description
    }
  }
`;

function Home() {
  const { t } = useTranslation();
  const { data, loading, error } = useQuery(GET_HOME_DATA);

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [globalMousePos, setGlobalMousePos] = useState({ x: 0, y: 0 });
  const [hoveredId, setHoveredId] = useState(null);
  const [containerRect, setContainerRect] = useState(null);

  if (loading) return <div>Chargement...</div>;
  if (error) return <div>Erreur: {error.message}</div>;
  if (!data) return <div>Pas de données</div>;

  const exhibitions = [
    {
      id: 1,
      titleKey: 'exhibitions.personal2023.title',
      imageUrl: 'image1bis.png',
      color: '#990000',
    },
    {
      id: 2,
      titleKey: 'exhibitions.modernGallery.title',
      imageUrl: 'image2.png',
      color: '#5B3B70',
      galleryImages: [
        'image2.png',
        'image1.png',
        'image6.png',
        'HomePage.jpeg',
        'iamge3.JPG',
        'image4.png',
        'image5.jpg',
      ],
    },
    {
      id: 3,
      titleKey: 'Personal Exhibition 2023',
      imageUrl: 'image10.png',
      color: '#002366',
      galleryImages: [
        'image10.png',
        'image11.png',
        'image12.png',
        'image13.png',
        'image14.png',
      ],
    },
    {
      id: 4,
      titleKey: '60 ans d\'immigration',
      imageUrl: 'image20.png',
      color: '#990000',
    },
    {
      id: 5,
      titleKey: 'LaGalerie.be',
      imageUrl: 'gal.jpg',
      color: '#5B3B70',
    },
    {
      id: 6,
      titleKey: 'exhibitions.contemporaryGallery.title',
      imageUrl: 'image40.png',
      color: '#002366',
    },
  ];

  const getImageUrl = (imageUrl) => {
    if (!imageUrl) return '';
    if (imageUrl.startsWith('/')) return imageUrl;
    if (imageUrl === 'HomePage.jpeg') return '/HomePage.jpeg';
    return `/assets/${imageUrl}`;
  };

  const handleContainerMouseMove = (e) => {
    const container = e.currentTarget;
    const rect = container.getBoundingClientRect();
    setContainerRect(rect);

    // Position par rapport au viewport (pour fixed positioning)
    const globalX = e.clientX;
    const globalY = e.clientY;
    setGlobalMousePos({ x: globalX, y: globalY });

    const target = e.target.closest('.exhibition-item');
    if (target) {
      const itemRect = target.getBoundingClientRect();
      const x = e.clientX - itemRect.left;
      const y = e.clientY - itemRect.top;
      
      // Calculate percentage for proper background positioning
      const xPercent = (x / itemRect.width) * 100;
      const yPercent = (y / itemRect.height) * 100;
      
      setMousePos({ x, y, xPercent, yPercent });

      const id = parseInt(target.getAttribute('data-id'));
      setHoveredId(id);
    } else if (hoveredId) {
      // Quand on sort du carré, continuer à mettre à jour les positions avec le dernier carré survolé
      const lastHoveredItem = container.querySelector(`[data-id="${hoveredId}"]`);
      if (lastHoveredItem) {
        const itemRect = lastHoveredItem.getBoundingClientRect();
        const x = e.clientX - itemRect.left;
        const y = e.clientY - itemRect.top;
        
        const xPercent = (x / itemRect.width) * 100;
        const yPercent = (y / itemRect.height) * 100;
        
        setMousePos({ x, y, xPercent, yPercent });
      }
    }
  };

  const handleMouseLeave = () => {
    setHoveredId(null);
  };

  return (
    <>
      <div>
        <img className="home-hero-image" src={getImageUrl('HomePage.jpeg')} alt="Artwork 1" />
      </div>

      <div className="bio-section">
        <div className="bio-image-wrap">
          <div className="bio-image">
            <img src="/assets/BioPage.jpg" alt={t('homePage.bioName')} />
          </div>
        </div>
        <div className="bio-text">
          <h2>{t('homePage.bioName')}</h2>
          <p>{t('homePage.bioDescription')}</p>
        </div>
      </div>

      <div className="artwork-transition" aria-hidden="true">
        <span className="transition-figure transition-crescent">☾</span>
        <span className="transition-figure transition-double-arc">◌</span>
        <span className="transition-figure transition-star">✶</span>
        <span className="transition-figure transition-triangle">△</span>
        <span className="transition-figure transition-circle">⊕</span>
      </div>

      <div className="expo-section" style={{ backgroundImage: `url(${getImageUrl('IMG_1121.jpg')})` }}>
        <h1>{t('homePage.expoHeading')}</h1>
        <p className="expo-artist-text">{t('homePage.expoIntro')}</p>
      </div>
      <div className="exhibitions-container" onMouseMove={handleContainerMouseMove} onMouseLeave={handleMouseLeave}>
        {hoveredId && containerRect && (
          <div
            className="global-circle"
            style={{
              '--global-x': `${globalMousePos.x}px`,
              '--global-y': `${globalMousePos.y}px`,
              '--image-url': `url(${getImageUrl(exhibitions.find(e => e.id === hoveredId)?.imageUrl)})`,
              '--bg-pos-x': `${mousePos.xPercent}%`,
              '--bg-pos-y': `${mousePos.yPercent}%`,
            }}
          />
        )}
        {exhibitions.map((exhibition) => (
          <Link key={exhibition.id} to={`/exhibition/${exhibition.id}`} className="exhibition-link">
            <div
              className="exhibition-item"
              data-id={exhibition.id}
              style={{
                '--bg-pos-x': hoveredId === exhibition.id ? `${mousePos.xPercent}%` : '50%',
                '--bg-pos-y': hoveredId === exhibition.id ? `${mousePos.yPercent}%` : '50%',
              }}
              onMouseEnter={() => setHoveredId(exhibition.id)}
            >
              <img src={getImageUrl(exhibition.imageUrl)} alt={t(exhibition.titleKey)} />
              <h2>{t(exhibition.titleKey)}</h2>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default Home;