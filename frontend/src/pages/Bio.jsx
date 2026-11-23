import { useQuery, gql } from '@apollo/client';
import { useTranslation } from 'react-i18next';
import './Bio.css';

const GET_BIO = gql`
  query GetBio {
    bio {
      name
      description
      imageUrl
    }
  }
`;

function Bio() {
  const { t } = useTranslation();
  const { loading, error, data } = useQuery(GET_BIO);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="bio-container">
      <img src={`/assets/${data.bio.imageUrl}`} alt={data.bio.name} className="bio-image" />
      <div className="bio-text">
        <h2>{data.bio.name}</h2>
        <p>{t('description')}</p>
      </div>
    </div>
  );
}

export default Bio;