import { useQuery, gql } from '@apollo/client';
import { Link } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Artworks.css';

const GET_ARTWORKS = gql`
  query GetArtworks($page: Int, $limit: Int) {
    artworks(page: $page, limit: $limit) {
      artworks {
        id
        title
        imageUrl
      }
      total
      page
      limit
      totalPages
    }
  }
`;

function Artworks() {
  const [searchParams, setSearchParams] = useSearchParams();
  const requestedPage = Number.parseInt(searchParams.get('page') || '1', 10);
  const [page, setPage] = useState(Number.isNaN(requestedPage) ? 1 : requestedPage);
  const { loading, error, data } = useQuery(GET_ARTWORKS, {
    variables: { page, limit: 12 },
  });

  useEffect(() => {
    const nextPage = Number.parseInt(searchParams.get('page') || '1', 10);
    setPage(Number.isNaN(nextPage) ? 1 : nextPage);
  }, [searchParams]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [page]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const { artworks: artworksList, totalPages } = data.artworks;

  const handlePrevious = () => {
    if (page > 1) setSearchParams({ page: String(page - 1) });
  };

  const handleNext = () => {
    if (page < totalPages) setSearchParams({ page: String(page + 1) });
  };

  return (
    <div className="artworks-page">
      <div className="artworks-container">
        {artworksList.map((artwork) => (
          <Link key={artwork.id} to={`/artwork/${artwork.id}?fromPage=${page}`} className="artwork-link">
            <div className="artwork-item">
              <img src={`/assets/${artwork.imageUrl}`} alt={`Artwork ${artwork.id}`} />
            </div>
          </Link>
        ))}
      </div>
      <div className="pagination">
        <button onClick={handlePrevious} disabled={page === 1} className="pagination-btn">
          <FaChevronLeft />
        </button>
        <span className="page-info">
          Page {page} / {totalPages}
        </span>
        <button onClick={handleNext} disabled={page === totalPages} className="pagination-btn">
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}

export default Artworks;