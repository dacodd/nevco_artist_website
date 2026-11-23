import { useParams, Link, useSearchParams } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import { useTranslation } from 'react-i18next';
import { useEffect, useState, useRef } from 'react';
import './ArtworkDetail.css';

const GET_ARTWORK = gql`
  query GetArtwork($id: ID!) {
    artwork(id: $id) {
      id
      title
      imageUrl
      imageUrls
      year
      technique
      dimensions
      description
    }
  }
`;

function ArtworkDetail() {
  const { t } = useTranslation();
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const fromPage = Number.parseInt(searchParams.get('fromPage') || '1', 10) || 1;
  const { loading, error, data } = useQuery(GET_ARTWORK, {
    variables: { id },
  });
  const [magnifierPos, setMagnifierPos] = useState({ x: 0, y: 0, show: false });
  const [, setImageDimensions] = useState({ width: 0, height: 0 });
  const [selectedImageUrl, setSelectedImageUrl] = useState(null);
  const imageRef = useRef(null);
  const magnifierSize = 120;

  useEffect(() => {
    setSelectedImageUrl(null);
  }, [id]);

  const handleImageLoad = (img) => {
    // Obtenir les dimensions réelles de l'image affichée
    setImageDimensions({
      width: img.offsetWidth,
      height: img.offsetHeight,
    });
  };

  const handleMouseMove = (e) => {
    if (!imageRef.current) return;

    const { left, top, width, height } = imageRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    if (x >= 0 && x <= width && y >= 0 && y <= height) {
      const radius = magnifierSize / 2;
      // Background size = image zoomée 2x
      const bgWidth = width * 2;
      const bgHeight = height * 2;
      // Position du zoom centré sur le curseur
      const bgX = -x * 2 + radius;
      const bgY = -y * 2 + radius;

      setMagnifierPos({
        x: x - radius,
        y: y - radius,
        bgX,
        bgY,
        bgWidth,
        bgHeight,
        show: true,
      });
    } else {
      setMagnifierPos({ ...magnifierPos, show: false });
    }
  };

  const handleMouseLeave = () => {
    setMagnifierPos({ ...magnifierPos, show: false });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const artwork = data.artwork;
  const displayedImageUrl = selectedImageUrl || artwork.imageUrl;
  const description = artwork.description || t(`artworkDetails.${artwork.id}.description`, { defaultValue: '' });

  return (
    <div className="artwork-detail-container">
      {/*<Link to="/artworks" className="back-link">{t('backToArtworks')}</Link>*/}
      <div className="artwork-detail">
        <div className="artwork-image-wrapper" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
          <img
            ref={imageRef}
            src={`/assets/${displayedImageUrl}`}
            alt={artwork.title}
            className="artwork-image"
            onLoad={(e) => handleImageLoad(e.target)}
          />
          {magnifierPos.show && (
            <div
              className="magnifier"
              style={{
                left: `${magnifierPos.x}px`,
                top: `${magnifierPos.y}px`,
                backgroundImage: `url(/assets/${displayedImageUrl})`,
                backgroundPosition: `${magnifierPos.bgX}px ${magnifierPos.bgY}px`,
                backgroundSize: `${magnifierPos.bgWidth}px ${magnifierPos.bgHeight}px`,
              }}
            />
          )}
        </div>
        {artwork.imageUrls.length > 1 && (
          <div className="artwork-gallery" aria-label="Vues de l'œuvre">
            {artwork.imageUrls.map((imageUrl) => (
              <button
                key={imageUrl}
                type="button"
                className={displayedImageUrl === imageUrl ? 'gallery-thumbnail active' : 'gallery-thumbnail'}
                onClick={() => setSelectedImageUrl(imageUrl)}
              >
                <img src={`/assets/${imageUrl}`} alt="Vue de l'œuvre" />
              </button>
            ))}
          </div>
        )}
        <div className="artwork-info">
          <div className="artwork-details">
            {artwork.year && (
              <div className="detail-item">
                <span className="detail-label">{t('artworkDetail.labels.year')}</span>
                <span className="detail-value">{artwork.year}</span>
              </div>
            )}
            {artwork.technique && (
              <div className="detail-item">
                <span className="detail-label">{t('artworkDetail.labels.technique')}</span>
                <span className="detail-value">{artwork.technique}</span>
              </div>
            )}
            {artwork.dimensions && (
              <div className="detail-item">
                <span className="detail-label">{t('artworkDetail.labels.dimensions')}</span>
                <span className="detail-value">{artwork.dimensions}</span>
              </div>
            )}
            {description && (
              <div className="detail-item">
                <span className="detail-label">{t('artworkDetail.labels.description')}</span>
                <p className="detail-value">{description}</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <Link to={`/artworks?page=${fromPage}`} className="back-link">{t('backToArtworks')}</Link>
    </div>
  );
}

export default ArtworkDetail;
