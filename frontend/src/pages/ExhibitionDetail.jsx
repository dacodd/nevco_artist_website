import './ExhibitionDetail.css';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const exhibitions = [
  {
    id: 1,
    imageUrl: 'image1bis.png',
    titleKey: 'exhibitions.personal2023.title',
    descriptionKey: 'exhibitions.personal2023.description',
    artworkIds: [15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26],
  },
  {
    id: 2,
    imageUrl: 'image2.png',
    titleKey: 'exhibitions.modernGallery.title',
    descriptionKey: 'exhibitions.modernGallery.description',
    artworkIds: [2, 9, 14, 19],
    galleryImages: ['image2.png', 'image1.png', 'image6.png', '/HomePage.jpeg', 'iamge3.JPG', 'image4.png', 'image5.jpg'],
  },
  {
    id: 3,
    imageUrl: 'image10.png',
    titleKey: 'Personal Exhibition 2023',
    descriptionKey: 'exhibitions.contemporaryArt.description',
    artworkIds: [3, 10, 15, 20],
    galleryImages: ['image10.png', 'image11.png', 'image12.png', 'image13.png', 'image14.png'],
  },
  {
    id: 4,
    imageUrl: 'image20.png',
    titleKey: '60 ans d\'immigration',
    descriptionKey: 'exhibitions.internationalArtSalon.description',
    artworkIds: [4, 11, 16, 21],
    galleryImages: ['image20.png', 'image21.png', 'image22.png', 'image23.png', 'image24.png', 'image25.png', 'image26.png'],
  },
  {
    id: 5,
    imageUrl: 'gal.jpg',
    titleKey: 'LaGalerie.be',
    descriptionKey: 'exhibitions.collectiveExhibition.description',
    artworkIds: [5, 12, 17, 22],
    galleryImages: ['gal1.jpg','gal2.jpg', 'gal3.jpg', 'gal4.jpg','image30.png', 'image31.png', 'image32.png', 'image33.png', 'image34.png', 'image35.png', 'image36.png', 'image37.png', 'image38.png'],
  },
  {
    id: 6,
    imageUrl: 'image40.png',
    titleKey: 'exhibitions.contemporaryGallery.title',
    descriptionKey: 'exhibitions.contemporaryGallery.description',
    artworkIds: [6, 13, 18, 23],
    galleryImages: ['image41.png', 'image42.png', 'image43.png', 'image44.png', 'image45.png', 'image46.jpg', 'image47.jpg', 'image48.png'],
  },
];

const allArtworks = [
  { id: '1', title: '1', imageUrl: 'IMG_6695.jpg', year: '2023', technique: 'Oil on Canvas', dimensions: '50 x 70 cm', description: 'A contemporary piece exploring light and shadow.' },
  { id: '2', title: '2', imageUrl: 'IMG_6802.jpg', year: '2023', technique: 'Acrylic', dimensions: '60 x 80 cm', description: 'An expressive study in color and form.' },
  { id: '3', title: '3', imageUrl: 'IMG_0440.jpg', year: '2022', technique: 'Mixed Media', dimensions: '45 x 65 cm', description: 'Layered textures and digital elements.' },
  { id: '4', title: '4', imageUrl: 'IMG_8117.JPG', year: '2023', technique: 'Oil on Canvas', dimensions: '100 x 120 cm', description: 'A large-scale work on identity.' },
  { id: '5', title: '5', imageUrl: 'IMG_0958.jpeg', year: '2023', technique: 'Acrylic', dimensions: '55 x 75 cm', description: 'Exploring the boundaries of perception.' },
  { id: '6', title: '6', imageUrl: 'IMG_6704.jpeg', year: '2022', technique: 'Oil on Canvas', dimensions: '50 x 70 cm', description: 'A meditation on transition and change.' },
  { id: '7', title: '7', imageUrl: 'IMG_1081.jpeg', year: '2023', technique: 'Digital Print', dimensions: '40 x 60 cm', description: 'Contemporary digital expression.' },
  { id: '8', title: '8', imageUrl: 'IMG_1119.jpeg', year: '2023', technique: 'Acrylic', dimensions: '70 x 90 cm', description: 'Abstract composition with bold colors.' },
  { id: '9', title: '9', imageUrl: 'IMG_1288.jpeg', year: '2022', technique: 'Oil on Canvas', dimensions: '60 x 80 cm', description: 'Intimate portrait study.' },
  { id: '10', title: '10', imageUrl: 'FullSizeRender (1).jpeg', year: '2023', technique: 'Mixed Media', dimensions: '50 x 70 cm', description: 'Conceptual exploration.' },
  { id: '11', title: '11', imageUrl: 'FullSizeRender.jpeg', year: '2023', technique: 'Acrylic', dimensions: '55 x 75 cm', description: 'Abstract landscape.' },
  { id: '12', title: '12', imageUrl: 'IMG_1121.jpg', year: '2022', technique: 'Oil on Canvas', dimensions: '65 x 85 cm', description: 'Urban scenery.' },
  { id: '13', title: '13', imageUrl: 'IMG_7826.jpeg', year: '2023', technique: 'Acrylic', dimensions: '50 x 70 cm', description: 'Modern composition.' },
  { id: '14', title: '14', imageUrl: 'IMG_1148.jpg', year: '2023', technique: 'Mixed Media', dimensions: '45 x 65 cm', description: 'Layered narrative.' },
  { id: '15', title: '15', imageUrl: 'IMG_7810.jpg', year: '2022', technique: 'Oil on Canvas', dimensions: '90 x 110 cm', description: 'Large scale study.' },
  { id: '16', title: '16', imageUrl: 'IMG_7814.jpg', year: '2023', technique: 'Acrylic', dimensions: '50 x 70 cm', description: 'Contemporary reflection.' },
  { id: '17', title: '17', imageUrl: 'IMG_7816.jpg', year: '2023', technique: 'Oil on Canvas', dimensions: '55 x 75 cm', description: 'Textured surface study.' },
  { id: '18', title: '18', imageUrl: 'IMG_7817.jpg', year: '2022', technique: 'Digital Print', dimensions: '60 x 80 cm', description: 'Experimental work.' },
  { id: '19', title: '19', imageUrl: 'IMG_7818.jpg', year: '2023', technique: 'Acrylic', dimensions: '50 x 70 cm', description: 'Color study.' },
  { id: '20', title: '20', imageUrl: 'IMG_7819.jpg', year: '2023', technique: 'Mixed Media', dimensions: '45 x 65 cm', description: 'Mixed technique exploration.' },
  { id: '21', title: '21', imageUrl: 'IMG_7820.jpg', year: '2022', technique: 'Oil on Canvas', dimensions: '70 x 90 cm', description: 'Bold expression.' },
  { id: '22', title: '22', imageUrl: 'IMG_7821.jpg', year: '2023', technique: 'Acrylic', dimensions: '55 x 75 cm', description: 'Minimalist approach.' },
  { id: '23', title: '23', imageUrl: 'IMG_7823.jpg', year: '2023', technique: 'Oil on Canvas', dimensions: '50 x 70 cm', description: 'Gestural work.' },
  { id: '24', title: '24', imageUrl: 'IMG_7825.jpg', year: '2022', technique: 'Digital Print', dimensions: '40 x 60 cm', description: 'Digital exploration.' },
  { id: '25', title: '25', imageUrl: 'IMG_7806.jpg', year: '2023', technique: 'Acrylic', dimensions: '30 x 45 cm', description: 'Small scale study.' },
  { id: '26', title: '26', imageUrl: 'IMG_7812.jpg', year: '2023', technique: 'Oil on Canvas', dimensions: '35 x 50 cm', description: 'Intimate composition.' },
];

function ExhibitionDetail() {
  const { t } = useTranslation();
  const { id } = useParams();
  const exhibition = exhibitions.find((e) => e.id === parseInt(id));

  const getAssetUrl = (url) => (url?.startsWith('/') ? url : `/assets/${url}`);

  if (!exhibition) {
    return (
      <div className="exhibition-detail">
        <div className="not-found">
          <h1>{t('exhibitionDetail.notFound')}</h1>
          <Link to="/">{t('exhibitionDetail.backToHome')}</Link>
        </div>
      </div>
    );
  }

  const exhibitionArtworks = allArtworks.filter((artwork) =>
    exhibition.artworkIds.includes(parseInt(artwork.id))
  );

  const exhibitionCards = exhibition.galleryImages
    ? exhibition.galleryImages.map((image, index) => ({
        key: `gallery-${index}`,
        imageUrl: image,
      }))
    : exhibitionArtworks.map((artwork) => ({
        key: artwork.id,
        imageUrl: artwork.imageUrl,
        title: artwork.id,
        year: artwork.year,
        technique: artwork.technique,
        link: `/artwork/${artwork.id}`,
      }));

  return (
    <div className="exhibition-detail">
      <div
        className="exhibition-header"
        style={{ backgroundImage: `url(${getAssetUrl(exhibition.imageUrl)})` }}
      >
        <div className="header-overlay"></div>
        <div className="header-content">
          <h1>{t(exhibition.titleKey)}</h1>
        </div>
      </div>

      <div className="exhibition-artworks">
        <h2>{t('exhibitionDetail.artworksHeading')}</h2>
        <div className="artworks-grid">
          {exhibitionCards.map((card) => (
            card.link ? (
              <Link key={card.key} to={card.link} className="artwork-card">
                <div className="artwork-image">
                  <img src={getAssetUrl(card.imageUrl)} alt={card.title || card.key} />
                </div>
              </Link>
            ) : (
              <div key={card.key} className="artwork-card gallery-card">
                <div className="artwork-image">
                  <img src={getAssetUrl(card.imageUrl)} alt={`${t(exhibition.titleKey)} ${card.key}`} />
                </div>
              </div>
            )
          ))}
        </div>
      </div>

      <Link to="/" className="back-link">← {t('exhibitionDetail.backToExhibitions')}</Link>
    </div>
  );
}

export default ExhibitionDetail;
